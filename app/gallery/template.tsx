"use client"
import React from 'react'
import Contact from '../components/ui/home/contact'
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Contact />
    </>
  )
}
