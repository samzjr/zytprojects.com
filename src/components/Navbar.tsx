"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between text-[15px] tracking-tight bg-white sticky top-0 z-40">
        <Link
          href="/"
          className="font-medium text-black hover:opacity-70 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          zytprojects
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <Link
            href="/archive"
            className={`transition-opacity hover:opacity-60 ${
              pathname === "/archive" ? "font-semibold text-black" : "text-black"
            }`}
          >
            Archive
          </Link>
          <Link
            href="/information"
            className={`transition-opacity hover:opacity-60 ${
              pathname === "/information" ? "font-semibold text-black" : "text-black"
            }`}
          >
            Information
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden p-1 text-black hover:opacity-60 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-30 flex flex-col justify-between px-8 py-10 md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="/archive"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity"
            >
              Archive
            </Link>
            <Link
              href="/information"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity"
            >
              Information
            </Link>
          </nav>

          <div className="flex flex-col gap-3 text-sm text-neutral-600 border-t border-neutral-200 pt-6">
            <a
              href="mailto:samzhan1209@gmail.com"
              className="hover:text-black transition-colors"
            >
              samzhan1209@gmail.com
            </a>
            <a
              href="https://www.instagram.com/zytprojects/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram @zytprojects
            </a>
          </div>
        </div>
      )}
    </>
  );
}
