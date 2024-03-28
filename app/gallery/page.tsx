"use client"
import { useRef } from "react";
import Navbar from "../components/ui/navbar"

export default function Page() {
  let sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  return (
    <>
      <Navbar sectionRefs={sectionRefs.current} />
      <section
        className="relative flex w-full h-screen select-none items-center justify-center"
      >
        <h1 className="text-3xl">Working in progress! ⚠️</h1>
      </section>
    </>
  )
}
