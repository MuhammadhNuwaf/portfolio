"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

export default function GithubFeed() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<{
    public_repos: number;
    followers: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [u, r] = await Promise.all([
          fetch("https://api.github.com/users/MuhammadhNuwaf").then((x) =>
            x.json()
          ),
          fetch(
            "https://api.github.com/users/MuhammadhNuwaf/repos?sort=updated&per_page=6"
          ).then((x) => x.json()),
        ]);
        setUser(u);
        setRepos(Array.isArray(r) ? r : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section id="github" className="py-20 md:py-24 px-5 md:px-[8vw]">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-orbitron) text-2xl md:text-4xl text-[#00aaff] mb-4 tracking-widest"
      >
        / 08 — GITHUB LIVE FEED
      </motion.h2>
      <p className="text-[#005a8a] text-xs mb-8 tracking-widest">
        PULLING FROM @MuhammadhNuwaf
      </p>

      {user && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-3xl">
          <Stat label="PUBLIC REPOS" value={user.public_repos} />
          <Stat label="FOLLOWERS" value={user.followers} />
          <Stat label="STATUS" value="ACTIVE" />
          <Stat label="ROLE" value="STUDENT" />
        </div>
      )}

      {loading ? (
        <div className="text-[#00aaff] text-sm">
          <span className="cursor">FETCHING REPOSITORIES</span>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((r, i) => (
            <motion.a
              key={r.id}
              href={r.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="block bg-[#02101f] border border-[#005a8a] p-5 hover:border-[#00aaff] transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#00aaff] transition break-all">
                  {r.name}
                </h3>
                <span className="text-xs text-[#00aaff]">↗</span>
              </div>
              <p className="text-xs text-[#e6f0ff]/70 mb-3 line-clamp-2 min-h-8">
                {r.description || "No description provided."}
              </p>
              <div className="flex justify-between text-xs text-[#005a8a]">
                <span>{r.language || "—"}</span>
                <span>★ {r.stargazers_count}</span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-[#02101f] border border-[#005a8a] p-4 text-center">
      <div className="text-2xl font-bold text-[#00aaff]">{value}</div>
      <div className="text-xs text-[#005a8a] tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}