import { LucideIcon } from "lucide-react"

type Project = {
  title: string
  description: string
  tech: string[]
  icon: LucideIcon
  color: string
  features: string[]
}

type ProjectSectionProps = {
  title: string
  projects: Project[]
}

"use client"
import { ExternalLink, Github, Shield, Eye, Terminal, Lock } from "lucide-react"

export default function Projects() {
  const currentProjects = [
    {
      title: "Home Lab Network Monitoring",
      description:
        "Set up a personal home lab using Wireshark and Suricata to capture and analyze network traffic for anomalies and suspicious activity.",
      tech: ["Wireshark", "Suricata", "Python (optional)"],
      icon: Shield,
      color: "from-cyan-400 to-blue-400",
      features: ["Packet capturing", "Basic threat detection", "Traffic visualization"],
    },
    {
      title: "Basic Vulnerability Scanner",
      description:
        "A lightweight Python script that scans IP addresses for open ports and identifies common services, designed as a learning tool for network security fundamentals.",
      tech: ["Python", "Nmap module"],
      icon: Eye,
      color: "from-green-400 to-cyan-400",
      features: ["Port scanning", "Service enumeration", "Simple reporting"],
    },
  ]

  const futureProjects = [
    {
      title: "CTF Writeup Collection",
      description:
        "A personal blog or documentation repository for Capture The Flag (CTF) challenges I've solved, detailing the tools, techniques, and lessons learned.",
      tech: ["Markdown", "GitHub Pages", "Hack The Box"],
      icon: Terminal,
      color: "from-purple-400 to-pink-400",
      features: ["Challenge walkthroughs", "Solution explanations", "Tools and tactics"],
    },
    {
      title: "Linux Hardening Script",
      description:
        "A Bash or Python script that automates basic Linux server hardening steps like firewall configuration, SSH security settings, and log monitoring setup.",
      tech: ["Bash", "Python", "UFW"],
      icon: Lock,
      color: "from-blue-400 to-purple-400",
      features: ["SSH hardening", "Firewall rules", "Automated system updates"],
    },
  ]

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project: Project, index: number) => (
        <div
          key={index}
          className="bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-3 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-lg`}>
                <project.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                {project.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-xs text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)


  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Personal Shenanigans
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <ProjectSection title=" Current Projects" projects={currentProjects} />
        <ProjectSection title=" Future Projects" projects={futureProjects} />
      </div>
    </section>
  )
}
