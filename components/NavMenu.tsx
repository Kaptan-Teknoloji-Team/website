"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { JOIN_LINK, NAV_LINKS } from "@/data/team-data";
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
              "rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        );
      })}
      <Button asChild size="sm" className="ml-3">
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
            <Button variant="ghost" size="icon" aria-label="Menüyü aç">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72" aria-describedby={undefined}>
            <SheetHeader>
              <SheetTitle>Menü</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobil menü" className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActivePath(currentPath, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button asChild className="mt-6 w-full">
              <Link
                href={JOIN_LINK.href}
                onClick={() => setOpen(false)}
                target={JOIN_LINK.href.startsWith("http") ? "_blank" : undefined}
                rel={JOIN_LINK.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {JOIN_LINK.label}
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
