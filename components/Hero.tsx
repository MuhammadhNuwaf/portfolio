"use client";
import { motion } from "framer-motion";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-5 md:px-[8vw] pt-30 pb-16 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="inline-block self-start text-xs text-[#00aaff] border border-[#005a8a] px-3 py-1 mb-6 tracking-widest"
      >
        ● SYSTEM ONLINE — CYBER SECURITY OPERATOR
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="font-(family-name:--font-orbitron) font-black tracking-tight leading-[1.05] text-white mb-4"
        style={{ fontSize: "clamp(32px, 6vw, 72px)" }}
      >
        <span className="glitch" data-text="M.R. MUHAMMADH">
          M.R. MUHAMMADH
        </span>
        <br />
        <span className="glitch" data-text="NUWAF">
          NUWAF
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.6 }}
        className="text-base md:text-lg text-[#e6f0ff]/80 max-w-2xl mb-8 leading-relaxed"
      >
        <span className="text-[#00aaff]">{">"}</span> Cybersecurity Student
        <br />
        <span className="text-[#00aaff]">{">"}</span> Network Security • Recon •
        Threat Analysis
        <br />
        <span className="text-[#00aaff]">{">"}</span> Colombo, Sri Lanka 🇱🇰
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.7, duration: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="px-5 md:px-6 py-3 border border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-black transition-all duration-300 tracking-widest text-xs md:text-sm"
        >
          [ VIEW DOSSIER ]
        </a>
        <a
          href="#contact"
          className="px-5 md:px-6 py-3 border border-[#005a8a] text-[#e6f0ff] hover:border-[#00aaff] transition-all duration-300 tracking-widest text-xs md:text-sm"
        >
          [ ESTABLISH CONTACT ]
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.9, duration: 0.6 }}
        className="mt-8"
      >
        <Socials size="sm" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        className="absolute bottom-8 left-5 md:left-[8vw] text-xs text-[#005a8a] tracking-widest"
      >
        <span className="cursor">SCROLL TO DECRYPT</span>
      </motion.div>
    </section>
  );
}