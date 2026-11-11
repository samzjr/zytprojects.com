import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Information",
  description:
    "Bio, experience, and contact for industrial designer Sam Zhan, based in San Francisco.",
};
import Footer from "@/components/Footer";
import { INFO_DATA } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function InformationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Bio, Experience, Education, Contact */}
          <div className="lg:col-span-7 space-y-12">
            {/* Bio Section */}
            <div className="space-y-4 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-[#222222]">
              <p className="text-xl md:text-2xl font-semibold text-black">
                Hey, I’m Sam Zhan.
              </p>
              <p>
                I’m an Industrial Designer based in{" "}
                <strong className="font-semibold text-black">San Francisco</strong>. I love
                bringing ideas into life and solving complex problems.
              </p>
              <p>
                I’m excited about{" "}
                <strong className="font-semibold text-black">
                  designing for the future
                </strong>{" "}
                and integrating technologies into{" "}
                <strong className="font-semibold text-black">
                  physical products
                </strong>
                .
              </p>
              <p>
                Beyond design, I also love to explore new sports and hobbies such as{" "}
                <strong className="font-semibold text-black">basketball</strong>,{" "}
                <strong className="font-semibold text-black">snowboarding</strong>,{" "}
                <a
                  href={INFO_DATA.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline underline-offset-2 hover:opacity-70 inline-flex items-center gap-0.5"
                >
                  podcasting <ArrowUpRight size={14} />
                </a>
                , <strong className="font-semibold text-black">travelling</strong>,{" "}
                <strong className="font-semibold text-black">
                  motorcycling and entrepreneurship
                </strong>
                .
              </p>
              <p className="pt-2">
                You can find my resume{" "}
                <a
                  href={INFO_DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black underline underline-offset-4 hover:opacity-70 inline-flex items-center gap-0.5"
                >
                  here <ArrowUpRight size={15} />
                </a>
                .
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Experience
              </h2>
              <div className="space-y-4">
                {INFO_DATA.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[15px] gap-1"
                  >
                    <div>
                      <span className="font-semibold text-black">
                        {exp.company}
                      </span>{" "}
                      — <span className="text-neutral-700">{exp.role}</span>
                    </div>
                    <span className="text-neutral-400 text-sm sm:text-right">
                      {exp.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4 border-t border-neutral-100 pt-8">
              <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Education
              </h2>
              <div className="space-y-4">
                {INFO_DATA.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[15px] gap-1"
                  >
                    <div>
                      <span className="font-semibold text-black">
                        {edu.institution}
                      </span>{" "}
                      — <span className="text-neutral-700">{edu.degree}</span>
                    </div>
                    <span className="text-neutral-400 text-sm sm:text-right">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3 border-t border-neutral-100 pt-8">
              <h2 className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Contact & Social
              </h2>
              <div className="flex flex-wrap items-center gap-6 text-[15px]">
                <a
                  href={`mailto:${INFO_DATA.email}`}
                  className="text-black font-medium hover:opacity-60 transition-opacity"
                >
                  {INFO_DATA.email}
                </a>
                <a
                  href={INFO_DATA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:opacity-60 transition-opacity"
                >
                  Instagram
                </a>
                <a
                  href={INFO_DATA.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium hover:opacity-60 transition-opacity"
                >
                  Spotify Podcast
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Gallery */}
          <div className="lg:col-span-5 space-y-6">
            {INFO_DATA.gallery.map((photo, idx) => (
              <div
                key={idx}
                className="w-full bg-[#f6f6f6] rounded-[6px] overflow-hidden"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-auto object-cover project-card-zoom"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
