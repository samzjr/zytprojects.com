// Generated from https://zytprojects.com/shift (Cargo) by scripts/cargo-to-page.mjs.
// Text, order, spacing and media sizes match the original. Edit freely, but
// don't paraphrase the copy (see AGENTS.md).
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WorkHeader from "@/components/WorkHeader";
import ProjectViews from "@/components/ProjectViews";
import { Col, Gallery, Justify, Lines, Media, Row } from "@/components/cargo/Cargo";
import Slideshow from "@/components/cargo/Slideshow";

export const metadata: Metadata = {
  title: "Shift",
  description: "Shift uses wearable data to detect rising stress and responds with quiet, ambient cues and gentle movement.",
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
              <Media src="/media/images/hero_.thumbnail.png" w={3480} h={2160} widthPercent={100} />
              <Lines n={4} />
              {" "}
              <Row gutter={5}>
                <Col span={6}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <b>
                      <span style={{ lineHeight: "1.3", "--font-scale": "1.6" } as CSSProperties}>
                        {"Shift"}
                      </span>
                      <br />
                    </b>
                    <br />
                    <b>
                      {"Synopsis"}
                      <Lines n={2} />
                      {" "}
                    </b>
                    {"Shift uses wearable data to detect rising stress and responds with quiet, ambient cues and gentle movement that nudge users toward quick recovery before stress escalates."}
                    <Lines n={2} />
                    {" "}
                  </div>
                  {" "}
                </Col>
                <Col span={4}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <span style={{ lineHeight: "1.25" } as CSSProperties}>
                      <b />
                      <span style={{ lineHeight: "0.5", color: "rgba(0, 0, 0, 0.75)" } as CSSProperties}>
                        <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                          <b>
                            {"Credits:"}
                            <br />
                            {" "}
                          </b>
                          <br />
                          {" Professor - Hannah Chung & "}
                          <span style={{ lineHeight: "1.25" } as CSSProperties}>
                            {"Cutter Hutton"}
                          </span>
                          {" "}
                          <br />
                          <b>
                            {" "}
                            <br />
                            {" Capabilities:"}
                          </b>
                        </span>
                        <b>
                          <Lines n={2} />
                          {" "}
                        </b>
                        {" "}
                      </span>
                      {" 3D Visualisation "}
                      <br />
                      {"Prototyping"}
                      <br />
                      {" CMF Analysis"}
                      <br />
                      {"User Testing"}
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
                    {"Dec 9th 2025"}
                  </div>
                </Col>
              </Row>
              {"  "}
              <br />
              {" "}
              <h1 />
              <Lines n={4} />
              {" "}
              <Row>
                <Col>
                  <Media src="/media/images/yellow_inscene.png" w={3840} h={2160} widthPercent={100} />
                </Col>
              </Row>
              <Lines n={6} />
              {" "}
              {/* ---- final design ---- */}
              <Row>
                <Col>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.96)" } as CSSProperties}>
                    <b>
                      {"A workflow indicator"}
                    </b>
                  </h2>
                  <span style={{ "--font-scale": "1.2" } as CSSProperties}>
                    {"Gentle movement that nudges the user to take a break and recover"}
                  </span>
                  <b>
                    <br />
                    {" "}
                  </b>
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col>
                  <Media src="/media/images/Yellow_hero_bottom_wb.png" w={3480} h={2160} widthPercent={100} />
                </Col>
              </Row>
              <Lines n={11} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={5} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {" "}
                        <br />
                        {"Meaningful Recovery"}
                      </b>
                    </h2>
                  </div>
                  <h2>
                    {" "}
                    <br />
                    {" "}
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"Unlike a notification, Shift "}
                    <b>
                      {"can't be"}
                    </b>
                    {" dismissed. It stays “shifted” until your wearable confirms real recovery."}
                  </div>
                </Col>
                <Col span={8}>
                  <Media src="/media/images/Yellow_detail_panout_wb.png" w={3480} h={2160} />
                </Col>
              </Row>
              <Lines n={10} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={5} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {"Seen at the edge, not on a screen"}
                      </b>
                    </h2>
                  </div>
                  <h2>
                    {" "}
                    <br />
                    {" "}
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"Align means you are steady, offsets mean it’s time to recover."}
                    <br />
                  </div>
                </Col>
                <Col span={8}>
                  <Media src="/media/video/reset_animation_yellow.png.mp4" w={1740} h={1080} video />
                </Col>
              </Row>
              <Lines n={10} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={8} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {"Wireless charging dock "}
                      </b>
                    </h2>
                  </div>
                  <h2>
                    {" "}
                    <br />
                    {" "}
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"The base charges wirelessly, giving Shift a permanent place in your workspace so you can pick it up and put it down without a cord in the way."}
                  </div>
                </Col>
                <Col span={8}>
                  <Media src="/media/images/Yellow_charging_wb.png" w={3480} h={2160} widthPercent={100} />
                </Col>
              </Row>
              <Lines n={9} />
              {" "}
              <Row gutter={4}>
                <Col span={1} />
                <Col span={3}>
                  <Lines n={8} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {"Satisfying reset "}
                      </b>
                    </h2>
                  </div>
                  <h2>
                    {" "}
                    <br />
                    {" "}
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"When you feel ready to return to work, pick up the device and push the middle section into place to reset it."}
                  </div>
                </Col>
                <Col span={8}>
                  <Media src="/media/images/Yellow_twohands.png" w={3480} h={2160} />
                </Col>
              </Row>
              <Lines n={11} />
              {" "}
              <Media src="/media/images/closeup_exploded_view.png" w={3840} h={2160} widthPercent={100} />
              <Lines n={4} />
              {" "}
              <Media src="/media/images/Exploded-view-with-annotation.png" w={3840} h={2160} widthPercent={100} />
              <Lines n={9} />
              {" "}
              <Row>
                <Col>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.85)" } as CSSProperties}>
                    <b>
                      {"Personalise the device to your workflow"}
                    </b>
                  </h2>
                  {"User is able to adjust the responsiveness of the device and set recovery goals through the app interface."}
                  <b>
                    <br />
                    {" "}
                  </b>
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col>
                  <Media src="/media/images/UI_work_rythm.png" w={3600} h={2400} />
                </Col>
              </Row>
              <Lines n={9} />
              {" "}
              <Row gutter={4}>
                <Col span={8}>
                  <Media src="/media/images/UI_device_pairing.png" w={3500} h={2334} />
                </Col>
                <Col span={3}>
                  <Lines n={8} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        <br />
                        {"Connected to your health tracker "}
                      </b>
                    </h2>
                  </div>
                  <h2>
                    {" "}
                    <br />
                    {" "}
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"Using data from your health tracker, Shift detects signs of stress or fatigue and responds with physical cues."}
                  </div>
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={9} />
              {" "}
              <Row>
                <Col>
                  <h2>
                    <b>
                      {"Drawn from nature"}
                    </b>
                  </h2>
                  {"Reminiscent of the rocks and pebbles along the coastline."}
                  <b>
                    {" "}
                    <br />
                    {" "}
                  </b>
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col>
                  <Media src="/media/images/cmf-2.png" w={3840} h={2160} widthPercent={100} />
                </Col>
              </Row>
              <Lines n={5} />
              {" "}
              <Row>
                <Col>
                  <Media src="/media/images/Yellow_office_hand.png" w={3840} h={2180} widthPercent={100} />
                </Col>
              </Row>
              <Lines n={4} />
              {" "}
              <Row>
                <Col />
              </Row>
              <Lines n={2} />
              <div style={{ textAlign: "left" } as CSSProperties} />
            </>
          }
          process={
            <>
              <Row>
                <Col span={2}>
                  <br />
                </Col>
                <Col span={8}>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.98)" } as CSSProperties}>
                    {"The tools meant to help us manage stress are delivered through the same screens causing it"}
                  </h2>
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={2} />
              {" "}
              <Media src="/media/images/Problem_statement_burningout.png" w={3840} h={2559} widthPercent={64.9} />
              <Lines n={3} />
              {" "}
              <h1 />
              <Lines n={10} />
              {" "}
              <Row>
                <Col span={1}>
                  <Lines n={5} />
                  {" "}
                </Col>
                <Col span={3}>
                  <Lines n={5} />
                  {" "}
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {"People are trying to recover. It's not working"}
                      </b>
                    </h2>
                  </div>
                  <h2>
                    {" "}
                    <br />
                    {" "}
                  </h2>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    {"When we do step away, we reach for our phones or anything that keeps the brain occupied rather than allowing it to rest."}
                  </div>
                </Col>
                <Col span={8}>
                  <Media
                    src="/media/images/doomscrolling_asset.png"
                    w={1653}
                    h={939}
                    maxHeight={40}
                    caption={
                      <>
                        <div style={{ textAlign: "left" } as CSSProperties}>
                          <h1 style={{ fontSize: "20.1348px", letterSpacing: "0em" } as CSSProperties}>
                            <br />
                          </h1>
                          <br />
                        </div>
                      </>
                    }
                  />
                </Col>
              </Row>
              <Lines n={10} />
              {" "}
              <Row>
                <Col>
                  <h2>
                    <b>
                      {"Tracking stress isn't the same as relieving it"}
                    </b>
                  </h2>
                  {"Users have to repeatedly check their phones for stress data, which can be "}
                  <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                    {"distracting and often lacks meaningful context"}
                  </span>
                  {"."}
                  <b />
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Media src="/media/images/Existing-Solutions.jpg" w={3489} h={2880} widthPercent={55} />
              <Lines n={17} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <span className="quote">
                    {"How might we shift stress awareness out of the screen and into the environment, so recovery doesn't require attention to begin?"}
                  </span>
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={23} />
              {" "}
              <Row>
                <Col span={1}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2 />
                  </div>
                </Col>
                <Col span={7}>
                  <div style={{ textAlign: "left" } as CSSProperties}>
                    <h2>
                      <b>
                        {"Design Criteria"}
                      </b>
                    </h2>
                  </div>
                </Col>
                <Col span={4} />
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Justify>
                    <Media
                      src="/media/images/ambient_2.jpg"
                      w={736}
                      h={1104}
                      caption={
                        <>
                          <div style={{ textAlign: "left" } as CSSProperties}>
                            {"Subtle Signals"}
                            <span className="bodytext" style={{ fontSize: "24px", letterSpacing: "0em", lineHeight: "1.2" } as CSSProperties}>
                              <br />
                              {" User should receive information from the product through peripheral vision and senses."}
                            </span>
                            {" "}
                            <Lines n={2} />
                            {" "}
                          </div>
                        </>
                      }
                    />
                    <Media
                      src="/media/images/ambient_image.jpg"
                      w={1024}
                      h={1024}
                      caption={
                        <>
                          <div style={{ textAlign: "left" } as CSSProperties}>
                            {"Ambient"}
                            <br />
                            {" "}
                            <span className="bodytext" style={{ fontSize: "24px", letterSpacing: "0em", lineHeight: "1.2" } as CSSProperties}>
                              <br />
                              {" The product should appear approachable, conveying softness, roundness and calmness."}
                            </span>
                          </div>
                        </>
                      }
                    />
                    <Media
                      src="/media/images/image-32.png"
                      w={879}
                      h={1099}
                      caption={
                        <>
                          <div style={{ textAlign: "left" } as CSSProperties}>
                            {"Playful Interactions"}
                            <span className="bodytext" style={{ fontSize: "24px", letterSpacing: "0em", lineHeight: "1.2" } as CSSProperties}>
                              <br />
                              {" The product should reward mindfulness and calmness through a playful manner."}
                            </span>
                          </div>
                        </>
                      }
                    />
                  </Justify>
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={4} />
              {" "}
              <Media src="/media/images/Sketches_all.png" w={9765} h={6480} widthPercent={80} />
              <Lines n={10} />
              {" "}
              <Row>
                <Col>
                  <h2 style={{ lineHeight: "1" } as CSSProperties}>
                    <b>
                      {"Focused  Concepts"}
                    </b>
                  </h2>
                </Col>
              </Row>
              <br />
              {" "}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Gallery>
                    <Media
                      src="/media/video/Comp.mp4"
                      w={1080}
                      h={1080}
                      video
                      caption={
                        <>
                          <br />
                          {" Light and Color "}
                          <br />
                          {" "}
                          <span className="bodytext" style={{ fontSize: "26px", letterSpacing: "0em", lineHeight: "1.2" } as CSSProperties}>
                            <br />
                            {" A desktop device that attracts  the user’s attention through light and color sensitivity."}
                          </span>
                        </>
                      }
                    />
                    <Media
                      src="/media/images/merged-2.gif"
                      w={480}
                      h={480}
                      caption={
                        <>
                          <br />
                          {" Transparency and Opacity"}
                          <span className="bodytext" style={{ fontSize: "26px", letterSpacing: "0em", lineHeight: "1.2" } as CSSProperties}>
                            <br />
                            {" A dedicated device that can reflect the user’s state of mind through opacity and transparency."}
                          </span>
                        </>
                      }
                    />
                    <Media
                      src="/media/video/Movement.mp4"
                      w={1080}
                      h={1080}
                      video
                      caption={
                        <>
                          <br />
                          {" Movement"}
                          <br />
                          {" "}
                          <span className="bodytext" style={{ fontSize: "26px", letterSpacing: "0em", lineHeight: "1.2" } as CSSProperties}>
                            <br />
                            {" A dedicated desktop device that attracts the user’s attention through subtle movement and change of device’s silhouette."}
                          </span>
                        </>
                      }
                    />
                  </Gallery>
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={4} />
              {" "}
              <Media src="/media/images/DSC_7573-2.jpg" w={5568} h={3712} />
              <Lines n={8} />
              {" "}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Justify gutter={2}>
                    <Media src="/media/video/hdw_ptp_v2_720p.mov" w={720} h={1280} video autoplay={false} loop={false} />
                    <Media src="/media/video/hdw_ptp_v3.mov" w={1080} h={1920} video />
                    <Media src="/media/video/IMG_9358_720.mov" w={720} h={1280} video />
                    <Media src="/media/video/IMG_9357_720.mov" w={720} h={1280} video />
                    <Media src="/media/video/IMG_9356_720.mov" w={720} h={1280} video />
                  </Justify>
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={12} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/images/Refinement_Prototype-3.jpg" w={3840} h={2160} widthPercent={100} />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={10} />
              {" "}
              <Row>
                <Col span={1} />
                <Col span={1} />
                <Col span={8}>
                  <h2>
                    <b>
                      {"Refinement"}
                    </b>
                  </h2>
                  <span style={{ "--font-scale": "1.2" } as CSSProperties}>
                    {"The form and propotions were driven by how noticeability when put on the desk and the relationship of the curvature between the main body and the base"}
                  </span>
                </Col>
                <Col span={1} />
                <Col span={1} />
              </Row>
              <br />
              {" "}
              <Row>
                <Col span={1} />
                <Col span={1} />
                <Col span={8}>
                  <Slideshow fadeSeconds={0.2}
                    slides={[
                      { src: "/media/images/shift_refinement_1.png", w: 1080, h: 1920 },
                      { src: "/media/images/shift_refinement_2.png", w: 1080, h: 1920 },
                      { src: "/media/images/shift_refinement_3.png", w: 1080, h: 1920 },
                      { src: "/media/images/shift_refinement_4.png", w: 1080, h: 1920 },
                    ]}
                  />
                </Col>
                <Col span={1} />
                <Col span={1} />
              </Row>
              <Lines n={5} />
              {" "}
              <Row>
                <Col>
                  <h2>
                    <b>
                      {"Color explorations"}
                    </b>
                  </h2>
                  {" "}
                  <span style={{ "--font-scale": "1.2" } as CSSProperties}>
                    {"Exploring colors and textures that reminisce different colors and scenaries of coastlines"}
                  </span>
                </Col>
              </Row>
              <br />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={9} />
                <Col span={1} />
              </Row>
              <br />
              {" "}
              <Row>
                <Col span={4}>
                  <Media src="/media/images/cmf_2.png" w={1939} h={1608} />
                </Col>
                <Col span={8}>
                  <Media src="/media/images/cmf.png" w={3777} h={1609} />
                </Col>
              </Row>
              <Lines n={3} />
              {" "}
              <Row>
                <Col />
              </Row>
              <Lines n={8} />
              {" "}
              <Row>
                <Col>
                  <h2>
                    <b>
                      {"Working prototype"}
                    </b>
                  </h2>
                  <span style={{ "--font-scale": "1.2" } as CSSProperties}>
                    {"Testing how much movement is enough to be present without being disruptive."}
                  </span>
                  <h1>
                    <b />
                  </h1>
                </Col>
              </Row>
              <Lines n={2} />
              {" "}
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Media src="/media/video/IMG_9350_720.mov" w={1280} h={720} video widthPercent={100} />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={9} />
              {" "}
            </>
          }
        />
      </main>
    </div>
  );
}
