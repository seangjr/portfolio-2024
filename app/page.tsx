"use client";
import { useRef } from "react";
import Navbar from "./components/ui/navbar";
import About from "./components/ui/home/about";
import Services from "./components/ui/home/services";
import Hero from "./components/ui/home/hero";
import Role from "./components/ui/home/role";
import Contact from "./components/ui/home/contact";
import Works from "./components/ui/home/works";

export default function Page(props: any) {
  let sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  console.log(props)
  return (
    <>
      <Navbar sectionRefs={sectionRefs.current} />
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
        <About />
        <Services />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
    </>
  );
}
