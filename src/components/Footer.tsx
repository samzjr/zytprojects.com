import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 py-10 md:py-12 mt-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-neutral-600 border-t border-neutral-100">
      <div className="flex flex-wrap items-center gap-6">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-60 transition-opacity underline-offset-4 hover:underline font-medium"
        >
          Resume
        </a>
        <a
          href="mailto:samzhan1209@gmail.com"
          className="text-black hover:opacity-60 transition-opacity"
        >
          samzhan1209@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/zytprojects?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-black hover:opacity-60 transition-opacity flex items-center gap-1.5"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="hidden sm:inline text-xs font-medium">@zytprojects</span>
        </a>
      </div>
    </footer>
  );
}
