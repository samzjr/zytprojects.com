import CaseStudyLayout from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shift",
  description:
    "Shift uses wearable data to detect rising stress and responds with quiet, ambient cues and gentle movement.",
};

export default function ShiftPage() {
  return (
    <CaseStudyLayout
      title="Shift — Ambient Stress Awareness"
      synopsis="Shift uses wearable data to detect rising stress and responds with quiet, ambient cues and gentle movement that nudge users toward quick recovery before stress escalates."
      date="Dec 9th 2025"
      heroImage="/media/images/hero_.thumbnail.png"
      heroAlt="Shift Hero"
      prevHref="/somna"
      prevLabel="Previous: Somna"
      nextHref="/pocketto"
      nextLabel="Next: Pocketto"
      metadataAside={
        <>
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block">
            Credits &amp; Capabilities
          </span>
          <p className="text-black font-medium">Prof. Hannah Chung &amp; Cutter Hutton</p>
          <p className="text-neutral-500 text-xs pt-1">
            3D Visualisation, Prototyping, CMF, User Testing
          </p>
        </>
      }
    >
          {/* Section 1: Core Insight */}
          <section className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                The tools meant to help us manage stress are delivered through the same screens causing it
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                When we do step away, we reach for our phones or anything that keeps the brain occupied rather than allowing it to rest. Tracking stress on a screen isn’t the same as relieving it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/media/images/Problem_statement_burningout.png"
                alt="Burnout diagram"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
              <img
                src="/media/images/doomscrolling_asset.png"
                alt="Doomscrolling cycle"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
            </div>
          </section>

          {/* Callout Quote */}
          <div className="py-12 border-y border-neutral-100 text-center">
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 max-w-2xl mx-auto">
              “How might we shift stress awareness out of the screen and into the environment, so recovery doesn&apos;t require attention to begin?”
            </p>
          </div>

          {/* Design Criteria */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Design Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-neutral-100 rounded-[8px] bg-neutral-50/50 space-y-2">
                <h3 className="font-semibold text-black text-[16px]">Subtle Signals</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Users receive information through peripheral vision and senses, avoiding jarring notification alarms.
                </p>
              </div>
              <div className="p-6 border border-neutral-100 rounded-[8px] bg-neutral-50/50 space-y-2">
                <h3 className="font-semibold text-black text-[16px]">Ambient Form</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  The product appears approachable and natural, conveying softness, roundness, and calmness.
                </p>
              </div>
              <div className="p-6 border border-neutral-100 rounded-[8px] bg-neutral-50/50 space-y-2">
                <h3 className="font-semibold text-black text-[16px]">Playful Interaction</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Rewards mindfulness and calmness through a satisfying physical reset action.
                </p>
              </div>
            </div>
          </section>

          {/* Physical Mechanism & Moving Prototype */}
          <section className="space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Working Prototype: Subtle Physical Motion
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Testing how much movement is enough to register in peripheral vision without breaking flow state.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <video
                src="/media/video/Movement.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
              />
              <video
                src="/media/video/reset_animation_yellow.png.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
              />
            </div>
          </section>

          {/* Form & Material Exploration */}
          <section className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Form Studies &amp; Clay Mockups
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Form and proportions were driven by noticeability on the desk and the curvature relationship between the upper body and the base.
              </p>
            </div>
            <img
              src="/media/images/DSC_7573-2.jpg"
              alt="Clay prototypes"
              className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
            />
          </section>

          {/* Satisfying Reset & Wireless Dock */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="rounded-[6px] overflow-hidden bg-[#f6f6f6]">
                <img
                  src="/media/images/Yellow_twohands.png"
                  alt="Reset action"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-black text-[16px]">Satisfying Physical Reset</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                When you feel ready to return to work, pick up the device and push the middle section back into place to reset it.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-[6px] overflow-hidden bg-[#f6f6f6]">
                <img
                  src="/media/images/Yellow_charging_wb.png"
                  alt="Wireless charging dock"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-black text-[16px]">Wireless Charging Dock</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The base charges wirelessly, giving Shift a permanent place in your workspace so you can grab it without cords in the way.
              </p>
            </div>
          </section>

          {/* Exploded Architecture View */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Internal Architecture
            </h2>
            <img
              src="/media/images/Exploded-view-with-annotation.png"
              alt="Exploded view"
              className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
            />
          </section>

          {/* In-Scene Hero Render */}
          <div className="rounded-[8px] overflow-hidden bg-[#f6f6f6]">
            <img
              src="/media/images/yellow_inscene.png"
              alt="Shift in workspace scene"
              className="w-full h-auto object-cover"
            />
          </div>
    </CaseStudyLayout>
  );
}
