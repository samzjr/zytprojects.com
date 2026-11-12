import Link from "next/link";

/** Top row shared by Selected (/) and Archive: logo left, about right. Styles: src/styles/home.css */
export default function WorkHeader() {
  return (
    <header className="home__top">
      <Link href="/" className="home__logo" aria-label="zytprojects home">
        <img src="/media/images/zytprojects-logo.png" alt="zytprojects" />
      </Link>
      <Link href="/information" className="home__link">
        about
      </Link>
    </header>
  );
}
