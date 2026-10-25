import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLink, PageHeader } from "@/components/PageHeader";
import { PROJECTS, getProjectBySlug } from "@/data/team-data";

/**
 * With Cache Components enabled, generateStaticParams must return at least one
 * param. Until real projects exist, a placeholder slug is returned and resolved
 * to a 404 via notFound().
 */
const PLACEHOLDER_SLUG = "__placeholder__";

export function generateStaticParams() {
  if (PROJECTS.length === 0) return [{ slug: PLACEHOLDER_SLUG }];
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  props: ProjectPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proje bulunamadı" };
  return { title: project.name, description: project.summary };
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectDetailPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="page-container py-16 sm:py-20">
      <div className="mb-8">
        <ArrowLink href="/projects">Tüm Projelerimiz</ArrowLink>
      </div>

      <PageHeader title={project.name} description={project.summary} />

      {(project.category || project.status) && (
        <dl className="mb-12 flex flex-wrap gap-x-10 gap-y-4 text-sm border-b border-border pb-6">
          {project.category && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Kategori</dt>
              <dd className="mt-1 text-base font-semibold text-foreground">{project.category}</dd>
            </div>
          )}
          {project.status && (
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Durum</dt>
              <dd className="mt-1 text-base font-semibold text-primary">{project.status}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="max-w-3xl space-y-12">
        {project.overview && (
          <DetailSection title="Projemiz Hakkında">
            <p className="text-base leading-relaxed text-muted-foreground">{project.overview}</p>
          </DetailSection>
        )}

        {project.objectives && project.objectives.length > 0 && (
          <DetailSection title="Neler Yaptık ve Hedeflerimiz">
            <ul className="list-disc space-y-2.5 pl-5 text-base text-muted-foreground">
              {project.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </DetailSection>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <DetailSection title="Kullandığımız Teknolojiler">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary/80 px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </DetailSection>
        )}

        {project.images && project.images.length > 0 && (
          <DetailSection title="Proje Görsellerimiz">
            <div className="grid gap-6 sm:grid-cols-2">
              {project.images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {project.links && project.links.length > 0 && (
          <DetailSection title="Açık Kaynak ve İlgili Bağlantılar">
            <ul className="space-y-2.5">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </DetailSection>
        )}
      </div>
    </article>
  );
}
