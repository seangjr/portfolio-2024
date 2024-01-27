import { useEffect, useRef } from "react";
import profileImg from "../../../../public/assets/profile.jpg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Image from "next/image";

const About = () => {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <Image
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Sean Relampagos"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className="translate-y-10 text-body-1 2xl:text-4xl opacity-0"
            >
              As a full-stack developer based in the vibrant heart of Asia
              Pacific, I blend performance-driven coding with innovative design
              to craft websites and applications that stand out.
              <br></br>
              <br></br>
              Currently, I am honing my skills as a Software Engineer at Base
              Two, a leading software consultancy in Kuala Lumpur, Malaysia.
              <br></br>
              <br></br>
              When I am not developing or designing, I am probably:
              <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>📖 Reading about the latest tech</li>
                <li>🎧 Producing music</li>
                <li>🏋️‍♂️ Working out</li>
                <li>🤔 Having shower thoughts at 3AM</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
