/**
 * Intro overlay (~2.5s), styles and timing in src/styles/intro.css.
 *
 * WHEN IT PLAYS
 *   - the first time the site is opened in a browser session (any page/link)
 *   - again whenever the homepage is reloaded
 *   - NOT when navigating back to the homepage from inside the site
 *   - never for visitors with "reduce motion" turned on
 *
 * USING A JITTER EXPORT
 *   1. In Jitter, export as MP4 (white background, ~2s long, e.g. 1920x1080).
 *   2. Save it as public/media/intro/intro.mp4
 *   3. Set INTRO_VIDEO below to "/media/intro/intro.mp4".
 *   The overlay still fades out at 2.05s-2.5s (see intro.css), so keep the
 *   video's own animation within the first ~2s.
 */

const INTRO_VIDEO: string | null = null;

const SESSION_KEY = "zyt-intro-seen";

/** Goes in <head>: decides before the first paint whether the intro plays, so it never flashes. */
export function IntroScript() {
  const js = `try{var k=${JSON.stringify(SESSION_KEY)},seen=sessionStorage.getItem(k),n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],reloadHome=!!n&&n.type==="reload"&&location.pathname==="/";if(seen&&!reloadHome){document.documentElement.setAttribute("data-intro-seen","")}sessionStorage.setItem(k,"1")}catch(e){}`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}

export default function IntroOverlay() {
  return (
    <div className="intro" aria-hidden="true">
      {INTRO_VIDEO ? (
        <video className="intro__video" src={INTRO_VIDEO} autoPlay muted playsInline preload="auto" />
      ) : (
        <div className="intro__mark">
          {/* blurred band that leads the reveal, then the sharp logo behind it */}
          <img className="intro__logo intro__logo--blur" src="/media/images/zytprojects-logo.png" alt="" />
          <img className="intro__logo intro__logo--sharp" src="/media/images/zytprojects-logo.png" alt="" />
        </div>
      )}
    </div>
  );
}
