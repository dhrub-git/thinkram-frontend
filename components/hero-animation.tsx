"use client"

import { useState, useEffect } from "react"

export default function HeroAnimation() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360)
    }, 20) // Adjust speed as needed

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="bg-black py-32 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          Augmenting Human Ingenuity with <span className="text-blue-400">AI</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          The platform for technology professionals and enterprise leaders navigating the AI transformation.
        </p>
      </div>

      {/* Animated Background - Simple rotating shape */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-2xl"
        style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
      ></div>
    </section>
  )
}
