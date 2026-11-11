import CaseStudyLayout from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pocketto",
  description:
    "Pocketto simplifies crypto for beginners with a clear interface and playful tactile interaction.",
};

export default function PockettoPage() {
  return (
    <CaseStudyLayout
      title="Pocketto — Crypto Cold Wallet"
      synopsis="Pocketto simplifies the often confusing and unintuitive world of crypto for beginners by offering a clear and easy-to-read interface, paired with a playful experience when managing digital assets."
      capabilities="Spatial Design, 3D Visualisation, Prototyping, User Testing"
      date="March 19th 2025"
      heroImage="/media/images/Pocketto_solo_dynamic_screen-2.jpg"
      heroAlt="Pocketto Hero"
      prevHref="/shift"
      prevLabel="Previous: Shift"
      nextHref="/cnc-wallet"
      nextLabel="Next: CNC Cardholder"
    >
          {/* Section 1: Problem Space */}
          <section className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Crypto is becoming mainstream, but transaction and storage remain complicated
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Existing hardware wallets are notorious for tiny low-resolution displays, microscopic buttons, and clunky button-combination confirmation workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/media/images/Pocketto-Problem.png"
                alt="Problem framing"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
              <img
                src="/media/images/Group-28.png"
                alt="Ledger & Trezor Pain Points"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
            </div>
          </section>

          {/* Design Criteria */}
          <section className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Design Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-neutral-100 rounded-[8px] bg-neutral-50/50 space-y-2">
                <h3 className="font-semibold text-black text-[16px]">Modern</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  A clean form language that reflects the evolving future of digital finance.
                </p>
              </div>
              <div className="p-6 border border-neutral-100 rounded-[8px] bg-neutral-50/50 space-y-2">
                <h3 className="font-semibold text-black text-[16px]">Ergonomic</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Contoured to fit naturally in one hand with effortless thumb reach.
                </p>
              </div>
              <div className="p-6 border border-neutral-100 rounded-[8px] bg-neutral-50/50 space-y-2">
                <h3 className="font-semibold text-black text-[16px]">Tactile</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Analog feedback and intentional physical interaction transform security into a tangible experience.
                </p>
              </div>
            </div>
          </section>

          {/* Prototyping & Ergonomics Testing */}
          <section className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Physical Form Exploration &amp; 3D Prints
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Testing hand grip ergonomics, button placement, and thumb rotation radius through multiple iterative prints.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img
                src="/media/images/DSC07892-2.jpg"
                alt="Model test 1"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
              <img
                src="/media/images/DSC07889.jpg"
                alt="Model test 2"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
              <img
                src="/media/images/DSC07886.jpg"
                alt="Model test 3"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
              <img
                src="/media/images/DSC07894-3.jpg"
                alt="Model test 4"
                className="w-full h-auto rounded-[6px] bg-[#f6f6f6]"
              />
            </div>
          </section>

          {/* Key Interactions */}
          <section className="space-y-8">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              Tactile Security &amp; Navigation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <video
                  src="/media/video/Pocketto_nav_button.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
                />
                <h3 className="font-semibold text-black text-[15px]">Navigation Wheel</h3>
                <p className="text-neutral-600 text-sm">More intuitive, playful, and tactile scrolling.</p>
              </div>

              <div className="space-y-3">
                <video
                  src="/media/video/Pocketto_fingerprint_animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
                />
                <h3 className="font-semibold text-black text-[15px]">Biometric Security</h3>
                <p className="text-neutral-600 text-sm">Fast fingerprint unlock without password anxiety.</p>
              </div>

              <div className="space-y-3">
                <video
                  src="/media/video/Hold_to_sign.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/3] object-cover rounded-[6px] bg-neutral-100"
                />
                <h3 className="font-semibold text-black text-[15px]">Hold to Sign</h3>
                <p className="text-neutral-600 text-sm">Intentional physical holding gesture authorizes transactions safely.</p>
              </div>
            </div>
          </section>

          {/* Air-gapped & Connectivity */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="rounded-[6px] overflow-hidden bg-[#f6f6f6]">
                <img
                  src="/media/images/Back-camera.png"
                  alt="Back camera QR scanner"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-black text-[16px]">Completely Air-Gapped</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Zero wireless antennas or internet connection. Built-in camera reads optical QR codes for 100% offline cold storage.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-[6px] overflow-hidden bg-[#f6f6f6]">
                <img
                  src="/media/images/pocketto_phone_device.png"
                  alt="Smartphone Companion"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-black text-[16px]">Mobile Companion</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Pairs optically with your smartphone app for seamless balance checks and portfolio tracking on the go.
              </p>
            </div>
          </section>

          {/* Final In-Hand Hero */}
          <div className="rounded-[8px] overflow-hidden bg-[#f6f6f6]">
            <img
              src="/media/images/Pocketto_hand_hero_noise.png"
              alt="Pocketto in hand"
              className="w-full h-auto object-cover"
            />
          </div>
    </CaseStudyLayout>
  );
}
