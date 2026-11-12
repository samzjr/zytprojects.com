"use client";

import { useState } from "react";

type Slide = { src: string; w: number; h: number; alt?: string };

/**
 * Cargo's gallery-slideshow with navigation="none": one slide at a time,
 * click to advance, cross-fade between slides. Box height is fixed (see .cg-slideshow); slides are fitted inside.
 */
export default function Slideshow({ slides, fadeSeconds = 0.2 }: { slides: Slide[]; fadeSeconds?: number }) {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="cg-slideshow"
      role="button"
      tabIndex={0}
      aria-label={`Slide ${index + 1} of ${slides.length}. Click for next.`}
      onClick={() => setIndex((index + 1) % slides.length)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
          e.preventDefault();
          setIndex((index + 1) % slides.length);
        }
      }}
    >
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt ?? ""}
          loading={i === 0 ? "eager" : "lazy"}
          style={{ opacity: i === index ? 1 : 0, transition: `opacity ${fadeSeconds}s ease` }}
        />
      ))}
    </div>
  );
}
