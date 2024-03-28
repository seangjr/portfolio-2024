"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import "./Menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import TransitionLink from "../../navigation/TransitionLink";

const menuLinks = [
  { path: "/#", label: "Home" },
  { path: "/#about", label: "About" },
  { path: "/#services", label: "Services" },
  { path: "/#projects", label: "Projects" },
  { path: "/gallery", label: "Gallery" },
  { path: "#contact", label: "Contact" },
];

export default function Menu({ isMenuOpen, toggleMenu }:
  { isMenuOpen: boolean; toggleMenu: () => void }) {
  const container = useRef<HTMLDivElement | null>(null);

  const tl = useRef();

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      // @ts-ignore
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      // @ts-ignore
      tl.current!.play();
    } else {
      // @ts-ignore
      tl.current!.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <TransitionLink href="/"
              props={{ className: "z-50 font-general text-heading-3 font-black text-secondary-400" }}
            >seangjr</TransitionLink>
          </div>
          <button className="button group relative cursor-none font-grotesk text-body-3 bg-secondary-400 text-accent-400" onClick={toggleMenu}>
            Close
          </button>
        </div>

        {/* menu overlay items */}
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  {/* <Link className="menu-link text-secondary-400" href={link.path}> */}
                  {/*   {link.label} */}
                  {/* </Link> */}
                  <TransitionLink href={link.path}
                    props={{ className: "menu-link text-secondary-400" }}
                  >
                    {link.label}
                  </TransitionLink>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col text-secondary-400">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Behance &#8599;</a>
              <a href="#">Dribbble &#8599;</a>
            </div>
            <div className="menu-info-col text-secondary-400">
              <a href="mailto:sean@relampagos.org">sean@relampagos.org</a>
              <p>011 5415 6532</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
