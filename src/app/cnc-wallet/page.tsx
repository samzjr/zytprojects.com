// Generated from https://zytprojects.com/cnc-wallet (Cargo) by scripts/cargo-to-page.mjs.
// Text, order, spacing and media sizes match the original. Edit freely, but
// don't paraphrase the copy (see AGENTS.md).
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CargoHeader from "@/components/cargo/CargoHeader";
import { Col, Gallery, Justify, Lines, Media, Row } from "@/components/cargo/Cargo";

export const metadata: Metadata = {
  title: "CNC Wallet",
  description: "A minimalistic modern cardholder precision-fabricated with CNC machining.",
};

export default function Page() {
  return (
    <div className="cg-page">
      <CargoHeader />

      <main className="cg-body" style={{ textAlign: "center" }}>
        <Media src="/media/images/cncwallet_withcards-Edit.png" w={3840} h={2160} widthPercent={100} />
        <Lines n={3} />
        {" "}
        <Row gutter={5}>
          <Col span={6}>
            <div style={{ textAlign: "left" } as CSSProperties}>
              <b>
                <span style={{ lineHeight: "1.3", "--font-scale": "1.6" } as CSSProperties}>
                  {"CNC Cardholder"}
                </span>
                <br />
              </b>
              <br />
              <b>
                {"Synopsis"}
                <Lines n={2} />
                {" "}
              </b>
              {"A low profile minimalistic modern cardholder that holds 3-4 cards fabricated with CNC Machining"}
              <br />
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
                    <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                      <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                        <b>
                          {"Credits:  "}
                        </b>
                        {" "}
                        <span style={{ color: "rgba(0, 0, 0, 0.75)" } as CSSProperties}>
                          <Lines n={2} />
                          {" "}
                          <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                            <b>
                              {"Will Reeves"}
                            </b>
                          </span>
                          {" - Spring steel tempering"}
                          <br />
                          {" "}
                          <b>
                            <span style={{ color: "rgb(0, 0, 0)" } as CSSProperties}>
                              {"Ming Bi"}
                            </span>
                          </b>
                          {" - Photography "}
                          <br />
                        </span>
                        <b>
                          <Lines n={2} />
                        </b>
                      </span>
                      <b>
                        {"Capabilities:"}
                      </b>
                    </span>
                    <b>
                      <Lines n={2} />
                      {" "}
                    </b>
                    {" "}
                  </span>
                  {"CNC Machining"}
                  <br />
                  {" "}
                </span>
              </span>
              {"Prototyping"}
              <br />
              {" Moodboard"}
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
              {"Dec 5th 2025"}
            </div>
          </Col>
        </Row>
        <Lines n={3} />
        {" "}
        <Media src="/media/images/Exploded_view_cncwallet.png" w={3840} h={2160} widthPercent={100} />
        <br />
        {" "}
        <div style={{ textAlign: "left" } as CSSProperties}>
          <h1 />
        </div>
        <Lines n={8} />
        {" "}
        <Row>
          <Col>
            <h2>
              <b>
                {"Minimal Slim Cardholder "}
              </b>
            </h2>
            <span style={{ "--font-scale": "0.9" } as CSSProperties}>
              {"A low profile wallet ( "}
              <span style={{ "--font-scale": "0.9" } as CSSProperties}>
                {"103.8 x 60.6 x 6.71 mm"}
              </span>
              {" )  holds 3-4 cards "}
            </span>
          </Col>
        </Row>
        <Lines n={2} />
        <Media src="/media/images/PNG-4K-2-2.jpg" w={5504} h={2011} widthPercent={100} />
        <Lines n={8} />
        {" "}
        <Row>
          <Col>
            <h2>
              <b>
                {"Components"}
              </b>
            </h2>
            {"2 spring leafs, 2 aluminum body and 4 stainless steel machine screws"}
            <b />
          </Col>
        </Row>
        <Lines n={2} />
        {" "}
        <Row>
          <Col span={2} />
          <Col span={9}>
            <Justify gutter={0.25}>
              <Media src="/media/images/DSC08291-2.jpg" w={7072} h={5304} />
              <Media src="/media/video/IMG_2192.mov" w={1060} h={1060} video />
            </Justify>
          </Col>
          <Col span={1} />
        </Row>
        <Lines n={12} />
        {" "}
        <Row>
          <Col span={2} />
          <Col span={3}>
            <Media src="/media/video/IMG_8365.mov" w={1080} h={1080} video />
          </Col>
          <Col span={2} />
          <Col span={5}>
            <div style={{ textAlign: "left" } as CSSProperties}>
              <h2>
                <b>
                  <Lines n={4} />
                  {" Machining   "}
                </b>
              </h2>
            </div>
            <div style={{ textAlign: "left" } as CSSProperties}>
              <span style={{ "--font-scale": "0.9" } as CSSProperties}>
                {"Around 20 hours of machining including stock prep and cnc operation "}
              </span>
            </div>
            <div style={{ textAlign: "left" } as CSSProperties}>
              <span style={{ lineHeight: "1" } as CSSProperties}>
                <b>
                  <br />
                  {" "}
                </b>
                <b>
                  <br />
                  {" "}
                </b>
              </span>
            </div>
          </Col>
        </Row>
        <Lines n={13} />
        {" "}
        <Row>
          <Col>
            <h2>
              <b>
                {"Efficient machining"}
              </b>
            </h2>
            {"Operations are optimised to minimise tool change and maximise tool effiency"}
            <b />
          </Col>
        </Row>
        <Lines n={2} />
        {" "}
        <Row>
          <Col span={2} />
          <Col span={8}>
            <Gallery gutter={0.25} columns={2}>
              <Media src="/media/video/Bottom_operation.mov" w={1920} h={1920} video />
              <Media src="/media/video/Screen-Recording-2026-08-16-at-10.56.24pm.mov" w={2200} h={2202} video />
            </Gallery>
          </Col>
          <Col span={2} />
        </Row>
        <Lines n={9} />
        {" "}
        <Row>
          <Col span={2} />
          <Col span={8}>
            <h2>
              {"Spring leaf mechanism refinement"}
            </h2>
          </Col>
          <Col span={2} />
        </Row>
        <Lines n={2} />
        {" "}
        <Media src="/media/images/DSC08282-2.jpg" w={5431} h={4073} />
        <Lines n={14} />
        {" "}
        <Justify gutter={0.25}>
          <Media src="/media/images/DSC08122-2.jpg" w={7952} h={4473} />
          <Media src="/media/images/DSC08169.jpg" w={7952} h={5304} />
        </Justify>
        <Lines n={16} />
        {" "}
        <Media src="/media/images/DSC08082-2.jpg" w={7952} h={4473} widthPercent={60} />
        <Lines n={2} />
        {" "}
        <div style={{ textAlign: "left" } as CSSProperties}>
          <h1 />
        </div>
        <Lines n={2} />
      </main>
    </div>
  );
}
