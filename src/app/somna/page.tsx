import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import WorkHeader from "@/components/WorkHeader";
import ProjectViews from "@/components/ProjectViews";
import { Col, Gallery, Lines, Media, Row } from "@/components/cargo/Cargo";

export const metadata: Metadata = {
  title: "Somna",
  description:
    "Somna is a CPAP machine designed as an object for the home, with a separable motor unit for travel.",
};

// Transcribed from https://zytprojects.com/somna (Cargo). Text, order, spacing
// (the <Lines> counts) and media sizes match the original. Don't paraphrase.

const IMG = "/media/images/";
const VID = "/media/video/";
const TEAL = "rgb(34, 98, 126)";
const scale = (s: number) => ({ "--font-scale": s }) as CSSProperties;

/** Caption under a gallery image/video: bold title + 24px description. */
function GalleryCaption({
  title,
  children,
  lineHeight,
  endLine,
}: {
  title: string;
  children: string;
  lineHeight?: number;
  /** Cargo ends some captions with an extra empty line. */
  endLine?: boolean;
}) {
  return (
    <div style={{ textAlign: "left" }}>
      <span className="bodytext">
        <b>{title}</b>
      </span>
      <span className="bodytext" style={{ fontSize: 24, lineHeight }}>
        {children}
      </span>
      {endLine && <br />}
    </div>
  );
}

/** Left column heading block used by the 3-column text + media rows. */
function SideHeading({ title, rest, children }: { title: ReactNode; rest?: string; children: ReactNode }) {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>
          <b>{title}</b>
          {rest}
        </h2>
      </div>
      <h2>
        <br />
      </h2>
      <div style={{ textAlign: "left" }}>{children}</div>
    </>
  );
}

/** Centered teal heading + larger subtitle line. */
function SectionTitle({ title, subtitle, color = TEAL }: { title: string; subtitle: string; color?: string }) {
  return (
    <>
      <h2 style={{ color }}>
        <b>{title}</b>
      </h2>
      <span style={scale(1.2)}>{subtitle}</span>
    </>
  );
}

