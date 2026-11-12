import FloatingBar from "@/components/FloatingBar";
import { ARCHIVE_ITEMS, FEATURED_PROJECTS } from "@/data/portfolioData";

const WORK_TABS = [
  { label: "Selected", href: "/", count: FEATURED_PROJECTS.length },
  { label: "Archive", href: "/archive", count: ARCHIVE_ITEMS.length },
];

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingBar tabs={WORK_TABS} />
      {children}
    </>
  );
}
