import Link from "next/link";

/** Top row shared by Selected (/) and Archive: logo left, about right. Styles: src/styles/home.css */
export default function WorkHeader() {
  return (
    <header className="home__top">
      <Link href="/" className="home__logo" aria-label="zytprojects home">
        <img src="/media/images/zytprojects-logo.png" alt="zytprojects" />
      </Link>
      <nav className="home__nav" aria-label="Site">
        <a
          href="/resume.pdf"
          className="home__link"
          download="Sam-Zhan-Resume.pdf"
        >
          resume
        </a>
        <Link href="/information" className="home__link">
          about
        </Link>
      </nav>
    </header>
  );
}
