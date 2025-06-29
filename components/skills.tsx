"use client"
import { Terminal, Network, Eye, Bug, Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Security Testing",
      icon: Bug,
      skills: [
        { name: "Penetration Testing", status: "Learning" },
        { name: "Vulnerability Assessment", status: "Getting Confident" },
        { name: "Social Engineering", status: "Exploring" },
        { name: "Web App Security", status: "Learning" },
      ],
    },
    {
      title: "Network Security",
      icon: Network,
      skills: [
        { name: "Firewall Configuration", status: "Getting Confident" },
        { name: "IDS/IPS", status: "Learning" },
        { name: "Network Monitoring", status: "Learning" },
        { name: "VPN Setup", status: "Exploring" },
      ],
    },
    {
      title: "Digital Forensics",
      icon: Eye,
      skills: [
        { name: "Incident Response", status: "Learning" },
        { name: "Malware Analysis", status: "Exploring" },
        { name: "Data Recovery", status: "Learning" },
        { name: "Evidence Collection", status: "Exploring" },
      ],
    },
    {
      title: "Development",
      icon: Terminal,
      skills: [
        { name: "Python", status: "Getting Confident" },
        { name: "JavaScript", status: "Learning" },
        { name: "React", status: "Learning" },
        { name: "Node.js", status: "Exploring" },
      ],
    },
  ]

  const tools = [
    "Kali Linux",
    "Metasploit",
    "Burp Suite",
    "Wireshark",
    "Nmap",
    "OWASP ZAP",
    "Splunk",
    "Wazuh",
    "John the Ripper",
    "Hashcat",
    "Aircrack-ng",
    "Airodump-ng",
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What I’m Learning
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Currently building up my skills in cybersecurity and development — here’s what I’ve been exploring.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-cyan-400 text-sm italic">{skill.status}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-cyan-400/10 rounded-lg">
              <Server className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Tools I'm Exploring</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
