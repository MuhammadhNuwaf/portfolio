import type { Metadata } from "next";
import { Share_Tech_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

const orbitron = Orbitron({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "M.R. Muhammadh Nuwaf // Cyber Security Portfolio",
  description:
    "Cybersecurity Student • Network Security • Ethical Hacking • Colombo, Sri Lanka",
  keywords: [
    "Cybersecurity",
    "Nuwaf",
    "Red Team",
    "Kali Linux",
    "Network Security",
    "Sri Lanka",
  ],
  authors: [{ name: "M.R. Muhammadh Nuwaf" }],
  openGraph: {
    title: "M.R. Muhammadh Nuwaf // Cyber Security Portfolio",
    description:
      "Cybersecurity Student • Network Security • Ethical Hacking • Colombo, Sri Lanka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${orbitron.variable}`}>
      <body>
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}