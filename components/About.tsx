"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 01 — OPERATOR PROFILE
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#02101f] border border-[#005a8a] p-6 md:p-8 max-w-4xl relative"
      >
        <div className="absolute top-0 right-0 bg-[#00aaff] text-black text-xs px-3 py-1 tracking-widest font-bold">
          [CLASSIFIED]
        </div>

        <div className="space-y-3 text-sm md:text-base leading-relaxed mt-4">
          <p>
            <span className="text-[#00aaff]">user@nuwaf:~$</span> whoami
          </p>
          <p className="pl-4">
            I’m Muhammadh Nuwaf, a cybersecurity student driven by curiosity, problem-solving, and the challenge of understanding how systems can be broken and secured. My focus spans penetration testing, offensive security, network security, digital forensics, SOC, and cloud security, with a long-term goal of becoming a penetration tester. Currently pursuing my HND in Cyber Security and CCNA, I learn by doing: discovering vulnerabilities, scanning networks, analyzing traffic, solving CTFs, and building hands-on security labs. Curious by nature. Hands-on by choice. Relentless about learning. 🔐
          </p>

          <p>
            <span className="text-[#00aaff]">user@nuwaf:~$</span> cat
            mission.txt
          </p>
          <p className="pl-4">
            My mission is to turn curiosity into capability. I’m focused on mastering the art of finding, understanding, and responsibly exploiting vulnerabilities while developing the skills to build stronger defenses. Through hands-on labs, CTFs, networking, and continuous learning, I’m working toward becoming a highly capable penetration tester who doesn’t just understand how attacks work, but understands the systems behind them. Learn deeply. Think differently. Break responsibly. Build securely. 🔐
          </p>

          <p>
            <span className="text-[#00aaff]">user@nuwaf:~$</span> ls interests/
          </p>
          <p className="pl-4 text-[#00ff9c]">
            01  penetration-testing/<br />
            02  offensive-security/<br />
            03  network-security/<br />
            04  vulnerability-research/<br />
            05  digital-forensics/<br />
            06  security-operations/<br />
            07  cloud-security/<br /> 
              08  ethical-hacking/<br />
              09  cybersecurity-research/<br />
              10  capture-the-flag/<br />
              11  security-labs/<br />
              12  threat-analysis/
          </p>
        </div>
      </motion.div>
    </section>
  );
}