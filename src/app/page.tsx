import type { Metadata } from "next";
import Link from "next/link";
import { SITE_DESCRIPTION } from "@/lib/site";
import { FEATURED_PROJECTS } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: { absolute: "Sam Z Jr Portfolio" },
  description: SITE_DESCRIPTION,
};

// Layout and sizes mirror the Cargo homepage; see src/styles/cargo-home.css.
export default function Home() {
  return (
    <div className="cargo-home">
      <header className="cargo-home__header">
        <Link href="/" className="cargo-home__logo" aria-label="zytprojects home">
          <img src="/media/images/zytprojects-logo.png" alt="zytprojects" />
        </Link>
        <Link href="/archive" className="cargo-home__nav-link cargo-home__nav-link--archive">
          Archive
        </Link>
        <Link href="/information" className="cargo-home__nav-link cargo-home__nav-link--info">
          Information
        </Link>
      </header>

      <main>
        <p className="cargo-home__bio">
          Sam Zhan is an <b>industrial designer </b>who is driven by curiousity for{" "}
          <b>emerging technologies</b>&nbsp;
          <br />
          and a passion for creating joyful experiences through <b>physical products </b>&nbsp;
        </p>

        <section className="cargo-home__gallery">
          {FEATURED_PROJECTS.map((project) => (
            <Link key={project.slug} href={project.route}>
              <img src={project.image} alt={project.cardTitle} />
            </Link>
          ))}
        </section>

        <div className="cargo-home__contact">
          <div>
            <b>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </b>
          </div>
          <div>
            <a href="mailto:samzhan1209@gmail.com">samzhan1209@gmail.com</a>
          </div>
        </div>
      </main>
    </div>
  );
}
