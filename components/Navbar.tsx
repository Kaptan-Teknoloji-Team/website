"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/data/team-data";
import { NavMenu, NavMenuFallback } from "@/components/NavMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "top-2.5 sm:top-4 mx-auto w-[94%] max-w-5xl rounded-2xl border border-border/80 bg-card/90 dark:bg-card/85 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/50"
          : "top-0 mx-auto w-full border-b border-border/60 bg-background/80 dark:bg-background/80 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled
            ? "h-14 sm:h-16 px-3.5 sm:px-6"
            : "h-16 sm:h-20 page-container"
        )}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0"
        >
          <div
            className={cn(
              "relative rounded-xl overflow-hidden border border-primary/30 shadow-md shadow-primary/10 group-hover:scale-105 transition-all bg-muted shrink-0",
              isScrolled ? "size-8 sm:size-9" : "size-9 sm:size-10"
            )}
          >
            <Image
              src={TEAM.logo}
              alt={TEAM.name}
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span
              className={cn(
                "font-extrabold tracking-wider text-foreground group-hover:text-primary transition-colors truncate",
                isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"
              )}
            >
              {TEAM.shortName.toUpperCase()}
            </span>
            <span className="text-[10px] tracking-wider text-primary uppercase font-semibold truncate hidden sm:block">
              {TEAM.school}
            </span>
          </div>
        </Link>

        {/* Dynamic Nav Menu and Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Suspense fallback={<NavMenuFallback />}>
            <NavMenu />
          </Suspense>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

