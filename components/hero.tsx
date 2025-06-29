"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Terminal, Lock, Shield } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "A Cybersecurity Wannabe"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-3 bg-cyan-400/10 rounded-full border border-cyan-400/20 animate-pulse">
            <Shield className="h-8 w-8 text-cyan-400" />
          </div>
          <div className="p-3 bg-blue-400/10 rounded-full border border-blue-400/20 animate-pulse delay-100">
            <Lock className="h-8 w-8 text-blue-400" />
          </div>
          <div className="p-3 bg-cyan-400/10 rounded-full border border-cyan-400/20 animate-pulse delay-200">
            <Terminal className="h-8 w-8 text-cyan-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Ariel Banania Jr
        </h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
          <span className="font-mono">
            {text}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </span>
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A simple guy aspiring to be a cybersecurity professional with a passion for protecting digital assets and a keen interest in ethical hacking. I am dedicated to learning and mastering the skills necessary to secure systems and networks against evolving threats.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            My Shenanigans
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Hit me up ;)
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-cyan-400" />
      </div>
    </section>
  )
}
