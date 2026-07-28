"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { GitFork, Users, BookOpen, ExternalLink, GitCommit, GitPullRequest } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface GitHubStats {
  followers: number;
  following: number;
  public_repos: number;
  totalForks: number;
  totalCommits: number;
  totalPRs: number;
  avatar_url: string;
  name: string;
}

function StatCard({
  icon,
  value,
  label,
  delay,
}: {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="brutalist-card bg-card p-5 flex flex-col items-start gap-3"
    >
      <div className="accent-box p-2">{icon}</div>
      <div>
        <p className="font-display font-bold text-2xl leading-none">{value}</p>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/github", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) setStats(data);
      })
      .catch(() => null)
      .finally(() => setLoading(false));
  }, []);

  const calendarTheme =
    mounted && resolvedTheme === "dark"
      ? {
          dark: ["#1a1a1a", "#2d4a2d", "#3d6b3d", "#52905a", "#6abf6a"] as [
            string,
            string,
            string,
            string,
            string,
          ],
        }
      : {
          light: ["#f0efe8", "#d4f0b5", "#96d870", "#5cb85c", "#2d7a2d"] as [
            string,
            string,
            string,
            string,
            string,
          ],
        };

  return (
    <section
      id="github"
      className="py-24 bg-background border-y-2 border-border"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-muted-foreground">
            07 / GitHub Activity
          </span>
          <h2 className="section-heading text-3xl md:text-5xl font-bold mt-2">
            Code Activity
          </h2>
        </motion.div>

        {/* Profile + Stats row */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* GitHub profile card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="brutalist-card bg-card p-6 flex items-center gap-5 md:w-72 shrink-0"
          >
            {/* Avatar */}
            <div className="relative w-16 h-16 shrink-0 border-2 border-border overflow-hidden">
              {stats?.avatar_url ? (
                <Image
                  src={stats.avatar_url}
                  alt="GitHub profile picture"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-muted animate-pulse" />
              )}
            </div>

            <div className="min-w-0">
              <p className="font-display font-bold text-base leading-tight truncate">
                {loading ? "—" : (stats?.name ?? "hemanthsaikaturi")}
              </p>
              <Link
                href="https://github.com/hemanthsaikaturi"
                target="_blank"
                className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mt-1"
              >
                @hemanthsaikaturi <ExternalLink className="w-2.5 h-2.5" />
              </Link>
              <span className="inline-block mt-2 accent-box font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5">
                GitHub PRO
              </span>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 flex-1">
            <StatCard
              icon={<BookOpen className="w-4 h-4" />}
              value={loading ? "—" : (stats?.public_repos ?? "—")}
              label="Public Repos"
              delay={0}
            />
            <StatCard
              icon={<GitCommit className="w-4 h-4" />}
              value={loading ? "—" : (stats?.totalCommits ?? "—")}
              label="Commits"
              delay={0.04}
            />
            <StatCard
              icon={<GitPullRequest className="w-4 h-4" />}
              value={loading ? "—" : (stats?.totalPRs ?? "—")}
              label="Pull Requests"
              delay={0.08}
            />
            <StatCard
              icon={<GitFork className="w-4 h-4" />}
              value={loading ? "—" : (stats?.totalForks ?? "—")}
              label="Total Forks"
              delay={0.12}
            />
            <StatCard
              icon={<Users className="w-4 h-4" />}
              value={loading ? "—" : (stats?.followers ?? "—")}
              label="Followers"
              delay={0.16}
            />
          </div>
        </div>

        {/* Contribution calendar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="brutalist-card bg-card p-6 md:p-8 overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-bold text-lg">
                Contribution Graph
              </h3>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                618+ contributions in the last year
              </p>
            </div>
            <Link
              href="https://github.com/hemanthsaikaturi"
              target="_blank"
              className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              View on GitHub <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {mounted && (
            <GitHubCalendar
              username="hemanthsaikaturi"
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={calendarTheme}
              fontSize={12}
              blockSize={14}
              blockMargin={4}
              style={{ fontFamily: "var(--font-mono)" }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
