"use client";
import "./loader.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";

const Loader = () => {
  const counterElement = useRef<HTMLParagraphElement | null>(null);
  const textWrapper = useRef<HTMLParagraphElement | null>(null);

  function startLoader() {
    let counter = 0;

    const updateCounter = () => {
      if (counter < 100) {
        let increment = Math.floor(Math.random() * 10) + 1;
        counter += increment;
        // handle null
        if (counterElement.current) {
          counterElement.current.innerText = counter.toString();
        }

        let delay = Math.floor(Math.random() * 100) + 20;
        setTimeout(updateCounter, delay);
      }
    };

    updateCounter();
  }

  function loading() {
    startLoader();
    gsap.to(".count", {
      opacity: 0,
      delay: 2.5,
      duration: 0.25,
    });
    if (textWrapper.current && textWrapper.current.textContent) {
      textWrapper.current.innerHTML = textWrapper.current.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml16 .letter",
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 30 * i,
      })
      .add({
        targets: ".ml16 .letter",
        translateY: [0, 100],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 1000 + 30 * i,
      });

    gsap.to(".count", {
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.5,
      delay: 2.75,
    });

    gsap.to(".pre-loader", {
      scale: 0.5,
      height: "0",
      ease: "power4.inOut",
      duration: 2,
      delay: 2,
    });

    gsap.to(".loader", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 2.75,
    });

    gsap.to(".loader-bg", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3,
    });

    gsap.to(".loader-2", {
      height: "0",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 1.75,
      delay: 2.7,
    });

    gsap.to(".loader-content", {
      zIndex: -1,
      ease: "power4.inOut",
      duration: 0.5,
      delay: 5,
    });
  }

  useEffect(() => {
    loading();
  }, [loading]);

  return (
    <div className="loader-wrapper">
      <div className="pre-loader">
        <div className="loader"></div>
        <div className="loader-bg"></div>
      </div>
      <div className="loader-content">
        <div className="count">
          <p ref={counterElement}>0</p>
        </div>
        <div className="copy">
          <p className="ml16" ref={textWrapper}>
            seangjr
          </p>
        </div>
      </div>
      <div className="loader-2"></div>
    </div>
  );
};

export default Loader;
