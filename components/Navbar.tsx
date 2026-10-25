import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/data/team-data";
import { NavMenu, NavMenuFallback } from "@/components/NavMenu";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all">
      <div className="page-container flex h-16 sm:h-20 items-center justify-between">
        {/* Brand Logo with Profile Picture */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden border border-primary/30 shadow-md shadow-primary/10 group-hover:scale-105 transition-transform bg-muted">
            <Image
              src={TEAM.logo}
              alt={TEAM.name}
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-wider text-foreground group-hover:text-primary transition-colors">
              {TEAM.shortName.toUpperCase()}
            </span>
            <span className="text-[10px] tracking-wider text-primary uppercase -mt-0.5 font-semibold">
              {TEAM.school}
            </span>
          </div>
        </Link>

        {/* Dynamic Nav Menu and Theme Toggle */}
        <div className="flex items-center gap-3">
          <Suspense fallback={<NavMenuFallback />}>
            <NavMenu />
          </Suspense>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
