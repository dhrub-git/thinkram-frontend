"use client"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { GradientButton } from "@/components/ui/gradient-button"

const fullText = "Human + Machine"

export default function AuroraHeroContent() {
  const [typewriterText, setTypewriterText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterText((currentText) => {
        if (currentText.length < fullText.length) {
          return fullText.slice(0, currentText.length + 1)
        }
        clearInterval(interval)
        return currentText
      })
    }, 150) // Adjust typing speed here

    return () => clearInterval(interval)
  }, []) // Dependency array is empty as fullText is now a stable constant

  return (
    <div className="relative z-10 w-full min-h-[calc(100vh-145px)] flex flex-col items-center justify-center px-6 py-10 md:py-20 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 float-animation" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] geist-font tracking-tight">
            The Future of Tech Work is
            <span className="gradient-text block tracking-tight font-sans">{typewriterText}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed inter-font font-normal font-mono">
            ThinkRam: The private community and intelligence platform for technology leaders and professionals to thrive
            in the age of AI.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 float-animation"
          style={{ animationDelay: "0.5s" }}
        >
          <GradientButton size="lg" className="min-w-[220px] md:min-w-[240px]">
            {" "}
            {/* Using default variant */}
            For Tech Professionals
          </GradientButton>
          <GradientButton variant="variant" size="lg" className="min-w-[220px] md:min-w-[240px]">
            <FontAwesomeIcon icon={faPlay} className="mr-2 h-4 w-4" /> {/* Adjusted icon size */}
            For Enterprise Leaders
          </GradientButton>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hidden md:flex flex-col items-center float-animation"
        style={{ animationDelay: "0.8s" }}
      >
        <span className="text-sm mb-2 inter-font font-normal">Discover More</span>
        <FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />
      </div>
    </div>
  )
}
