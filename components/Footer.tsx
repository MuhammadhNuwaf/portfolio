"use client";
import Socials, { extraProfiles } from "./Socials";
import VisitorCounter from "./VisitorCounter";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

const resources = [
  {
    href: "https://github.com/MuhammadhNuwaf",
    label: "GitHub Profile",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/muhammadh-nuwaf-676252349",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://profile.hackthebox.com/nuwaf01",
    label: "Hack The Box",
    external: true,
  },
  { href: "#writeups", label: "Writeups" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#005a8a] bg-black/60 mt-20">
      {/* Top grid */}
      <div className="px-5 md:px-[8vw] py-12 md:py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div
            className="font-(family-name:--font-orbitron) text-2xl md:text-3xl font-black text-[#00aaff] mb-3 tracking-widest"
            style={{ textShadow: "0 0 12px rgba(0,170,255,.5)" }}
          >
            M.R.M.NUWAF
          </div>
          <p className="text-sm text-[#e6f0ff]/70 max-w-md leading-relaxed mb-5">
            Cybersecurity Student and aspiring security professional based in
            Colombo, Sri Lanka. Focused on network security, reconnaissance,
            and threat analysis.
          </p>
          <Socials size="sm" />
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs text-[#00aaff] tracking-widest mb-4">
            / NAVIGATE
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[#e6f0ff]/70 hover:text-[#00aaff] transition flex items-center gap-2"
                >
                  <span className="text-[#005a8a]">›</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs text-[#00aaff] tracking-widest mb-4">
            / RESOURCES
          </h4>
          <ul className="space-y-2">
            {resources.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="text-sm text-[#e6f0ff]/70 hover:text-[#00aaff] transition flex items-center gap-2"
                >
                  <span className="text-[#005a8a]">›</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {extraProfiles.length > 0 && (
            <div className="mt-6 pt-4 border-t border-[#005a8a]/40">
              <h4 className="text-xs text-[#00aaff] tracking-widest mb-3">
                / PROFILE
              </h4>
              {extraProfiles.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#e6f0ff]/70 hover:text-[#00aaff] transition flex items-center gap-2"
                >
                  <span className="text-[#005a8a]">›</span>
                  {p.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#005a8a] px-5 md:px-[8vw] py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#005a8a] tracking-widest text-center md:text-left">
          © {year} M.R. MUHAMMADH NUWAF — ALL RIGHTS RESERVED
        </p>

        <VisitorCounter />

        <p className="text-xs text-[#005a8a] tracking-widest flex items-center gap-2">
          <span className="pulse-dot" /> SYSTEM: ONLINE
        </p>
      </div>
    </footer>
  );
}