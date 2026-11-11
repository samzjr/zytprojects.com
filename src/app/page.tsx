import type { Metadata } from "next";
import Link from "next/link";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Sam Z Jr Portfolio" },
  description: SITE_DESCRIPTION,
};
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FEATURED_PROJECTS } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 px-6 md:px-10 pb-16">
        {/* Hero Bio Statement */}
        <section className="py-12 md:py-16 max-w-4xl">
          <h1 className="text-2xl md:text-[28px] lg:text-[32px] leading-[1.3] text-[#111111] font-normal tracking-tight">
            Sam Zhan is an{" "}
            <strong className="font-semibold text-black">industrial designer</strong>{" "}
            who is driven by curiosity for{" "}
            <strong className="font-semibold text-black">emerging technologies</strong>{" "}
            and a passion for creating joyful experiences through{" "}
            <strong className="font-semibold text-black">physical products</strong>.
          </h1>
        </section>

        {/* 4 Featured Project Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={project.route}
              className="group block focus:outline-none"
            >
              {/* Image Container with Hover Zoom */}
              <div className="w-full aspect-square bg-[#f6f6f6] rounded-[6px] overflow-hidden mb-4 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover project-card-zoom"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h2 className="text-[15px] font-semibold text-black group-hover:opacity-75 transition-opacity">
                  {project.cardTitle}
                </h2>
                <p className="text-[13px] text-neutral-600 leading-snug">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
