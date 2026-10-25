"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { JOIN_LINK, NAV_LINKS, TEAM } from "@/data/team-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopLinks({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Ana menü" className="hidden items-center gap-1 md:flex">
      {NAV_LINKS.map((link) => {
        const active = isActivePath(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-lg px-2.5 py-1.5 text-xs lg:text-sm lg:px-3 lg:py-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium",
              active
                ? "bg-secondary text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            )}
          >
            {link.label}
          </Link>
        );
      })}
      <Button asChild size="sm" className="ml-1.5 lg:ml-2.5 px-3 text-xs lg:text-sm font-bold shadow-xs">
        <Link
          href={JOIN_LINK.href}
          target={JOIN_LINK.href.startsWith("http") ? "_blank" : undefined}
          rel={JOIN_LINK.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {JOIN_LINK.label}
        </Link>
      </Button>
    </nav>
  );
}

/** Rendered while the pathname is unavailable during prerendering. */
export function NavMenuFallback() {
  return <DesktopLinks pathname={null} />;
}

export function NavMenu() {
  const pathname = usePathname();
  const isMounted = useMounted();
  const currentPath = isMounted ? pathname : null;
  const [open, setOpen] = useState(false);

  return (
    <>
      <DesktopLinks pathname={currentPath} />

      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menüyü aç"
              className="size-9 rounded-lg border border-border/80 bg-card/60"
            >
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-6 flex flex-col justify-between" aria-describedby={undefined}>
            <div className="space-y-6">
              <SheetHeader className="text-left border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-xl overflow-hidden border border-primary/30 bg-muted shrink-0">
                    <Image
                      src={TEAM.logo}
                      alt={TEAM.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <SheetTitle className="text-base font-extrabold text-foreground tracking-wide">
                      {TEAM.shortName.toUpperCase()}
                    </SheetTitle>
                    <p className="text-xs text-primary font-medium">{TEAM.school}</p>
                  </div>
                </div>
              </SheetHeader>

              <nav aria-label="Mobil menü" className="flex flex-col gap-1.5 pt-2">
                {NAV_LINKS.map((link) => {
                  const active = isActivePath(currentPath, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-3.5 py-2.5 text-base font-medium transition-colors flex items-center justify-between",
                        active
                          ? "bg-primary/10 text-primary font-bold border border-primary/20"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <span>{link.label}</span>
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-border space-y-3">
              <Button asChild size="lg" className="w-full font-bold shadow-md shadow-primary/20">
                <Link
                  href={JOIN_LINK.href}
                  onClick={() => setOpen(false)}
                  target={JOIN_LINK.href.startsWith("http") ? "_blank" : undefined}
                  rel={JOIN_LINK.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {JOIN_LINK.label}
                </Link>
              </Button>
              <p className="text-[11px] text-center text-muted-foreground">
                Yahya Kaptan Anadolu Lisesi • KTT
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
