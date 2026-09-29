"use client";
import { motion } from "framer-motion";

const certs = [
  { name: "HTB Certified Junior Cybersecurity Associate", org: "Hack The Box" },
  { name: "AI Security and Governance", org: "Certified" },
  { name: "Introduction to Cybersecurity", org: "Cisco" },
  { name: "Networking Basics", org: "Cisco" },
  { name: "Ethical Hacker", org: "Cisco" },
  { name: "CCNA", org: "Cisco" },
];

export default function Certs() {
  return (
    <section id="certs" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 05 — CREDENTIALS
      </motion.h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-[#02101f] border border-[#005a8a] p-5 hover:border-[#00aaff] transition group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-[#00aaff] rotate-45 group-hover:rotate-135 transition-transform duration-500" />
              <span className="text-xs text-[#00aaff] tracking-widest">
                VERIFIED
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1 leading-snug">
              {c.name}
            </h3>
            <p className="text-xs text-[#005a8a] tracking-wider">{c.org}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}