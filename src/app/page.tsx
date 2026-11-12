import type { Metadata } from "next";
import Link from "next/link";
import { SITE_DESCRIPTION } from "@/lib/site";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import CargoHeader from "@/components/cargo/CargoHeader";

export const metadata: Metadata = {
  title: { absolute: "Sam Z Jr Portfolio" },
  description: SITE_DESCRIPTION,
};

// Layout and sizes mirror the Cargo homepage; see src/styles/cargo-home.css.
export default function Home() {
  return (
    <div className="cargo-home">
      <CargoHeader />

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
