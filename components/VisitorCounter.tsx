"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Free counters: CountAPI.xyz (no signup required)
    // Note: CountAPI has been unreliable — fallback uses a stable API.
    const fetchCount = async () => {
      try {
        // Try countapi.xyz first
        const res = await fetch(
          "https://api.countapi.xyz/hit/nuwaf-portfolio-2026/visits"
        );
        if (!res.ok) throw new Error("countapi failed");
        const data = await res.json();
        setCount(data.value);
      } catch {
        try {
          // Fallback: use a different free service
          const res2 = await fetch(
            "https://api.counterapi.dev/v1/nuwaf-portfolio/visits/up"
          );
          const data2 = await res2.json();
          setCount(data2.count ?? 1);
        } catch {
          setError(true);
        }
      }
    };
    fetchCount();
  }, []);

  if (error || count === null) return null;

  return (
    <div className="text-xs tracking-widest text-[#005a8a] flex items-center gap-2">
      <span className="text-[#00aaff]">▮</span>
      VISITOR #{String(count).padStart(6, "0")}
    </div>
  );
}