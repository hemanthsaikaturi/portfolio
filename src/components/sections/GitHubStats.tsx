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
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  company: string;
  blog: string;
  location: string;
  organizations: { login: string; avatar_url: string; description: string }[];
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
      className="brutalist-card bg-card p-6 flex flex-col items-start gap-4"
    >
      <div className="accent-box p-2">
        {icon}
      </div>
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
      className="relative py-24 bg-transparent border-y-2 border-border overflow-hidden"
    >
      {/* Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0" 
        style={{ backgroundImage: "url('/grid.svg')", backgroundSize: "40px 40px" }}
      />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
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

        {/* Profile + Stats Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* GitHub profile card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 brutalist-card bg-card p-8 flex flex-col items-center md:items-start text-center md:text-left h-full"
          >
            {/* Avatar */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 border-4 border-border overflow-hidden rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] mb-6">
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

            <div className="w-full">
              <p className="font-display font-extrabold text-3xl leading-tight truncate">
                {loading ? "—" : (stats?.name ?? "hemanth")}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1">
                <Link
                  href={`https://github.com/${stats?.login ?? "hemanthsaikaturi"}`}
                  target="_blank"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {stats?.login ?? "hemanthsaikaturi"}
                </Link>
                <span className="hidden md:inline text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">he/him</span>
              </div>
              
              <div className="mt-4 flex items-center justify-center md:justify-start gap-4 text-sm font-medium">
                <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                  <Users className="w-4 h-4" />
                  <span className="font-bold">{stats?.followers ?? 0}</span> <span className="text-muted-foreground font-normal">followers</span>
                </div>
                <div className="text-muted-foreground">·</div>
                <div className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                  <span className="font-bold">{stats?.following ?? 0}</span> <span className="text-muted-foreground font-normal">following</span>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm font-mono w-full">
                {stats?.company && (
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="w-5 flex justify-center text-base">🏢</span>
                    <span className="truncate">{stats.company}</span>
                  </div>
                )}
                {stats?.location && (
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="w-5 flex justify-center text-base">📍</span>
                    <span className="truncate">{stats.location}</span>
                  </div>
                )}
                {stats?.blog && (
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="w-5 flex justify-center text-base">🔗</span>
                    <Link href={`https://${stats.blog.replace(/^https?:\/\//, '')}`} target="_blank" className="truncate hover:text-primary transition-colors underline decoration-border underline-offset-2">
                      {stats.blog.replace(/^https?:\/\//, '')}
                    </Link>
                  </div>
                )}
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="w-5 flex justify-center font-bold text-xs bg-foreground text-background rounded-sm h-4">iD</span>
                  <Link href="https://orcid.org/0009-0005-7702-6174" target="_blank" className="truncate hover:text-primary transition-colors underline decoration-border underline-offset-2">
                    0009-0005-7702-6174
                  </Link>
                </div>
              </div>

              <div className="mt-6 flex justify-center md:justify-start">
                <span className="inline-block accent-box font-mono text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  GITHUB PRO
                </span>
              </div>

              {/* Organizations */}
              {!loading && stats?.organizations && stats.organizations.length > 0 && (
                <div className="mt-8 w-full border-t-2 border-border/30 pt-6">
                  <h4 className="font-display font-bold text-lg mb-4 text-center md:text-left">Organizations</h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {stats.organizations.map((org) => (
                      <Link
                        key={org.login}
                        href={`https://github.com/${org.login}`}
                        target="_blank"
                        className="group relative block w-14 h-14 border-2 border-border bg-card rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] transition-all"
                        title={org.description || org.login}
                      >
                        <Image
                          src={org.avatar_url}
                          alt={org.login}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right column container */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 content-start">
            <StatCard
              icon={<BookOpen className="w-5 h-5" />}
              value={loading ? "—" : (stats?.public_repos ?? "—")}
              label="Public Repos"
              delay={0}
            />
            <StatCard
              icon={<GitCommit className="w-5 h-5" />}
              value={loading ? "—" : (stats?.totalCommits ?? "—")}
              label="Commits"
              delay={0.04}
            />
            <StatCard
              icon={<GitPullRequest className="w-5 h-5" />}
              value={loading ? "—" : (stats?.totalPRs ?? "—")}
              label="Pull Requests"
              delay={0.08}
            />
            <StatCard
              icon={<GitFork className="w-5 h-5" />}
              value={loading ? "—" : (stats?.totalForks ?? "—")}
              label="Total Forks"
              delay={0.12}
            />
            <StatCard
              icon={<Users className="w-5 h-5" />}
              value={loading ? "—" : (stats?.followers ?? "—")}
              label="Followers"
              delay={0.16}
            />
            <StatCard
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
              value={loading ? "—" : (stats?.totalStars ?? "—")}
              label="Stars Earned"
              delay={0.2}
            />
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
              fontSize={10}
              blockSize={11}
              blockMargin={3}
              style={{ fontFamily: "var(--font-mono)" }}
            />
          )}
        </motion.div>
      </div>
    </div>
  </div>
</section>
  );
}
