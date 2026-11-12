/** Shows in development so localhost isn’t confused with the old scratch copy on :3000 */
export default function DevSourceBanner() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      className="fixed bottom-3 right-3 z-[100] rounded-md border border-neutral-200 bg-white/95 px-3 py-1.5 text-[11px] text-neutral-600 shadow-sm backdrop-blur-sm"
      title="If you don’t see this badge, you’re not on ~/Projects/zytprojects"
    >
      Dev · <span className="font-medium text-black">~/Projects/zytprojects</span>
    </div>
  );
}
