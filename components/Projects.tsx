"use client";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "SEC-001",
    title: "Student Registration System",
    stack: "C# / .NET Framework • SQL Database • Visual Studio",
    desc: "Full-stack academic registration system with authentication, SQL-backed persistence, and CRUD operations for student records.",
    status: "COMPLETED",
  },
  {
    tag: "SEC-002",
    title: "Hack The Box Academy Labs",
    stack: "HTB • Linux • Web Exploitation",
    desc: "Pursuing the Junior Cybersecurity Analyst path with hands-on labs covering enumeration, exploitation, and defense.",
    status: "IN PROGRESS",
  },
  {
    tag: "SEC-003",
    title: "Cisco Networking Labs",
    stack: "Packet Tracer • TCP/IP • VLANs • Routing",
    desc: "Network configuration and troubleshooting — IP addressing, VLAN segmentation, and routing fundamentals.",
    status: "COMPLETED",
  },
  {
    tag: "SEC-004",
    title: "Cybersecurity Practical Labs",
    stack: "Kali • Nmap • Wireshark",
    desc: "Hands-on reconnaissance, traffic analysis, and basic security assessment in isolated lab environments.",
    status: "ONGOING",
  },
  {
    tag: "SEC-005",
    title: "CTF Challenges",
    stack: "Various • Beginner/Intermediate",
    desc: "Solving beginner-level CTFs to build practical skills in enumeration, exploitation, and forensics.",
    status: "ONGOING",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 04 — OPERATIONS DOSSIER
      </motion.h2>

      <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.tag}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative bg-[#02101f] border border-[#005a8a] p-6 hover:border-[#00aaff] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-[#00aaff] tracking-widest">
                {p.tag}
              </span>
              <span className="text-xs text-[#00ff9c] border border-[#00ff9c]/40 px-2 py-0.5">
                {p.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
              {p.title}
            </h3>
            <p className="text-xs text-[#005a8a] mb-3 tracking-wider">
              {p.stack}
            </p>
            <p className="text-sm text-[#e6f0ff]/80 leading-relaxed">
              {p.desc}
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#00aaff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}