"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { label: string; href: string; count: number };

const TAB_WIDTH_PX = 168;
const TAB_GAP_PX = 3;

/** Frosted tab bar floating at the top center of the screen (Selected / Archive). */
export default function FloatingBar({ tabs }: { tabs: Tab[] }) {
  const pathname = usePathname();
  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => pathname === tab.href),
  );
  const indicatorX = activeIndex * (TAB_WIDTH_PX + TAB_GAP_PX);

  return (
    <nav className="floating-bar" aria-label="Work">
      <div
        className="floating-bar__indicator"
        style={{ transform: `translate3d(${indicatorX}px, 0, 0)` }}
        aria-hidden
      />
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`floating-bar__tab${active ? " is-active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <span>{tab.label}</span>
            <span className="floating-bar__count">{tab.count}</span>
          </Link>
        );
      })}
    </nav>
  );
}
