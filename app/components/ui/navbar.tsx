import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Navbar = ({
  sectionRefs,
}: {
  sectionRefs: Array<HTMLDivElement | null>;
}) => {
  const navbar = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLAnchorElement | null>(null);
  const cta = useRef<HTMLAnchorElement | null>(null);
  const tl = gsap.timeline();
  const lenis = useLenis();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    tl.to(navbar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navbar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navbar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between px-5 py-3 bg-secondary-100"
    >
      {/* logo */}
      <Link
        ref={logo}
        href="#hero"
        aria-label="Logo"
        className="z-50 font-general text-heading-3 font-black"
        onClick={() => lenis.scrollTo("#hero")}
      >
        seangjr
      </Link>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <Link
          href="#about"
          className="group relative hidden md:inline-block"
          onClick={() => lenis.scrollTo("#about")}
        >
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          href="#services"
          onClick={() => lenis.scrollTo("#services")}
          className="group relative hidden md:inline-block"
        >
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          href="#works"
          className="group relative hidden md:inline-block"
          onClick={() => lenis.scrollTo("#works")}
        >
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
          onClick={() => lenis.scrollTo("#contact")}
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
