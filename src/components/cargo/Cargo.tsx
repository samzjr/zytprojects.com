/**
 * Building blocks that mirror Cargo's page elements, so a Cargo page can be
 * transcribed almost line for line. Styles live in src/styles/cargo-page.css.
 *
 *   Cargo markup                         Here
 *   <column-set gutter="4rem">           <Row gutter={4}>
 *   <column-unit span="3">               <Col span={3}>
 *   <media-item hash=…>                  <Media src=… w h />
 *   <gallery-columnized gutter="2rem">   <Gallery gutter={2}>
 *   <br> × n                             <Lines n={n} />
 */
import type { CSSProperties, ReactNode } from "react";

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
export function Row({ gutter = 1, children }: { gutter?: number; children: ReactNode }) {
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

/** Three equal columns. `gutter` is in base units. */
export function Gallery({ gutter = 1, children }: { gutter?: number; children: ReactNode }) {
  return (
    <div className="cg-gallery" style={{ "--gutter": gutter } as Vars}>
      {children}
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
  /** Cargo's limit-by="height" scale="Nrem": cap the height at N base units. */
  maxHeight?: number;
  /** Cargo's limit-by="width" scale="N%": fixed width as a % of the column. */
  widthPercent?: number;
  caption?: ReactNode;
};

export function Media({ src, w, h, alt = "", video, loop = true, maxHeight, widthPercent, caption }: MediaProps) {
  const style: Vars = { "--ar": w / h };
  if (maxHeight) style["--fit"] = `calc(var(--b) * ${maxHeight})`;
  if (widthPercent) {
    style.width = `${widthPercent}%`;
    style.maxWidth = "none";
  }

  return (
    <figure className="cg-media" style={style}>
      <span className="cg-media__frame">
        {video ? (
          <video src={src} autoPlay muted loop={loop} playsInline preload="metadata" />
        ) : (
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        )}
      </span>
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}
