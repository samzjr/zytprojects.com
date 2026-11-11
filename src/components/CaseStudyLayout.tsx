import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CaseStudyLayoutProps = {
  title: string;
  synopsis: string;
  date: string;
  heroImage: string;
  heroAlt: string;
  /** Simple capabilities line (Somna, Pocketto) */
  capabilities?: string;
  /** Rich metadata column (Shift, CNC — credits + capabilities) */
  metadataAside?: ReactNode;
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  children: ReactNode;
};

export default function CaseStudyLayout({
  title,
  synopsis,
  capabilities,
  metadataAside,
  date,
  heroImage,
  heroAlt,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 px-6 md:px-10 pb-24">
        <div className="py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        <div className="w-full bg-[#f6f6f6] rounded-[8px] overflow-hidden mb-12">
          <img
            src={heroImage}
            alt={heroAlt}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-y border-neutral-200 mb-16">
          <div className="md:col-span-6 space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
              {title}
            </h1>
            <p className="text-neutral-600 text-[15px] leading-relaxed max-w-xl">
              {synopsis}
            </p>
          </div>
          <div className="md:col-span-3 space-y-1 text-[14px]">
            {metadataAside ?? (
              <>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block">
                  Capabilities
                </span>
                <p className="text-black font-medium">{capabilities}</p>
              </>
            )}
          </div>
          <div className="md:col-span-3 space-y-1 text-[14px]">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block">
              Date
            </span>
            <p className="text-black font-medium">{date}</p>
          </div>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">{children}</div>

        <div className="mt-24 pt-8 border-t border-neutral-200 flex justify-between items-center text-sm">
          {prevHref && prevLabel ? (
            <Link
              href={prevHref}
              className="font-medium text-black inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={15} /> {prevLabel}
            </Link>
          ) : (
            <Link
              href="/"
              className="text-neutral-500 hover:text-black transition-colors"
            >
              All Projects
            </Link>
          )}
          {nextHref && nextLabel ? (
            <Link
              href={nextHref}
              className="font-medium text-black inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              {nextLabel} <ArrowRight size={15} />
            </Link>
          ) : (
            <Link
              href="/"
              className="font-medium text-black hover:opacity-70 transition-opacity"
            >
              All Projects
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
