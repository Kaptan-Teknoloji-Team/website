import type { Metadata } from "next";
import { Users } from "lucide-react";
import { ArrowLink, PageHeader } from "@/components/PageHeader";
import { DISCIPLINES, JOIN_LINK, TEAM, TEAM_MEMBERS } from "@/data/team-data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: TEAM.description,
};

export default function AboutPage() {
  return (
    <div className="page-container py-16 sm:py-20 space-y-16">
      <PageHeader
        badge="Hikayemiz & Kadromuz"
        title="Biz Kimiz?"
        description={`${TEAM.school} Bilişim Teknolojileri Öğretmenimiz Gamze Yelken danışmanlığında; Egemen Ömer Yılmazer, Emre Ekici ve Doruk Ata Kabadayı olarak kurduğumuz Kaptan Teknoloji Takımıyız (KTT). Milli işletim sistemimiz Pardus ve açık kaynak sistemler üzerine çalışıyoruz.`}
      />

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-14">
          {/* Mission & Story - Narrative Editorial Prose */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Hikayemiz ve Amacımız
            </h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                {TEAM.school} öğrencileri olarak yola çıkarken tek bir gayemiz vardı:
                Teorik yazılım ve sistem bilgimizi açık kaynak dünyasında somut katkılara
                dönüştürmek ve ülkemizin bağımsız milli işletim sistemi Pardus ekosisteminde aktif rol
                almak.
              </p>
              <p>
                Okulumuz Bilişim Teknolojileri Öğretmenimiz Gamze Yelken&apos;in danışmanlığında;
                Egemen Ömer Yılmazer, Emre Ekici ve Doruk Ata Kabadayı olarak oluşturduğumuz çekirdek
                ekibimizle 2026 yılında Şanlıurfa&apos;da düzenlenen Pardus Hata Ayıklama ve Öneri
                Yarışması&apos;na katıldık. Yarışma sürecinde C dili ve GNU/Linux sistem bileşenlerindeki
                bellek sızıntıları ile güvenlik açıklarını kaynak kod seviyesinde inceleyerek yamalar
                ürettik ve <strong className="text-foreground font-semibold">Hata Ayıklama kategorisinde Türkiye 3.&apos;sü olduk</strong>.
              </p>
              <p className="text-sm sm:text-base">
                Bu derecemizin ardından başka bir yarışmaya katılmadık; tüm enerjimizi okulumuzda açık
                kaynak kültürünü yaşatmaya, edindiğimiz tecrübeleri belgelemeye ve yeni yazılım
                projeleri geliştirmeye odakladık.
              </p>
            </div>
          </section>

          {/* Team Roster - Human Editorial List (NO TEMPLATED WIDGET CARDS) */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Takım Kadromuz
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Öğretmenimiz ve 3 liseli arkadaş olarak birlikte ürettiğimiz 4 kişilik çalışma ekibimiz.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary self-start sm:self-center">
                <Users className="size-3.5" />
                <span>4 Kişilik Çekirdek Kadro</span>
              </div>
            </div>

            {/* Editorial Roster List */}
            <div className="divide-y divide-border border-y border-border">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-colors hover:bg-secondary/20 px-2 rounded-lg"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.focus}
                    </p>
                  </div>

                  <div className="shrink-0 self-start sm:self-center">
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-md border border-border">
                      {member.subsystem}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Disciplines - Clean Architectural Layout (NO BOXED CLUTTER) */}
          <section className="space-y-6">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Neler Üzerine Çalışıyoruz?
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Açık kaynak sistemler ve yazılım mühendisliği alanındaki çalışma odaklarımız.
              </p>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {DISCIPLINES.map((discipline) => (
                <div key={discipline.id} className="py-5 space-y-2">
                  <h3 className="text-base font-bold text-foreground">
                    {discipline.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {discipline.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {discipline.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info - Integrated Clean Panel (No floating AI card) */}
        <aside className="space-y-6">
          <div className="rounded-2xl p-6 sm:p-7 border border-border bg-card/60 backdrop-blur-md space-y-6">
            <h3 className="text-lg font-bold text-foreground">Takım Künyemiz</h3>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Okulumuz</dt>
                <dd className="font-semibold text-foreground mt-0.5">{TEAM.school}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Danışman Öğretmenimiz</dt>
                <dd className="font-semibold text-foreground mt-0.5">
                  Gamze Yelken <span className="text-xs font-normal text-muted-foreground">(Bilişim Teknolojileri)</span>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Öğrenci Kadromuz</dt>
                <dd className="font-medium text-foreground mt-0.5 text-xs leading-relaxed">
                  Egemen Ömer Yılmazer, Emre Ekici, Doruk Ata Kabadayı
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Şehir / Konum</dt>
                <dd className="font-semibold text-foreground mt-0.5">{TEAM.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Takım Kısaltmamız</dt>
                <dd className="font-semibold text-primary mt-0.5">{TEAM.acronym}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Takım Mevcudumuz</dt>
                <dd className="font-semibold text-foreground mt-0.5">
                  4 Kişi (1 Danışman Öğretmen & 3 Öğrenci)
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Resmi Derecemiz</dt>
                <dd className="mt-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-600/35 bg-amber-500/15 px-3 py-1 text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-300 shadow-xs">
                    2026 Şanlıurfa Pardus 3.&apos;lüğü 
                  </span>
                </dd>
              </div>
            </dl>

            <div className="pt-4 border-t border-border/80">
              <p className="text-xs text-muted-foreground mb-3">
                Yahya Kaptan Anadolu Lisesi öğrencisi olarak aramıza katılmak ister misin?
              </p>
              <ArrowLink href={JOIN_LINK.href}>Ekip Başvuru Formu</ArrowLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

