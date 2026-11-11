import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-semibold text-black tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-neutral-600 text-[15px] mb-8 max-w-sm">
          That page doesn&apos;t exist. Head back to the project index.
        </p>
        <Link
          href="/"
          className="text-[15px] font-medium text-black underline underline-offset-4 hover:opacity-70"
        >
          Back to projects
        </Link>
      </main>
      <Footer />
    </div>
  );
}
