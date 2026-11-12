import type { Metadata } from "next";
import Link from "next/link";
import { SITE_DESCRIPTION } from "@/lib/site";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import WorkHeader from "@/components/WorkHeader";
export const metadata: Metadata = {
  title: { absolute: "Sam Z Jr Portfolio" },
  description: SITE_DESCRIPTION,
};

// Styles: src/styles/home.css
export default function Home() {
  return (
    <div className="home">
      <WorkHeader />

      <main className="home__grid">
        {FEATURED_PROJECTS.map((project, i) => (
          <Link key={project.slug} href={project.route} className="home-card">
            <img
              src={project.image}
              alt={`${project.cardTitle}, ${project.category}`}
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="home-card__label">
              <span>
                {project.cardTitle}
                <span className="home-card__dot"> · </span>
                {project.category}
              </span>
              <span className="home-card__arrow" aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        ))}
      </main>
    </div>
  );
}
