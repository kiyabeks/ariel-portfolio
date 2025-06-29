"use client"
import { User, Code, Shield, Target } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: "Learning to Defend",
      description: "Building my skills in securing systems and staying a step ahead of the digital threats.",
    },
    {
      icon: Code,
      title: "Ethical Hacking Explorer",
      description: "Diving into CTFs, exploits, and hands-on labs to break stuff (legally) and learn from it.",
    },
    {
      icon: Target,
      title: "Spotting Weak Spots",
      description: "Practicing how to find, understand, and patch up vulnerabilities before anyone else does.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-8 w-8 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Cybersecurity Student-in-Training</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              Yo wsg, I’m Ariel Banania Jr. — a cybersecurity student currently grinding through the ropes of digital defense. I'm all about learning how systems break, how attackers think, and how to stop 'em dead in their tracks.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Right now, I'm focused on sharpening my skills in ethical hacking, network security, and incident response through hands-on labs, CTFs, and real-world projects. I'm not a pro yet, but I’m learning fast and loving the process.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["CTF Rookie", "Packet Sniffer-in-Training", "Bug Hunter Wannabe", "Exploit Dabbler"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
