import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/team-data";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const cover = project.images?.[0];
  const isEven = index % 2 === 0;

  return (
    <article className="group py-8 first:pt-0 last:pb-0 border-b border-border/80 last:border-b-0">
      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Project Image Frame (Clean Bezel, No tacky floating pills) */}
        {cover && (
          <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <Link
              href={`/projects/${project.slug}`}
              className="block relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg"
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-xl" />
            </Link>
          </div>
        )}

        {/* Project Details (Editorial Narrative Layout) */}
        <div
          className={`space-y-4 ${
            cover
              ? `lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`
              : "lg:col-span-12"
          }`}
        >
          {/* Category & Status Header */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            {project.status && (
              <>
                <span className="text-muted-foreground/60">•</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-foreground">
                  <CheckCircle2 className="size-3 text-primary" />
                  <span>{project.status}</span>
                </span>
              </>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </h3>

          {/* Summary in 1st Person Plural */}
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          {/* Key Objectives / Highlights in 1st Person Plural */}
          {project.objectives && project.objectives.length > 0 && (
            <ul className="space-y-1.5 text-sm text-muted-foreground pt-1">
              {project.objectives.slice(0, 3).map((obj) => (
                <li key={obj} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies Chips */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary/70 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline underline-offset-4"
            >
              <span>Proje Detaylarını İnceleyin</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {project.links && project.links.length > 0 && (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{project.links[0].label}</span>
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border p-8 text-center">
        <p className="text-muted-foreground">
          Henüz yayınlanmış bir proje bulunmuyor. Yeni çalışmalarımız hazır olduğunda burada yer alacaktır.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {projects.map((project, index) => (
        <ProjectItem key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}


