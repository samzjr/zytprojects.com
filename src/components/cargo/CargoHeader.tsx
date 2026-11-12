import Link from "next/link";

/** Cargo's nav bar: image logo left, Archive / Information right-aligned on the 12-column grid. */
export default function CargoHeader() {
  return (
    <header className="cg-header">
      <Link href="/" className="cg-header__logo" aria-label="zytprojects home">
        <img src="/media/images/zytprojects-logo.png" alt="zytprojects" />
      </Link>
      <Link href="/archive" className="cg-header__link cg-header__link--archive">
        Archive
      </Link>
      <Link href="/information" className="cg-header__link cg-header__link--info">
        Information
      </Link>
    </header>
  );
}
