"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Dot = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  pulse: number;
  color: string;
};

export default function ThreatMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = canvas.offsetWidth * 2);
    let H = (canvas.height = canvas.offsetHeight * 2);

    const HOME = { x: 0.68, y: 0.62 };

    const ORIGINS = [
      { x: 0.22, y: 0.35 },
      { x: 0.47, y: 0.28 },
      { x: 0.52, y: 0.3 },
      { x: 0.6, y: 0.25 },
      { x: 0.85, y: 0.4 },
      { x: 0.88, y: 0.78 },
      { x: 0.32, y: 0.72 },
      { x: 0.6, y: 0.5 },
      { x: 0.5, y: 0.6 },
      { x: 0.2, y: 0.3 },
    ];

    const dots: Dot[] = ORIGINS.map((o) => ({
      x: o.x * W,
      y: o.y * H,
      baseX: o.x * W,
      baseY: o.y * H,
      pulse: Math.random() * Math.PI * 2,
      color: "#00aaff",
    }));

    type Beam = { from: Dot; progress: number; speed: number };
    const beams: Beam[] = [];

    const spawnBeam = () => {
      const from = dots[Math.floor(Math.random() * dots.length)];
      beams.push({ from, progress: 0, speed: 0.01 + Math.random() * 0.02 });
    };

    const beamInterval = setInterval(spawnBeam, 700);

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0, 170, 255, 0.08)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    };

    const drawHome = (t: number) => {
      const hx = HOME.x * W;
      const hy = HOME.y * H;

      for (let i = 0; i < 3; i++) {
        const r = ((t / 30 + i * 40) % 120) + 10;
        const alpha = 1 - r / 130;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 170, 255, ${alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.arc(hx, hy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.fillStyle = "#00aaff";
      ctx.shadowColor = "#00aaff";
      ctx.shadowBlur = 20;
      ctx.arc(hx, hy, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#00aaff";
      ctx.font = "bold 22px monospace";
      ctx.fillText("COLOMBO, LK", hx + 14, hy + 6);
    };

    const drawDots = (t: number) => {
      dots.forEach((d) => {
        d.x = d.baseX + Math.sin(t / 900 + d.pulse) * 4;
        d.y = d.baseY + Math.cos(t / 900 + d.pulse) * 4;

        const p = (Math.sin(t / 400 + d.pulse) + 1) / 2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 170, 255, ${0.4 + p * 0.6})`;
        ctx.shadowColor = "#00aaff";
        ctx.shadowBlur = 10 + p * 10;
        ctx.arc(d.x, d.y, 3 + p * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawBeams = () => {
      const hx = HOME.x * W;
      const hy = HOME.y * H;

      for (let i = beams.length - 1; i >= 0; i--) {
        const b = beams[i];
        b.progress += b.speed;

        const sx = b.from.x;
        const sy = b.from.y;
        const cx = sx + (hx - sx) * b.progress;
        const cy = sy + (hy - sy) * b.progress;

        const grad = ctx.createLinearGradient(sx, sy, cx, cy);
        grad.addColorStop(0, "rgba(0,170,255,0)");
        grad.addColorStop(1, "rgba(0,170,255,0.9)");

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(sx, sy);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#00aaff";
        ctx.shadowColor = "#00aaff";
        ctx.shadowBlur = 15;
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (b.progress >= 1) beams.splice(i, 1);
      }
    };

    let raf = 0;
    const animate = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      drawDots(t);
      drawBeams();
      drawHome(t);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const handleResize = () => {
      W = canvas.width = canvas.offsetWidth * 2;
      H = canvas.height = canvas.offsetHeight * 2;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(beamInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="threatmap" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-4 tracking-widest"
      >
        / 03 — LIVE THREAT MAP
      </motion.h2>
      <p className="text-[#005a8a] text-xs mb-8 tracking-widest">
        SIMULATED — INBOUND RECON TRAFFIC DETECTED FROM GLOBAL NODES
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border border-[#005a8a] bg-black/50 overflow-hidden"
        style={{ height: "min(60vh, 520px)" }}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute top-3 left-3 text-xs text-[#00aaff] tracking-widest flex items-center gap-2">
          <span className="pulse-dot" />
          MONITORING LIVE
        </div>
        <div className="absolute bottom-3 right-3 text-xs text-[#005a8a] tracking-widest">
          NODE: LK-CMB-01
        </div>
      </motion.div>
    </section>
  );
}