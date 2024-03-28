import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLenis } from "@studio-freight/react-lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Menu from "./menu/menu";
import TransitionLink from "../navigation/TransitionLink";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    // Assuming sectionRefs is an array of elements
    const triggers = sectionRefs.map((section) => {
      return ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        animation: tl
          .to(navbar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),
        toggleActions: "restart reverse restart reverse",
        // markers: true, // Uncomment for debugging
      });
    });

    // Clean up
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <header
        ref={navbar}
        className="fixed top-0 z-10 flex w-full -translate-y-full items-center justify-between px-5 py-3 bg-secondary-100"
        style={{
          transform: "translateY(0)",
        }}
      >
        {/* logo */}
        <TransitionLink
          href="/#hero"
          props={{
            className: "z-50 font-general text-heading-3 font-black",
            onClick: () => lenis.scrollTo("#hero"),
            // ref: logo,
            // aria-label: "Logo",
          }}
        >
          seangjr
        </TransitionLink>
        <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
          <TransitionLink
            href="/#about"
            props={{
              className: "group relative hidden md:inline-block",
              onClick: () => lenis.scrollTo("#about"),
            }}
          >
            <span>about</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </TransitionLink>
          <TransitionLink
            href="/#services"
            props={{
              className: "group relative hidden md:inline-block",
              onClick: () => lenis.scrollTo("#services"),
            }}
          >
            <span>services</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </TransitionLink>
          <TransitionLink
            href="/#works"
            props={{ className: "group relative hidden md:inline-block", onClick: () => lenis.scrollTo("#works") }}
          >
            <span>projects</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </TransitionLink>
          <TransitionLink
            href="/gallery"
            props={{ className: "group relative hidden md:inline-block" }}
          >
            <span>gallery</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
          </TransitionLink>
          <Link
            ref={cta}
            className="button group relative hover:bg-transparent hidden md:inline-block"
            href="#contact"
            onClick={() => lenis.scrollTo("#contact")}
          >
            <span className="relative w-fit">
              <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <span>Let&apos;s Talk.</span>
            </span>
          </Link>
          <button
            className="md:hidden button group relative cursor-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu">
            Menu
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
