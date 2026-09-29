"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#threatmap", label: "threatmap" },
  { href: "#projects", label: "projects" },
  { href: "#certs", label: "certs" },
  { href: "#education", label: "education" },
  { href: "#github", label: "github" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.8, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-100 bg-black/85 border-b border-[#005a8a] backdrop-blur-md"
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-3.5 text-xs tracking-widest">
        <a
          href="#home"
          className="text-[#00aaff] font-bold"
          style={{ textShadow: "0 0 8px rgba(0,170,255,.6)" }}
        >
          [ M.R.M.NUWAF ]
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-5 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#e6f0ff] hover:text-[#00aaff] transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="text-[#00ff9c] flex items-center gap-2">
            <span className="pulse-dot" />
            ONLINE
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00aaff] text-2xl leading-none px-2"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-[#005a8a] bg-black/95"
          >
            <ul className="flex flex-col py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-[#e6f0ff] hover:text-[#00aaff] hover:bg-[#02101f] transition tracking-widest"
                  >
                    <span className="text-[#00aaff] mr-2">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}