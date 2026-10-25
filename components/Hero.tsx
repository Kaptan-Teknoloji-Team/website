"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TEAM, JOIN_LINK } from "@/data/team-data";

export function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-[90vh] pt-24 pb-20 flex flex-col justify-center overflow-hidden tech-grid ambient-glow"
    >
      <div className="page-container relative z-10 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/90 backdrop-blur-md text-foreground text-xs sm:text-sm font-medium shadow-sm">
              <div className="relative h-4 w-4 rounded-full overflow-hidden border border-primary/50">
                <Image
                  src={TEAM.logo}
                  alt={TEAM.acronym}
                  fill
                  sizes="16px"
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-primary">{TEAM.school}</span>
              <span className="text-muted-foreground">•</span>
              <span>{TEAM.acronym} Kaptan Teknoloji</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15]">
              Milli İşletim Sistemi ve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-amber-500 dark:from-sky-400 dark:via-cyan-300 dark:to-orange-400">
                Açık Kaynak
              </span>{" "}
              Yazılımlarında Genç Mühendislik
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl font-normal leading-relaxed">
              {TEAM.description}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto text-base group">
                <Link
                  href={JOIN_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>{JOIN_LINK.label}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base border-border bg-card/60 hover:bg-secondary text-foreground"
              >
                <Link href="/projects">Projelerimizi İnceleyin</Link>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Açık Kaynak & Güvenlik Analizi</span>
              </div>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <div className="flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span>2026 Şanlıurfa Pardus 3.&apos;lüğü 🥉</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Prototype Card & Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative glass-card glow-hover rounded-2xl overflow-hidden border border-border p-2 shadow-2xl">
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={TEAM.heroImage}
                    alt={TEAM.headline}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="text-[11px] backdrop-blur-md">
                      2026 Şanlıurfa Finali
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/20 border border-primary/40 text-primary">
                      Türkiye 3.&apos;lüğü 🥉
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-white font-bold text-sm sm:text-base">
                      Pardus Hata Ayıklama & Öneri Yarışması
                    </p>
                    <p className="text-xs text-slate-200">
                      TÜBİTAK ULAKBİM • Hata Ayıklama Kategorisi
                    </p>
                  </div>
                </div>

                {/* Sub Features Row */}
                <div className="grid grid-cols-3 gap-2 mt-2 pt-1 text-center">
                  <div className="p-2 rounded-lg bg-card border border-border">
                    <p className="text-primary font-bold text-sm">2026</p>
                    <p className="text-[10px] text-muted-foreground">Şanlıurfa Finali</p>
                  </div>
                  <div className="p-2 rounded-lg bg-card border border-border">
                    <p className="text-primary font-bold text-sm">3.&apos;lük 🥉</p>
                    <p className="text-[10px] text-muted-foreground">Hata Ayıklama</p>
                  </div>
                  <div className="p-2 rounded-lg bg-card border border-border">
                    <p className="text-primary font-bold text-sm">Pardus</p>
                    <p className="text-[10px] text-muted-foreground">Milli OS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Counters Stats Bar - Clean Horizontal Metric Strip */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
            {TEAM.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:px-4 pt-4 sm:pt-0 first:pt-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
