import { gsap } from "gsap";
import anime from "animejs/lib/anime.es.js";
import { useRef, useEffect } from "react";

const Hero = () => {
  const titles = useRef<Array<HTMLHeadingElement | null>>([]);
  const scrollLine = useRef<HTMLDivElement | null>(null);
  const scroll = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    anime.timeline({ loop: true }).add({
      targets: scrollLine.current,
      width: ["0%", "100%"],
      easing: "easeOutExpo",
      duration: 500,
    });

    gsap.to(titles.current, {
      y: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.to(scroll.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power4.inOut",
      delay: 3.5,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero relative flex w-full h-screen select-none items-center justify-center"
      aria-label="hero"
    >
      <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[8vw] font-bold  uppercase text-accent-300">
        <div className="title">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-96 overflow-visible"
          >
            Hey👋, I&apos;m
          </h1>
        </div>
        <div className="title">
          <h1 ref={(el) => (titles.current[1] = el)} className="translate-y-96">
            sean
          </h1>
        </div>
      </div>
      <div
        ref={scroll}
        className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8"
      >
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
