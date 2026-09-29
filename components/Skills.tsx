"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Network Security & TCP/IP", level: 80 },
  { name: "Linux & Kali Linux", level: 78 },
  { name: "Network Scanning & Recon (Nmap)", level: 82 },
  { name: "Security Monitoring (Wireshark)", level: 75 },
  { name: "Python Scripting", level: 70 },
];

const tools = [
  "Kali Linux",
  "Nmap",
  "Wireshark",
  "Burp Suite",
  "Packet Tracer",
  "Python",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 02 — SKILL MATRIX
      </motion.h2>

      <div className="space-y-6 max-w-3xl">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#e6f0ff]">{s.name}</span>
              <span className="text-[#00aaff]">{s.level}%</span>
            </div>
            <div className="h-2 bg-[#02101f] border border-[#005a8a] relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1 }}
                className="h-full bg-linear-to-r from-[#005a8a] to-[#00aaff]"
                style={{ boxShadow: "0 0 10px rgba(0,170,255,.6)" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <p className="text-[#00aaff] text-sm mb-4 tracking-widest">
          / ARSENAL — TOOLS OF THE TRADE
        </p>
        <div className="flex flex-wrap gap-3">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 border border-[#005a8a] text-sm text-[#e6f0ff] hover:border-[#00aaff] hover:text-[#00aaff] transition cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}