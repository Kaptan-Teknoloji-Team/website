import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import { PROJECTS, TEAM } from "@/data/team-data";

export const metadata: Metadata = {
  title: "Projeler",
  description: `${TEAM.name} açık kaynak ve yazılım projeleri.`,
};

export default function ProjectsPage() {
  return (
    <div className="page-container py-16 sm:py-20 space-y-10">
      <PageHeader
        badge="Açık Kaynak & Sistem"
        title="Geliştirdiğimiz Projeler"
        description={`${TEAM.school} bünyesinde geliştirdiğimiz; milli işletim sistemimiz Pardus hata ayıklama ve açık kaynak yazılım projelerimiz.`}
      />
      <ProjectList projects={PROJECTS} />
    </div>
  );
}

