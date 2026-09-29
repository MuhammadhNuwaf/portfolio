"use client";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Hack The Box Academy Lab Writeups",
    topic:
      "Documenting lessons learned, methodologies, commands, and solutions from completed cybersecurity labs.",
    tag: "HTB",
  },
  {
    title: "Network Reconnaissance Notes",
    topic:
      "Approaches to passive and active recon, tooling, and interpreting scan results.",
    tag: "RECON",
  },
  {
    title: "Nmap in Practice",
    topic:
      "Scan types, timing templates, NSE scripts, and safe use during assessments.",
    tag: "NMAP",
  },
  {
    title: "Wireshark Traffic Analysis",
    topic:
      "Capturing, filtering, and analyzing TCP/IP traffic for security monitoring.",
    tag: "WIRESHARK",
  },
  {
    title: "TCP/IP & Networking Fundamentals",
    topic:
      "Layers, protocols, addressing, and how packets actually move across networks.",
    tag: "TCP/IP",
  },
  {
    title: "Linux Security Notes",
    topic:
      "Hardening, permissions, users, and essential commands for defenders and attackers.",
    tag: "LINUX",
  },
  {
    title: "CTF Writeups",
    topic:
      "Walkthroughs and technical explanations for beginner-level CTF challenges.",
    tag: "CTF",
  },
];

export default function Writeups() {
  return (
    <section id="writeups" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 07 — FIELD NOTES
      </motion.h2>

      <div className="space-y-3 max-w-4xl">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group border-l-2 border-[#005a8a] hover:border-[#00aaff] pl-5 py-3 transition-all hover:pl-7 cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs text-[#00aaff] tracking-widest">
                [{p.tag}]
              </span>
              <span className="text-xs text-[#005a8a]">—</span>
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-[#00aaff] transition">
              {p.title}
            </h3>
            <p className="text-sm text-[#e6f0ff]/70 mt-1">{p.topic}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}