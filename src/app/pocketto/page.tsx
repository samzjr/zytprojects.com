// Generated from https://zytprojects.com/pocketto (Cargo) by scripts/cargo-to-page.mjs.
// Text, order, spacing and media sizes match the original. Edit freely, but
// don't paraphrase the copy (see AGENTS.md).
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WorkHeader from "@/components/WorkHeader";
import ProjectViews from "@/components/ProjectViews";
import { Col, Grid, Justify, Lines, Media, Row } from "@/components/cargo/Cargo";

export const metadata: Metadata = {
  title: "Pocketto",
  description: "Pocketto simplifies crypto for beginners with a clear interface and playful tactile interaction.",
};

export default function Page() {
  return (
    <div className="cg-page">
      <div className="home-header-wrap">
        <WorkHeader />
      </div>

      <main className="cg-body" style={{ textAlign: "center" }}>
        <ProjectViews
          overview={
            <>
              <Media src="/media/video/crypto_panning_01.m4v" w={3860} h={2160} video loop={false} widthPercent={100} />
              <Lines n={3} />
              {" "}
              <Row gutter={5}>
                <Col span={6}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <b>
                      <span style={{ lineHeight: "1.3", "--font-scale": "1.6" } as CSSProperties}>
                        {"Pocketto Crypto Coldwallet"}
                      </span>
                      <br />
                    </b>
                    <br />
                    <b>
                      {"Synopsis"}
                      <Lines n={2} />
                      {" "}
                    </b>
                    {"Pocketto simplifies the often confusing and unintuitive world of crypto for beginners by offering a clear and easy to read interface, paired with a playful experience when managing digital assets."}
                    <Lines n={2} />
                    {" Digital assets like Bitcoin, stable coins and NFTs have been gaining popularity among younger investors like Gen Z. However, many of the crypto wallet designs in the market remain to be complicated and difficult to use.     "}
                    <Lines n={2} />
                    {" "}
                  </div>
                  {"  "}
                </Col>
                <Col span={4}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <span style={{ color: "rgba(0, 0, 0, 0.75)" } as CSSProperties}>
                      <b />
                      <span style={{ lineHeight: "1.25" } as CSSProperties}>
                        <span style={{ lineHeight: "0.5", color: "rgba(0, 0, 0, 0.75)" } as CSSProperties}>
                          <b>
                            <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                              {"Capabilities:"}
                            </span>
                            <Lines n={2} />
                            {" "}
                          </b>
                          {" "}
                        </span>
                        <span style={{ lineHeight: "0.5" } as CSSProperties}>
                          {"Spatial Design"}
                          <br />
                          {" "}
                        </span>
                        {"3D Visualisation "}
                        <br />
                        {"Prototyping "}
                        <br />
                        {"User Testing"}
                      </span>
                    </span>
                    <br />
                    {" "}
                    <span style={{ color: "rgba(0, 0, 0, 0.75)" } as CSSProperties}>
                      {" "}
                    </span>
                    <br />
                    {" "}
                  </div>
                </Col>
                <Col span={2}>
                  <div style={{ textAlign: "left" } as CSSProperties} />
                  <div style={{ textAlign: "right" } as CSSProperties}>
                    <b>
                      {"Date:"}
                    </b>
                    <br />
                    {"March 19th 2025"}
                  </div>
                </Col>
              </Row>
              <Lines n={3} />
              {" "}
              <Media src="/media/images/Pocketto_solo_dynamic_screen-2.jpg" w={3860} h={2160} widthPercent={100} />
              <br />
              {" "}
              <div style={{ textAlign: "left" } as CSSProperties}>
                <h1 />
              </div>
              <Lines n={7} />
              {" "}
              {/* ---- final design ---- */}
              <Row gutter={2}>
                <Col>
                  <h2>
                    <b>
                      {"E-ink Display"}
                    </b>
                  </h2>
                  {"Longer battery life with minimal distractions"}
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/video/hero_reveal0001-0080.mp4" w={3860} h={2160} video loop={false} widthPercent={100} />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={7} />
              {" "}
              <Row gutter={2}>
                <Col>
                  <h2>
                    <b>
                      {"Navigation Wheel"}
                    </b>
                  </h2>
                  {"More intuitive, fun and simple."}
                </Col>
              </Row>
              <Lines n={3} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/video/Pocketto_nav_button.mp4" w={3860} h={2160} video />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={4} />
              <span className="subtitle-" style={{ color: "rgba(0, 0, 0, 0.65)" } as CSSProperties}>
                <h1 />
              </span>
              <Lines n={3} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={5} />
                  {" "}
                  <h2>
                    <span style={{ display: "block", textAlign: "left" } as CSSProperties}>
                      <b>
                        {" Security at your fingertips"}
                      </b>
                    </span>
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"Faster and easier, no worrying about forgetting your password"}
                  </div>
                  {"."}
                  <h1 style={{ "--font-scale": "1.3" } as CSSProperties}>
                    <b />
                  </h1>
                </Col>
                <Col span={8}>
                  <Media src="/media/video/Pocketto_fingerprint_animation.mp4" w={3860} h={2160} video widthPercent={70} />
                </Col>
              </Row>
              <Lines n={11} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3} />
                <Col span={8}>
                  <Media src="/media/video/Hold_to_sign.mp4" w={3860} h={2160} video loop={false} widthPercent={100} />
                </Col>
              </Row>
              <Lines n={11} />
              {" "}
              <Row gutter={2}>

              </Row>
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={6} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {" Air-gapped"}
                      </b>
                      {" "}
                    </h2>
                  </div>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"Completely disconnected from the internet and only uses QR codes to facilitate transactions."}
                  </div>
                </Col>
                <Col span={8}>
                  <Media src="/media/images/Back-camera.png" w={3860} h={2160} widthPercent={70} />
                </Col>
              </Row>
              <Lines n={11} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={9} />
                  {" "}
                  <h2>
                    <span style={{ display: "block", textAlign: "left" } as CSSProperties}>
                      <b>
                        {" Customise your wallet with your NFTs  "}
                      </b>
                    </span>
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"Show off your favourite NFTs and photos on a 2.5 inch display"}
                  </div>
                  {" "}
                </Col>
                <Col span={8}>
                  <Media src="/media/video/pocketto_nft_reveal.mp4" w={3860} h={2160} video maxHeight={100} />
                </Col>
              </Row>
              <Lines n={9} />
              {" "}
              <Row gutter={2}>
                <Col>
                  <h2>
                    <b>
                      {"Multi-device connectivity"}
                    </b>
                  </h2>
                  {"Connect Pocketto to your iOS and smartphone for a seamless experience anywhere."}
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/images/pocketto_phone_device.png" w={3860} h={2160} widthPercent={100} />
                  <Lines n={3} />
                  {" "}
                  <Media src="/media/images/Multiple_interface.png" w={3860} h={2160} widthPercent={100} />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={6} />
              {" "}
              <Media src="/media/images/Pocketto_hand_hero_noise.png" w={3840} h={2400} widthPercent={100} />
              <Lines n={5} />
              <div style={{ textAlign: "left" } as CSSProperties}>
                <h1 />
              </div>
            </>
          }
          process={
            <>
              <Row>
                <Col>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.85)" } as CSSProperties}>
                    <b>
                      {"Design Opportunity"}
                    </b>
                  </h2>
                  {"Crypto is becoming more mainstream than ever, but transaction and storage is complicated"}
                </Col>
              </Row>
              <Lines n={3} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/images/Pocketto-Problem.png" w={3840} h={2160} maxHeight={60} />
                </Col>
                <Col span={2} />
              </Row>
              <Row gutter={3}>
                <Col />
              </Row>
              <Lines n={8} />
              {" "}
              <Row>
                <Col>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.85)" } as CSSProperties}>
                    <b>
                      {"Pain points"}
                    </b>
                  </h2>
                  {"Tiny screens, "}
                  <span style={{ color: "rgba(0, 0, 0, 0.85)" } as CSSProperties}>
                    {"small navigation buttons"}
                  </span>
                  {", outdated UI."}
                </Col>
              </Row>
              <Lines n={3} />
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/images/Group-28.png" w={2568} h={1235} maxHeight={41} />
                </Col>
                <Col span={2} />
              </Row>
              {" "}
              <Row>
                <Col />
              </Row>
              <Lines n={9} />
              {" "}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src="/media/images/hmw_pocketto.png" w={3840} h={2161} />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={9} />
              <Row>
                <Col span={2} />
                <Col span={9}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2 style={{ lineHeight: "1" } as CSSProperties}>
                      <b>
                        {"Design Criteria"}
                      </b>
                    </h2>
                  </div>
                </Col>
                <Col span={1} />
              </Row>
              <br />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Justify gutter={2}>
                    <Media
                      src="/media/images/Modern_dc.png"
                      w={600}
                      h={800}
                      caption={
                        <>
                          <div style={{ textAlign: "left" } as CSSProperties}>
                            {"Modern "}
                            <span className="bodytext" style={{ "--font-scale": "0.26", fontSize: "26px" } as CSSProperties}>
                              {"A clean form language that reflects the evolving future of digital finance."}
                            </span>
                            <Lines n={2} />
                            {" "}
                          </div>
                        </>
                      }
                    />
                    <Media
                      src="/media/images/ergonomic_dc.png"
                      w={533}
                      h={800}
                      caption={
                        <>
                          <div style={{ textAlign: "left" } as CSSProperties}>
                            {"Ergonomic "}
                            <span className="bodytext" style={{ "--font-scale": "0.26", fontSize: "26px" } as CSSProperties}>
                              {"Thoughtfully contoured to fit naturally in the hand, ensuring intuitive and confident interaction."}
                            </span>
                            <Lines n={2} />
                            {" "}
                          </div>
                        </>
                      }
                    />
                    <Media
                      src="/media/images/Tactile_dc.png"
                      w={578}
                      h={800}
                      caption={
                        <>
                          <div style={{ textAlign: "left" } as CSSProperties}>
                            {"Tactile "}
                            <span className="bodytext" style={{ "--font-scale": "0.26", fontSize: "26px" } as CSSProperties}>
                              {"Analog feedback and intentional physical interaction transforms digital security into a tangible, fun experience."}
                            </span>
                            <Lines n={2} />
                            {" "}
                          </div>
                        </>
                      }
                    />
                  </Justify>
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={6} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/images/DSC07836.jpg" w={7746} h={5304} widthPercent={100} />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={8} />
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <span className="caption" style={{ lineHeight: "1" } as CSSProperties}>
                    {"Geometry and button layout that is ergonomic to navigate with minimal efforts."}
                  </span>
                </Col>
                <Col span={2} />
              </Row>
              <br />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/images/moodboard.png" w={1120} h={800} />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={14} />
              {" "}
              <Row>
                <Col>
                  <Media src="/media/images/Pocketto_sketches.png" w={3840} h={1387} widthPercent={90} />
                </Col>
              </Row>
              <Lines n={11} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Grid columns={2}>
                    <Media src="/media/images/DSC07892-2.jpg" w={7952} h={5304} />
                    <Media src="/media/images/DSC07889.jpg" w={7952} h={5304} />
                    <Media src="/media/images/DSC07886.jpg" w={7952} h={5304} />
                    <Media src="/media/images/DSC07894-3.jpg" w={7952} h={5304} />
                  </Grid>
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={7} />
              {" "}
            </>
          }
        />
      </main>
    </div>
  );
}
