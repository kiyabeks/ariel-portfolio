"use client"
import { useState } from "react"
import { Download, Award, Briefcase, GraduationCap, Shield, ChevronDown, ChevronUp } from "lucide-react"

export default function Resume() {
  const [showAllLabs, setShowAllLabs] = useState(false)

  const labs = [
    {
      title: "TryHackMe: DFIR An Introduction",
      platform: "TryHackMe",
      period: "2025",
      description: "Introductory DFIR module covering fundamentals of digital forensics and incident response.",
    },
    {
      title: "TryHackMe: Windows Forensics 1",
      platform: "TryHackMe",
      period: "2025",
      description: "Learned how to analyze Windows Registry and forensic artifacts.",
    },
    {
      title: "TryHackMe: KAPE",
      platform: "TryHackMe",
      period: "2025",
      description: "Explored Kroll Artifact Parser and Extractor for collecting and processing forensic artifacts.",
    },
    {
      title: "Hack The Box: Network Enumeration with Nmap",
      platform: "Hack The Box",
      period: "2025",
      description: "Practiced scanning and enumerating networks using Nmap.",
    },
    {
      title: "Hack The Box: Using the Metasploit Framework",
      platform: "Hack The Box",
      period: "2025",
      description: "Learned exploiting vulnerabilities and post-exploitation with Metasploit.",
    },
    {
      title: "Hack The Box: Intro to Network Traffic Analysis",
      platform: "Hack The Box",
      period: "2025",
      description: "Analyzed network traffic and captured packets to detect anomalies.",
    },
    {
      title: "Hack The Box: Vulnerability Assessment",
      platform: "Hack The Box",
      period: "2025",
      description: "Studied methodologies for identifying vulnerabilities in systems and networks.",
    },
    {
      title: "Hack The Box: Web Fuzzing",
      platform: "Hack The Box",
      period: "2025",
      description: "Learned techniques for discovering hidden parameters and paths in web applications.",
    },
    {
      title: "Hack The Box: Network Foundations",
      platform: "Hack The Box",
      period: "2025",
      description: "Built foundational knowledge of networking concepts critical for cybersecurity.",
    },
    {
      title: "Hack The Box: Linux Fundamentals",
      platform: "Hack The Box",
      period: "2025",
      description: "Covered basic Linux commands, file systems, and user management.",
    },
  ]

  const labsToShow = showAllLabs ? labs : labs.slice(0, 3)

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering (Cybersecurity Track)",
      school: "Technological Institute of the Philippines",
      period: "2022 - Present",
      description: "Pursuing specialization in cybersecurity, digital forensics, and network security.",
    },
  ]

  const certifications = [
    "CCNAv7: Switching, Routing, and Wireless Essentials",
    "CCNAv7: Introduction to Networks",
    "Cisco Cybersecurity Essentials",
    "Dean's Lister Award (2023, 2024)"
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>

          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Practical Labs */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-cyan-400/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Practical Labs & Platforms</h3>
            </div>

            <div className="space-y-6">
              {labsToShow.map((lab, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-cyan-400/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-white mb-1">{lab.title}</h4>
                    <p className="text-cyan-400 mb-2">{lab.platform}</p>
                    <p className="text-sm text-gray-400 mb-3">{lab.period}</p>
                    <p className="text-gray-300">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {labs.length > 3 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllLabs(!showAllLabs)}
                  className="inline-flex items-center space-x-2 px-4 py-2 text-cyan-400 hover:text-cyan-200 transition-all duration-300"
                >
                  {showAllLabs ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      <span>See Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      <span>See More</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-cyan-400/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-cyan-400/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-cyan-400 mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-cyan-400/10 rounded-lg">
                <Award className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
