"use client";
import { useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Cursor from "./components/ui/cursor";
import useAnimateOnScroll from "./hooks/useAnimateOnScroll";
import Footer from "./components/ui/footer";
import { Toaster } from "sonner";
import { animatePageIn } from "./utils/animations";

export default function Template({ children }: { children: React.ReactNode }) {
  useAnimateOnScroll(".section-heading", ".heading");

  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <>
      <Toaster position="top-center" richColors />
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-[150] fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-[150] fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-[150] fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-[150] fixed top-0 left-3/4 w-1/4"
      />
      <ReactLenis root>
        <div className="bg-secondary-100">
          <Cursor />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
