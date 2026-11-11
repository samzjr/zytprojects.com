import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Archive",
  description: "Explorations, sketches, and hands-on making from Sam Zhan.",
};
import Footer from "@/components/Footer";
import { ARCHIVE_ITEMS } from "@/data/portfolioData";

export default function ArchivePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 px-6 md:px-10 pb-20">
        {/* Banner / Title */}
        <div className="py-12 md:py-16 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-3">
            Love to get my hands dirty
          </h1>
          <p className="text-neutral-600 text-[16px] md:text-[18px] leading-relaxed">
            “A jack of all trades is a master of none,{" "}
            <strong className="text-black font-semibold">
              but oftentimes better than a master of one
            </strong>
            ”
          </p>
        </div>

        {/* 2-Column Responsive Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {ARCHIVE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group bg-white overflow-hidden"
            >
              <div className="w-full bg-[#f6f6f6] rounded-[6px] overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover project-card-zoom"
                  loading="lazy"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-[15px] font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-[13px] text-neutral-600 leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
