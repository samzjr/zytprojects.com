"use client";

import { useEffect, useState, type ReactNode } from "react";

type View = "overview" | "process";

const TABS: { id: View; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Behind the scenes" },
];

// Must match .floating-bar--project in src/styles/project.css
const TAB_WIDTH_PX = 200;
const TAB_GAP_PX = 3;

/**
 * Floating Overview / behind the scenes bar for project pages (same look as the
 * homepage's Selected / Archive bar). One click switches views; the URL keeps
 * the choice (#process) so a reviewer can be sent straight to the process.
 */
export default function ProjectViews({ overview, process }: { overview: ReactNode; process: ReactNode }) {
  const [view, setView] = useState<View>("overview");

  useEffect(() => {
    const fromHash = () => setView(window.location.hash === "#process" ? "process" : "overview");
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const select = (next: View) => {
    if (next === view) return;
    setView(next);
    const url = next === "process" ? "#process" : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0 });
  };

  const activeIndex = TABS.findIndex((t) => t.id === view);

  return (
    <>
      <nav className="floating-bar floating-bar--project" aria-label="Project sections">
        <div
          className="floating-bar__indicator"
          style={{ transform: `translate3d(${activeIndex * (TAB_WIDTH_PX + TAB_GAP_PX)}px, 0, 0)` }}
          aria-hidden
        />
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`floating-bar__tab${tab.id === view ? " is-active" : ""}`}
            aria-pressed={tab.id === view}
            onClick={() => select(tab.id)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      <div hidden={view !== "overview"}>{overview}</div>
      <div hidden={view !== "process"}>{process}</div>
    </>
  );
}
