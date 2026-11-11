import CaseStudyLayout from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somna",
  description:
    "Somna is a CPAP machine designed as an object for the home, with a separable motor unit for travel.",
};

export default function SomnaPage() {
  return (
    <CaseStudyLayout
      title="Somna — CPAP Machine"
      synopsis="Somna is a CPAP machine designed as an object for the home. Its vertical motor unit separates from the humidifier module and can be carried on its own for travel."
      capabilities="CAD, 3D Visualisation"
      date="Sep 22nd 2026"
      heroImage="/media/images/Somna_hero_thumbnail_withshadow_edited.jpg"
      heroAlt="Somna Hero"
      nextHref="/shift"
      nextLabel="Next: Shift"
    >
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            CPAP therapy is one of the most effective therapies for sleep apnea
          </h2>
          <p className="text-neutral-600 text-[15px] leading-relaxed">
            CPAP therapy treats obstructive sleep apnea by delivering a continuous stream of pressurized air through a mask to keep your airway open while you sleep.
          </p>
        </div>
        <div className="rounded-[8px] overflow-hidden bg-[#f6f6f6]">
          <img
            src="/media/images/AdobeStock_296669683-min-1.png"
            alt="CPAP Context"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Evolution of CPAP machines
          </h2>
          <p className="text-neutral-600 text-[15px] leading-relaxed">
            Historically full of bulky home medical devices. Newer models have a smaller footprint, however the designs remain strictly clinical and medical.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/media/images/CPAP_evolution.png"
            alt="CPAP Evolution"
            className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
          />
          <img
            src="/media/images/CPAP_competitive_analysis.png"
            alt="Competitive Analysis"
            className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Existing Problems &amp; Home Environment Disconnect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="h-48 rounded-[6px] overflow-hidden bg-[#f6f6f6] mb-3">
              <img
                src="/media/images/1284201791513175_.pic-1.png"
                alt="Nightstand footprint"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-black text-[15px]">Big footprint</h3>
            <p className="text-neutral-600 text-sm">
              A standard CPAP machine takes up most of the space on a nightstand, leaving no room for other items.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-48 rounded-[6px] overflow-hidden bg-[#f6f6f6] mb-3">
              <img
                src="/media/images/image-78.png"
                alt="Travel CPAP"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-black text-[15px]">Dedicated travel CPAP</h3>
            <p className="text-neutral-600 text-sm">
              People have to purchase a separate CPAP machine for travel due to excessive bulk.
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-48 rounded-[6px] overflow-hidden bg-[#f6f6f6] mb-3">
              <img
                src="/media/images/image-77.png"
                alt="Loss of dignity"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-black text-[15px]">Loss of dignity</h3>
            <p className="text-neutral-600 text-sm">
              Some users DIY storage and custom modifications to hide the clinical device in the bedroom.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 border-y border-neutral-100 text-center">
        <p className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 max-w-2xl mx-auto">
          “What if the CPAP machine was designed to fit into your home in the first place?”
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Ideation &amp; Form Development
        </h2>
        <img
          src="/media/images/Untitled_Artwork-10.jpg"
          alt="Ideation sketches"
          className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          <img
            src="/media/images/Somna_concept_1-2.jpg"
            alt="Concept render"
            className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
          />
          <img
            src="/media/images/IMG_2755_1.jpg"
            alt="Foam prototype"
            className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
          />
          <img
            src="/media/images/Somna_concept_1-3.jpg"
            alt="Concept render 2"
            className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
          />
        </div>
      </section>

      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Physical Touchpoints &amp; Mechanism Refinement
          </h2>
          <p className="text-neutral-600 text-[15px] leading-relaxed">
            Developing tactile and intuitive touchpoints: a magnetic removable humidifier tank, fabric pull-tabs, and a mechanical rotary control knob.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <video
              src="/media/video/IMG_2734.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[4/5] object-cover rounded-[6px] bg-neutral-100"
            />
            <h3 className="font-semibold text-black text-[15px]">Humidifier tank removal</h3>
            <p className="text-neutral-600 text-sm">Press and remove cleanly from the body.</p>
          </div>
          <div className="space-y-3">
            <video
              src="/media/video/IMG_2750.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[4/5] object-cover rounded-[6px] bg-neutral-100"
            />
            <h3 className="font-semibold text-black text-[15px]">Humidifier tank lid</h3>
            <p className="text-neutral-600 text-sm">Accessing the water tank via the fabric pull-tab.</p>
          </div>
          <div className="space-y-3">
            <video
              src="/media/video/IMG_2751.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[4/5] object-cover rounded-[6px] bg-neutral-100"
            />
            <h3 className="font-semibold text-black text-[15px]">Control knob</h3>
            <p className="text-neutral-600 text-sm">Adjust air temperature and ramp pressure with a simple twisting motion.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Docked at home, free on the road
          </h2>
          <p className="text-neutral-600 text-[15px] leading-relaxed">
            One machine for both home and travel. The compact core motor slides out effortlessly to fit inside any carry-on luggage.
          </p>
        </div>
        <img
          src="/media/images/Somna_motor_split-Edit.png"
          alt="Motor split module"
          className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
        />
      </section>

      <div className="rounded-[8px] overflow-hidden bg-[#f6f6f6]">
        <img
          src="/media/images/Somna_hero_in_context_2_edited.jpg"
          alt="Somna bedside context"
          className="w-full h-auto object-cover"
        />
      </div>
    </CaseStudyLayout>
  );
}
