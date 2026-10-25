import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function PageHeader({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <header className="relative max-w-3xl space-y-4 pb-8 sm:pb-12">
      {/* Subtle atmospheric aura behind page header */}
      <div className="pointer-events-none absolute -top-8 -left-8 -z-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl animate-glow" />
      {badge ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary backdrop-blur-md shadow-sm animate-fade-in">
          <Sparkles className="size-3.5 text-primary animate-pulse" />
          <span>{badge}</span>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md shadow-sm animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>KTT • Yahya Kaptan Anadolu Lisesi</span>
        </div>
      )}
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight animate-fade-in-delay-1">
        {title}
      </h1>
      {description && (
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-delay-2">
          {description}
        </p>
      )}
      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-sky-400 opacity-80 animate-fade-in-delay-3" />
    </header>
  );
}

export function ArrowLink({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      className="group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
