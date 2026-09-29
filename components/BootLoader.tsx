"use client";
import { useEffect, useState } from "react";

const LINES = [
  "> INITIALIZING SECURE CHANNEL...",
  "> ESTABLISHING VPN TUNNEL ............. [OK]",
  "> LOADING OPERATOR PROFILE: M.R.M.NUWAF",
  "> MOUNTING /dev/kali .................. [OK]",
  "> ELEVATING PRIVILEGES ................ [OK]",
  "> LOADING ARSENAL: NMAP / BURP / WIRESHARK",
  "> TARGET ACQUIRED: COLOMBO, SRI LANKA",
  "> DECRYPTING DOSSIER .................. [OK]",
  "> ACCESS GRANTED. WELCOME, OPERATOR.",
];

export default function BootLoader() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      if (i < LINES.length) {
        setVisibleLines((p) => [...p, LINES[i]]);
        i++;
        setTimeout(tick, 220 + Math.random() * 180);
      } else {
        setTimeout(() => setDone(true), 800);
      }
    };
    tick();
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 bg-black flex items-center justify-center px-4 transition-opacity duration-700 ${
        visibleLines.length === LINES.length ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="w-full max-w-2xl font-mono text-xs sm:text-sm md:text-base text-[#00aaff]"
        style={{ textShadow: "0 0 8px rgba(0,170,255,.7)" }}
      >
        <div className="mb-4 text-[#005a8a] text-[10px] sm:text-xs tracking-widest text-center">
          ── SECURE SHELL ── v2.0.26 ──
        </div>

        {visibleLines.map((l, i) => (
          <div key={i} className="mb-1.5 leading-relaxed wrap-break-word">
            {l}
          </div>
        ))}

        <div className="cursor" />

        <div className="mt-6 h-1 bg-[#02101f] border border-[#005a8a] overflow-hidden">
          <div
            className="h-full bg-[#00aaff] transition-all duration-300"
            style={{
              width: `${(visibleLines.length / LINES.length) * 100}%`,
              boxShadow: "0 0 12px #00aaff",
            }}
          />
        </div>
        <div className="mt-2 text-[10px] sm:text-xs text-[#005a8a] text-center tracking-widest">
          {Math.round((visibleLines.length / LINES.length) * 100)}% DECRYPTED
        </div>
      </div>
    </div>
  );
}