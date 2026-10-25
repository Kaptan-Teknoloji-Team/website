import Link from "next/link";
import { JOIN_LINK, NAV_LINKS, SOCIAL_LINKS, TEAM } from "@/data/team-data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page-container flex flex-col gap-6 py-10 text-sm sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-foreground">{TEAM.name}</p>
          <p className="text-xs text-muted-foreground">
            {TEAM.school} • {TEAM.location}
          </p>
        </div>

        <nav aria-label="Alt menü">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground">
            {[...NAV_LINKS.slice(1), JOIN_LINK].map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
