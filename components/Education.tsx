"use client";
import { motion } from "framer-motion";

type EducationItem = {
  status: "CURRENT" | "COMPLETED" | "PLANNED";
  title: string;
  institution: string;
  program?: string;
  mode?: string;
};

const items: EducationItem[] = [
  {
    status: "CURRENT",
    title: "BTEC Higher National Diploma (HND) in Computing",
    program: "Cyber Security",
    institution: "BCAS Campus, Kollupitiya",
    mode: "Pearson BTEC — Full-time",
  },
  {
    status: "PLANNED",
    title: "BSc (Hons) Cyber Security and Digital Forensics",
    institution: "Goldsmiths, University of London",
    mode: "Planned / Future Academic Path",
  },
  {
    status: "COMPLETED",
    title: "Diploma in Information Technology",
    institution: "Esoft Metro Campus",
    mode: "Completed",
  },
  {
    status: "COMPLETED",
    title: "Diploma in Business Administration",
    institution: "ICBT Campus",
    mode: "Completed / Previously Studied",
  },
  {
    status: "COMPLETED",
    title: "Diploma in English Language",
    institution: "Esoft Metro Campus",
    mode: "Completed",
  },
];

const statusColors: Record<EducationItem["status"], string> = {
  CURRENT: "#00ff9c",
  COMPLETED: "#00aaff",
  PLANNED: "#8a8a8a",
};

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 06 — ACADEMIC LOG
      </motion.h2>

      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-0.5 bg-[#005a8a]" />

        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title + i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-10 md:pl-14"
            >
              {/* Dot */}
              <div
                className="absolute left-1.5 md:left-2.5 top-2 w-3 h-3 rounded-full border-2"
                style={{
                  borderColor: statusColors[item.status],
                  background: "#000814",
                  boxShadow: `0 0 10px ${statusColors[item.status]}`,
                }}
              />

              <div className="bg-[#02101f] border border-[#005a8a] p-5 hover:border-[#00aaff] transition">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className="text-xs tracking-widest border px-2 py-0.5"
                    style={{
                      color: statusColors[item.status],
                      borderColor: `${statusColors[item.status]}66`,
                    }}
                  >
                    {item.status}
                  </span>
                  {item.mode && (
                    <span className="text-xs text-[#005a8a] tracking-wider">
                      {item.mode}
                    </span>
                  )}
                </div>

                <h3 className="text-base md:text-lg font-bold text-white mb-1 leading-snug">
                  {item.title}
                  {item.program && (
                    <span className="text-[#00aaff]"> — {item.program}</span>
                  )}
                </h3>
                <p className="text-sm text-[#e6f0ff]/70">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}