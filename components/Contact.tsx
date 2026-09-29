"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Socials from "./Socials";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-10 md:mb-12 tracking-widest"
      >
        / 09 — ESTABLISH CONTACT
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <p className="text-sm md:text-base text-[#e6f0ff]/80 leading-relaxed">
            <span className="text-[#00aaff]">{">"}</span> Open to:
          </p>
          <ul className="text-sm space-y-1.5 pl-6 text-[#e6f0ff]/80 list-disc marker:text-[#00aaff]">
            <li>Internships in cybersecurity / SOC / red team</li>
            <li>CTF teams &amp; study groups</li>
            <li>Collaborations on security tooling</li>
            <li>Mentorship &amp; networking</li>
          </ul>

          <div className="pt-2 space-y-3 text-sm">
            <a
              href="mailto:nuwafofficial@gmail.com"
              className="flex items-center gap-3 text-[#e6f0ff] hover:text-[#00aaff] transition"
            >
              <span className="text-[#00aaff]">›</span> nuwafofficial@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadh-nuwaf-676252349"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#e6f0ff] hover:text-[#00aaff] transition"
            >
              <span className="text-[#00aaff]">›</span>{" "}
              linkedin.com/in/muhammadh-nuwaf
            </a>
            <a
              href="https://github.com/MuhammadhNuwaf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#e6f0ff] hover:text-[#00aaff] transition"
            >
              <span className="text-[#00aaff]">›</span> github.com/MuhammadhNuwaf
            </a>
            <a
              href="https://profile.hackthebox.com/nuwaf01"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#e6f0ff] hover:text-[#00aaff] transition"
            >
              <span className="text-[#00aaff]">›</span> HTB: nuwaf01
            </a>
          </div>

          <div className="pt-4">
            <p className="text-xs text-[#005a8a] tracking-widest mb-3">
              / CONNECT
            </p>
            <Socials />
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#02101f] border border-[#005a8a] p-5 md:p-6 space-y-4"
        >
          <div>
            <label className="text-xs text-[#00aaff] tracking-widest block mb-2">
              OPERATOR ALIAS
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full bg-black border border-[#005a8a] px-3 py-2 text-sm text-[#e6f0ff] focus:border-[#00aaff] outline-none transition"
              placeholder="your name"
            />
          </div>
          <div>
            <label className="text-xs text-[#00aaff] tracking-widest block mb-2">
              CHANNEL (EMAIL)
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-black border border-[#005a8a] px-3 py-2 text-sm text-[#e6f0ff] focus:border-[#00aaff] outline-none transition"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="text-xs text-[#00aaff] tracking-widest block mb-2">
              TRANSMISSION
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-black border border-[#005a8a] px-3 py-2 text-sm text-[#e6f0ff] focus:border-[#00aaff] outline-none transition resize-none"
              placeholder="encrypted message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full border border-[#00aaff] text-[#00aaff] py-3 text-sm tracking-widest hover:bg-[#00aaff] hover:text-black transition disabled:opacity-50"
          >
            {status === "sending"
              ? "[ TRANSMITTING... ]"
              : status === "sent"
              ? "[ ✓ MESSAGE SENT ]"
              : status === "error"
              ? "[ ✗ TRANSMISSION FAILED ]"
              : "[ TRANSMIT SECURE MESSAGE ]"}
          </button>

          {status === "sent" && (
            <p className="text-xs text-[#00ff9c] text-center tracking-widest">
              MESSAGE RECEIVED — I&apos;LL RESPOND SOON
            </p>
          )}
          {status === "error" && (
            <p className="text-xs text-[#00aaff] text-center tracking-widest">
              FAILED — EMAIL ME DIRECTLY: nuwafofficial@gmail.com
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}