export default function SomnaPage() {
  return (
    <div className="cg-page">
      <div className="home-header-wrap">
        <WorkHeader />
      </div>

      <main className="cg-body" style={{ textAlign: "center" }}>
        <ProjectViews
          overview={
            <>
              <Media src={`${IMG}Somna_hero_thumbnail_withshadow_edited.jpg`} w={3840} h={2160} widthPercent={100} alt="Somna" />
              <Lines n={3} />

              {/* Title, synopsis, capabilities, date */}
              <Row gutter={5}>
                <Col span={6}>
                  <div style={{ textAlign: "left" }}>
                    <b>
                      <span style={{ lineHeight: 1.3, ...scale(1.6) }}>Somna - CPAP Machine </span>
                      <br />
                    </b>
                    <br />
                    <b>
                      Synopsis
                      <br />
                      <br />
                    </b>
                    Somna is a CPAP machine designed as an object for the home. Its vertical motor unit separates from the
                    humidifier module and can be carried on its own for travel.
                  </div>
                  {" "}
                </Col>
                <Col span={4}>
                  <div style={{ textAlign: "left" }}>
                    <span style={{ color: "rgba(0, 0, 0, 0.75)" }}>
                      <span style={{ lineHeight: 1.25 }}>
                        <span style={{ lineHeight: 0.5, color: "rgba(0, 0, 0, 0.75)" }}>
                          <b>
                            <span style={{ color: "rgb(0, 0, 0)" }}>Capabilities:</span>
                            <br />
                            <br />
                          </b>
                        </span>
                        CAD
                        <br />
                      </span>
                    </span>
                    3D Visualisation
                    <br />
                    <br />
                  </div>
                </Col>
                <Col span={2}>
                  <div style={{ textAlign: "right" }}>
                    <b>Date:</b>
                    <br />
                    Sep 22nd 2026
                  </div>
                </Col>
              </Row>
              <Lines n={9} />

              {/* ---- final design ---- */}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Somna_left_in_scene_edited.jpg`} w={3618} h={2055} alt="Somna in scene" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={8} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Group-63.png`} w={3840} h={2160} alt="Somna render" />
                  <br />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={8} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Group-62.png`} w={3840} h={2160} alt="Somna render" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={8} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Group-64.png`} w={3840} h={2160} alt="Somna render" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={6} />

              {/* Control knob */}
              <Row gutter={4}>
                <Col span={1}>
                  <Lines n={9} />
                </Col>
                <Col span={3}>
                  <Lines n={8} />
                  <SideHeading
                    title={
                      <>
                        Control <span style={{ color: TEAL }}>Knob</span>
                      </>
                    }
                  >
                    {"Users are able to adjust settings and navigate the interface through the control knob "}
                  </SideHeading>
                </Col>
                <Col span={8}>
                  <Media src={`${VID}Somna_knob_rotation.mp4`} w={3840} h={2160} video loop={false} />
                </Col>
              </Row>
              <Lines n={8} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${VID}Somna_display_power_up.mp4`} w={3840} h={2160} video loop={false} />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={8} />

              {/* Humidifier tank access */}
              <Row gutter={4}>
                <Col span={1}>
                  <Lines n={9} />
                </Col>
                <Col span={3}>
                  <Lines n={7} />
                  <SideHeading
                    title={
                      <>
                        <span style={{ color: TEAL }}>Humidifer tank</span> access
                      </>
                    }
                  >
                    Access the humidifer tank by pulling the fabric tab and remove the tank by pressing down the tank.
                  </SideHeading>
                </Col>
                <Col span={8}>
                  <Media src={`${IMG}Somna_back_lid_left_closeup-Edit-3_edited.jpg`} w={3840} h={2160} alt="Tank access" />
                </Col>
              </Row>
              <Lines n={9} />

              {/* Tank refill */}
              <Row gutter={4}>
                <Col span={1}>
                  <Lines n={9} />
                </Col>
                <Col span={3}>
                  <Lines n={8} />
                  <SideHeading
                    title={
                      <>
                        Tank <span style={{ color: TEAL }}>refill</span>
                      </>
                    }
                  >
                    Designed to be easy to clean and refill
                    <br />
                  </SideHeading>
                </Col>
                <Col span={8}>
                  <Media src={`${IMG}Somna_lid_water-Edit_edited.jpg`} w={3840} h={2160} alt="Tank refill" />
                </Col>
              </Row>
              <Lines n={9} />

              {/* Airway connection (mirrored: image left, text right) */}
              <Row gutter={4}>
                <Col span={8}>
                  <Media src={`${IMG}Somna_tube_connection-Edit_edited.jpg`} w={3840} h={2160} alt="Airway connection" />
                  <br />
                </Col>
                <Col span={3}>
                  <Lines n={7} />
                  <h2 style={{ textAlign: "right" }}>
                    <b>
                      Airway <span style={{ color: TEAL }}>connection</span>
                    </b>
                  </h2>
                  <div style={{ textAlign: "right" }}>
                    <h2>
                      <br />
                    </h2>
                  </div>
                  <div style={{ textAlign: "right" }}>User connects the breathing tube at the back of the device.</div>
                  <br />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={5} />
              <Row>
                <Col span={1} />
                <Col span={10} />
                <Col span={1} />
              </Row>
              <Lines n={3} />

              {/* Docked at home */}
              <Row>
                <Col>
                  <SectionTitle
                    title="Docked at home, free on the road"
                    subtitle=" One machine for home and travel "
                    color="rgb(0, 0, 0)"
                  />
                </Col>
              </Row>
              <Lines n={3} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Somna_motor_split-Edit.png`} w={3840} h={2160} widthPercent={100} alt="Motor unit split" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={7} />
              <Media
                src={`${IMG}Somna_hero_in_context_2_edited.jpg`}
                w={3445}
                h={1780}
                widthPercent={83.4}
                alt="Somna in context"
              />
              <Lines n={4} />
            </>
          }
          process={
            <>
              {/* CPAP therapy */}
              <Row>
                <Col span={1}>
                  <Lines n={5} />
                </Col>
                <Col span={3}>
                  <Lines n={4} />
                  <SideHeading
                    title={
                      <>
                        <span style={{ color: TEAL }}>CPAP therapy</span>{" "}
                      </>
                    }
                    rest="is one of the most effective therapy for sleep apnea"
                  >
                    CPAP therapy treats obstructive sleep apnea by delivering a continuous stream of pressurized air through
                    a mask to keep your airway open while you sleep
                  </SideHeading>
                </Col>
                <Col span={1} />
                <Col span={7}>
                  <Lines n={3} />
                  <Media
                    src={`${IMG}AdobeStock_296669683-min-1.png`}
                    w={2707}
                    h={991}
                    maxHeight={40}
                    caption={
                      <div style={{ textAlign: "left" }}>
                        <h1 style={{ fontSize: "20.1348px" }}>
                          <br />
                        </h1>
                        <br />
                      </div>
                    }
                  />
                </Col>
              </Row>
              <Lines n={11} />

              {/* Evolution of CPAP machines */}
              <Row>
                <Col span={2}>
                  <br />
                </Col>
                <Col span={8}>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.85)" }}>Evolution of CPAP machines</h2>
                  <br />
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={2} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}CPAP_evolution.png`} w={3840} h={1200} alt="Evolution of CPAP machines" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={9} />
              <Row>
                <Col>
                  <SectionTitle
                    title="Full of bulky home medical devices"
                    subtitle=" Newer models have smaller footprint, however the designs remain to look medical "
                  />
                </Col>
              </Row>
              <br />
              <Media src={`${IMG}CPAP_competitive_analysis.png`} w={2157} h={2157} alt="CPAP competitive analysis" />
              <Lines n={9} />

              {/* Existing problems */}
              <Row>
                <Col>
                  <SectionTitle
                    title="Existing problems and solutions"
                    subtitle={" Lack of consideration for the home enviornment  "}
                  />
                </Col>
              </Row>
              <Lines n={2} />
              <Row>
                <Col span={2} />
                <Col span={8}>
                  <Gallery gutter={2}>
                    <Media
                      src={`${IMG}1284201791513175_.pic-1.png`}
                      w={986}
                      h={986}
                      caption={
                        <>
                          <GalleryCaption title="Big foot print" lineHeight={1.2} endLine>
                            A standard CPAP machine takes up most of the space of a nightstand, leaving no room for other
                            items.
                          </GalleryCaption>
                        </>
                      }
                    />
                    <Media
                      src={`${IMG}image-78.png`}
                      w={986}
                      h={986}
                      caption={
                        <GalleryCaption title="Dedicated travel CPAP" endLine>
                          People have to purchase a separate CPAP for travel due to size
                        </GalleryCaption>
                      }
                    />
                    <Media
                      src={`${IMG}image-77.png`}
                      w={986}
                      h={986}
                      caption={
                        <>
                          <GalleryCaption title="Lost of dignity " lineHeight={1.2}>
                            Some users DIY storage and modification to integrate the device with the bedroom
                          </GalleryCaption>
                          <br />
                          <br />
                        </>
                      }
                    />
                  </Gallery>
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={11} />

              {/* What if */}
              <Row>
                <Col span={2}>
                  <br />
                </Col>
                <Col span={8}>
                  <h2 style={{ color: "rgba(0, 0, 0, 0.85)" }}>
                    What if the CPAP machine was{" "}
                    <span style={{ color: TEAL }}>designed to fit into your home in the first place?</span>
                    {" "}
                    <br />
                  </h2>
                </Col>
                <Col span={2} />
              </Row>
              <Lines n={20} />

              {/* Sketches + focused concepts */}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Untitled_Artwork-10.jpg`} w={3860} h={2140} alt="Sketches" />
                </Col>
                <Col span={1} />
              </Row>
              {" "}
              <Lines n={8} />
              <Row>
                <Col span={1} />
                <Col span={2} />
                <Col span={2} />
                <Col span={3}>
                  <Media src={`${IMG}Somna_concept_1-2.jpg`} w={720} h={720} alt="Concept" />
                </Col>
                <Col span={3}>
                  <Media src={`${IMG}IMG_2755_1.jpg`} w={944} h={944} alt="Concept model" />
                </Col>
                <Col span={1} />
              </Row>
              <Row>
                <Col span={1} />
                <Col span={3}>
                  <SideHeading title={<span style={{ color: TEAL }}>Focused Concepts</span>}>
                    Exploring different proportions and sizes that has a compact footprint{" "}
                  </SideHeading>
                </Col>
                <Col span={1} />
                <Col span={3}>
                  <Media src={`${IMG}Somna_concept_1-3.jpg`} w={720} h={720} alt="Concept" />
                </Col>
                <Col span={3}>
                  <Media src={`${IMG}IMG_2771_1.jpg`} w={946} h={946} alt="Concept model" />
                </Col>
                <Col span={1} />
              </Row>
              <Row>
                <Col span={1} />
                <Col span={3} />
                <Col span={1} />
                <Col span={3}>
                  <Media src={`${IMG}Somna_concept_1.jpg`} w={720} h={720} alt="Concept" />
                </Col>
                <Col span={3}>
                  <Media src={`${IMG}IMG_2756_1.jpg`} w={945} h={945} alt="Concept model" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={8} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Untitled_Artwork-14.jpg`} w={3860} h={2140} widthPercent={100} alt="Concept sketches" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={7} />

              {/* Refinements */}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <SectionTitle title="Refinements" subtitle="Developing both visible and physical touch points " />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={2} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Somna_surfacing-iterations.png`} w={3840} h={2160} maxHeight={40} alt="Surfacing iterations" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={3} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Somna_lid_iteration-2.jpg`} w={3840} h={2160} maxHeight={40} alt="Lid iterations" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={7} />
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Gallery gutter={1}>
                    <Media
                      src={`${VID}IMG_2734.mov`}
                      w={1080}
                      h={1080}
                      video
                      caption={
                        <GalleryCaption title="Humidifier tank removal" lineHeight={1.2}>
                          {"Press and remove "}
                        </GalleryCaption>
                      }
                    />
                    <Media
                      src={`${VID}IMG_2750.mov`}
                      w={1080}
                      h={1080}
                      video
                      caption={
                        <GalleryCaption title="Humidifier tank lid" lineHeight={1.2}>
                          Acessing the humidifer tank by pulling the fabric pulling tab
                        </GalleryCaption>
                      }
                    />
                    <Media
                      src={`${VID}IMG_2751.mov`}
                      w={1080}
                      h={1080}
                      video
                      caption={
                        <GalleryCaption title="Control knob" lineHeight={1.2}>
                          Adjust your air temperature and ramp with a simple twisting motion
                        </GalleryCaption>
                      }
                    />
                  </Gallery>
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={9} />

              {/* Renders */}
              <Row>
                <Col span={1} />
                <Col span={10}>
                  <Media src={`${IMG}Process_pic_4k.png`} w={3860} h={2160} alt="Process" />
                </Col>
                <Col span={1} />
              </Row>
              <Lines n={8} />
            </>
          }
        />
      </main>
    </div>
  );
}
