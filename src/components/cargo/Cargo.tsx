/**
 * Building blocks that mirror Cargo's page elements, so a Cargo page can be
 * transcribed almost line for line. Styles live in src/styles/cargo-page.css.
 *
 *   Cargo markup                         Here
 *   <column-set gutter="4rem">           <Row gutter={4}>
 *   <column-unit span="3">               <Col span={3}>
 *   <media-item hash=…>                  <Media src=… w h />
 *   <gallery-columnized gutter="2rem">   <Gallery gutter={2}>
 *   <gallery-justify gutter="1rem">      <Justify gutter={1}>
 *   <gallery-grid columns="2">           <Grid columns={2}>
 *   <gallery-slideshow>                  <Slideshow> (./Slideshow.tsx)
 *   <br> × n                             <Lines n={n} />
 */
import { Children, isValidElement, type CSSProperties, type ReactElement, type ReactNode } from "react";
import ClickToPlayVideo from "./ClickToPlayVideo";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** n line breaks. Cargo builds all vertical spacing out of these. */
export function Lines({ n }: { n: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <br key={i} />
      ))}
    </>
  );
}

/** A 12-column row. `gutter` is in base units (Cargo's default is 1). */
export function Row({ gutter = 1, children }: { gutter?: number; children?: ReactNode }) {
  return (
    <div className="cg-set" style={{ "--gutter": gutter } as Vars}>
      {children}
    </div>
  );
}

export function Col({ span = 12, children }: { span?: number; children?: ReactNode }) {
  return (
    <div className="cg-unit" style={{ gridColumn: `span ${span}` }}>
      {children}
    </div>
  );
}

/** Equal columns (Cargo's default is 3), items top-aligned. `gutter` is in base units. */
export function Gallery({
  gutter = 1,
  columns = 3,
  children,
}: {
  gutter?: number;
  columns?: number;
  children: ReactNode;
}) {
  return (
    <div className="cg-gallery" style={{ "--gutter": gutter, "--columns": columns } as Vars}>
      {children}
    </div>
  );
}

/** Equal columns and rows with the gutter both ways. */
export function Grid({ gutter = 1, columns = 3, children }: { gutter?: number; columns?: number; children: ReactNode }) {
  return (
    <div className="cg-grid" style={{ "--gutter": gutter, "--columns": columns } as Vars}>
      {children}
    </div>
  );
}

/**
 * One row where every item has the same height: each item's width is
 * proportional to its aspect ratio (Cargo ignores per-item size settings here).
 */
export function Justify({ gutter = 1, children }: { gutter?: number; children: ReactNode }) {
  return (
    <div className="cg-justify" style={{ "--gutter": gutter } as Vars}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        const { w, h } = (child as ReactElement<MediaProps>).props;
        return <div style={{ flex: `${w / h} 1 0`, minWidth: 0 }}>{child}</div>;
      })}
    </div>
  );
}

type MediaProps = {
  src: string;
  /** Natural pixel size, used for the aspect ratio. */
  w: number;
  h: number;
  alt?: string;
  video?: boolean;
  loop?: boolean;
  /** Videos autoplay muted by default; false = still first frame, click to play with sound. */
  autoplay?: boolean;
  /** Cargo's limit-by="height" scale="Nrem": cap the height at N base units. */
  maxHeight?: number;
  /** Cargo's limit-by="width" scale="N%": fixed width as a % of the column. */
  widthPercent?: number;
  caption?: ReactNode;
};

export function Media({
  src,
  w,
  h,
  alt = "",
  video,
  loop = true,
  autoplay = true,
  maxHeight,
  widthPercent,
  caption,
}: MediaProps) {
  const style: Vars = { "--ar": w / h };
  if (maxHeight) style["--fit"] = `calc(var(--b) * ${maxHeight})`;
  if (widthPercent) {
    style.width = `${widthPercent}%`;
    style.maxWidth = "none";
  }

  return (
    <figure className="cg-media" style={style}>
      <span className="cg-media__frame">
        {video && !autoplay ? (
          <ClickToPlayVideo src={src} loop={loop} />
        ) : video ? (
          <video src={src} autoPlay muted loop={loop} playsInline preload="metadata" />
        ) : (
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        )}
      </span>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}
