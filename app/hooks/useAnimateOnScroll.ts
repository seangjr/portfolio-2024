import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useAnimateOnScroll = (
  sectionSelector: string,
  headingSelector: string
): void => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionHeadings =
      document.querySelectorAll<HTMLElement>(sectionSelector);
    sectionHeadings.forEach((sectionHeading) => {
      const headings =
        sectionHeading.querySelectorAll<HTMLElement>(headingSelector);

      headings.forEach((heading) => {
        const trigger = ScrollTrigger.create({
          trigger: sectionHeading,
          start: "top 375px",
          end: "bottom 300px",
          animation: gsap.to(heading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });

        ScrollTrigger.refresh();

        return () => {
          trigger.kill();
        };
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [sectionSelector, headingSelector]);
};

export default useAnimateOnScroll;
