import CaseStudyLayout from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CNC Cardholder",
  description:
    "A minimalistic modern cardholder precision-fabricated with CNC machining.",
};

export default function CncWalletPage() {
  return (
    <CaseStudyLayout
      title="CNC Cardholder"
      synopsis="A low profile minimalistic modern cardholder that holds 3–4 cards, precision-fabricated with CNC Machining."
      date="Dec 5th 2025"
      heroImage="/media/images/cncwallet_withcards-Edit.png"
      heroAlt="CNC Cardholder Hero"
      prevHref="/pocketto"
      prevLabel="Previous: Pocketto"
      metadataAside={
        <>
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block">
            Credits &amp; Capabilities
          </span>
          <p className="text-black font-medium">Will Reeves, Ming Bi</p>
          <p className="text-neutral-500 text-xs pt-1">
            CNC Machining, Prototyping, Toolpathing
          </p>
        </>
      }
    >
          {/* Section 1: Dimensions & Specs */}
          <section className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Minimal Slim Profile
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                A low-profile form factor (103.8 × 60.6 × 6.71 mm) engineered to carry 3–4 essential cards with immediate thumb access.
              </p>
            </div>
            <img
              src="/media/images/PNG-4K-2-2.jpg"
              alt="CAD Dimensions"
              className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
            />
          </section>

          {/* Section 2: Components & Exploded View */}
          <section className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Components &amp; Assembly
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                2 tempered spring-steel leafs, 2 aerospace-grade 6061 aluminum body halves, and 4 stainless steel machine fasteners.
              </p>
            </div>
            <img
              src="/media/images/Exploded_view_cncwallet.png"
              alt="Exploded view"
              className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
            />
          </section>

          {/* Section 3: Machining & Video Demonstrations */}
          <section className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                CNC Machining &amp; Mechanical Testing
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Around 20 hours of precision machining including stock preparation, soft jaw fixturing, and multi-axis CNC toolpaths.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <video
                  src="/media/video/IMG_2192.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
                />
                <h3 className="font-semibold text-black text-[15px]">Card Retention &amp; Ejection</h3>
                <p className="text-neutral-600 text-sm">Testing the spring steel tactile retention and smooth ejection snap.</p>
              </div>

              <div className="space-y-3">
                <video
                  src="/media/video/IMG_8365.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
                />
                <h3 className="font-semibold text-black text-[15px]">Milling Operation</h3>
                <p className="text-neutral-600 text-sm">Flood coolant machining pocket geometry out of solid 6061 billet.</p>
              </div>
            </div>
          </section>

          {/* Lifestyle Context */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/media/images/DSC08291-2.jpg"
              alt="In-hand lifestyle"
              className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
            />
            <img
              src="/media/images/DSC08282-2.jpg"
              alt="ATM interaction"
              className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
            />
          </section>

          {/* Final Material Finish */}
          <div className="rounded-[8px] overflow-hidden bg-[#f6f6f6]">
            <img
              src="/media/images/DSC08082-2.jpg"
              alt="Machined aluminum on concrete"
              className="w-full h-auto object-cover"
            />
          </div>
    </CaseStudyLayout>
  );
}
