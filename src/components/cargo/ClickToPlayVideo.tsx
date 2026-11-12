"use client";

import { useRef } from "react";

/** Cargo's non-autoplay video: shows the first frame, click to play/pause (with sound). */
export default function ClickToPlayVideo({ src, loop }: { src: string; loop?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  return (
    <video
      ref={ref}
      src={`${src}#t=0.001`}
      loop={loop}
      playsInline
      preload="metadata"
      style={{ cursor: "pointer" }}
      onClick={() => {
        const v = ref.current;
        if (!v) return;
        if (v.paused) void v.play();
        else v.pause();
      }}
    />
  );
}
