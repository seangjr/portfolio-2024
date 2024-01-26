"use client";
import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "./components/ui/navbar";
import Cursor from "./components/ui/cursor";
import useAnimateOnScroll from "./hooks/useAnimateOnScroll";
import Hero from "./components/ui/home/hero";
import Role from "./components/ui/home/role";
import Contact from "./components/ui/home/contact";
import Footer from "./components/ui/footer";
import Works from "./components/ui/home/works";

export default function Template({ children }: { children: React.ReactNode }) {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useAnimateOnScroll(".section-heading", ".heading");

  return (
    <ReactLenis root>
      <div className="bg-secondary-100">
        <Cursor />
        <Navbar sectionRefs={sectionRefs.current} />
        <Hero />
        <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
          <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
          {children}
          <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
