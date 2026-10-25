import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Terminal,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";
import {
  DISCIPLINES,
  JOIN_LINK,
  PROJECTS,
  TEAM,
  getFeaturedAchievement,
} from "@/data/team-data";

export default function HomePage() {
  const featured = getFeaturedAchievement();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 pt-8 pb-16 sm:pt-14 sm:pb-24">
        <div className="page-container space-y-10 sm:space-y-12">
          {/* Hero Header Content */}
          <div className="mx-auto max-w-4xl text-center space-y-6">
            {/* School & Team Badge with Profile Picture */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md shadow-md">
              <div className="relative h-5 w-5 rounded-full overflow-hidden border border-primary/60">
                <Image
                  src={TEAM.logo}
                  alt={TEAM.acronym}
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-foreground">{TEAM.school}</span>
              <span className="text-muted-foreground">•</span>
              <span>{TEAM.acronym} Kaptan Teknoloji Takımı</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]">
              Milli İşletim Sistemi ve{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-amber-500 dark:from-sky-400 dark:via-cyan-300 dark:to-orange-400 bg-clip-text text-transparent">
                Açık Kaynak
              </span>{" "}
              Teknolojilerinde Genç Mühendislik.
            </h1>

            {/* Subtitle in 1st Person Plural */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Biz {TEAM.school} Bilişim Teknolojileri Öğretmenimiz Gamze Yelken danışmanlığında;
              takım arkadaşlarımız Egemen Ömer Yılmazer, Emre Ekici ve Doruk Ata Kabadayı ile birlikte
              açık kaynak sistemler geliştiren liseli bir ekibiz. 2026 Şanlıurfa Pardus Hata Ayıklama
              ve Öneri Yarışması&apos;nda Hata Ayıklama kategorisinde Türkiye 3.&apos;sü olduk.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 px-8"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  <span>Projelerimizi İnceleyin</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-border bg-card/60 hover:bg-secondary text-foreground hover:text-primary px-8"
              >
                <Link
                  href={JOIN_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {JOIN_LINK.label}
                </Link>
              </Button>
            </div>
          </div>

          {/* Carefully Framed Hero Header Banner Showcase */}
          <div className="relative mx-auto max-w-6xl">
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-2xl transition-all">
              <div className="relative aspect-[16/7] w-full min-h-[260px] sm:min-h-[400px] lg:min-h-[480px]">
                <Image
                  src={TEAM.heroImage}
                  alt="Yahya Kaptan Anadolu Lisesi KTT Kaptan Teknoloji Takımı Header Görseli"
                  fill
                  priority
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Subtle vignette for crisp framing without obscuring center art */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl sm:rounded-3xl" />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-amber-500/50 bg-slate-950/85 px-3.5 py-1.5 text-xs font-bold text-amber-400 backdrop-blur-md shadow-lg">
                    <Trophy className="size-4 text-amber-400" />
                    <span>2026 Şanlıurfa Finali • Türkiye 3.&apos;lüğümüz</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 hidden sm:flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-stone-950/85 px-3.5 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-md">
                  <span>Pardus Hata Ayıklama & Öneri Yarışması</span>
                </div>

                {/* Bottom Overlay Info Strip */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-xl border border-white/15 bg-stone-950/85 p-3 sm:p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-amber-400/40 shrink-0 bg-stone-900">
                      <Image
                        src={TEAM.logo}
                        alt="KTT Logo"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                        {TEAM.name}
                      </div>
                      <p className="text-xs text-amber-300 font-medium">
                        Yahya Kaptan Anadolu Lisesi • İzmit, Kocaeli
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-amber-300 border border-white/10">
                      <Terminal className="size-3.5" />
                      Pardus Linux
                    </span>
                    <a
                      href="https://github.com/Kaptan-Teknoloji-Team/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-slate-200 hover:text-white border border-white/15 hover:border-amber-400/50 transition-colors"
                    >
                      <span>GitHub Sayfamız</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Stats Bar - Clean Horizontal Metric Strip */}
          <div className="mx-auto max-w-6xl pt-4">
            <div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
              {TEAM.stats.map((stat) => (
                <div key={stat.label} className="text-center sm:px-4 pt-4 sm:pt-0 first:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Achievement Section - Architectural Spotlight (NO generic AI card) */}
      {featured && (
        <section className="relative z-10 border-t border-border py-16 sm:py-20">
          <div className="page-container">
            <div className="relative mx-auto max-w-5xl rounded-2xl sm:rounded-3xl border border-amber-600/35 dark:border-amber-500/40 bg-card/60 backdrop-blur-md p-8 sm:p-12 shadow-lg">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/35 dark:border-amber-500/40 bg-amber-500/15 px-3.5 py-1 text-xs font-bold text-amber-900 dark:text-amber-400">
                    <Trophy className="size-4" />
                    <span>2026 Şanlıurfa Resmi Derecemiz</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground">
                    {featured.competition}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="rounded-xl bg-amber-500/15 border border-amber-600/35 dark:border-amber-500/40 px-3.5 py-1.5 text-lg font-black text-amber-900 dark:text-amber-300 shadow-xs">
                      {featured.result}
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Konum: {featured.location} • Yıl: {featured.date}
                    </span>
                  </div>

                  <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 shadow-lg shadow-amber-500/20"
                  >
                    <Link href="/achievements" className="flex items-center gap-2">
                      <span>Derecemizi İnceleyin</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-border hover:border-amber-500/40 text-foreground"
                  >
                    <Link href="/projects/pardus-hata-ayiklama">Yarışma Projemiz</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects Section */}
      <section className="relative z-10 border-t border-border py-16 sm:py-24">
        <div className="page-container space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Terminal className="size-3.5" />
                <span>Projelerimiz</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                Geliştirdiğimiz Açık Kaynak Projeler
              </h2>
              <p className="max-w-2xl text-base text-muted-foreground">
                Milli işletim sistemimiz Pardus ve açık kaynak ekosistemine sunduğumuz
                teknik katkılarımız ve geliştirdiğimiz yazılımlarımız.
              </p>
            </div>

            <Button asChild variant="outline" className="border-border hover:border-primary/40 text-foreground">
              <Link href="/projects" className="flex items-center gap-1.5">
                <span>Tüm Projelerimiz</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Project List Component (Clean Editorial Split Layout) */}
          <ProjectList projects={PROJECTS} />
        </div>
      </section>

      {/* About & Disciplines Section - Editorial Split Layout (NO REPETITIVE AI CARDS) */}
      <section className="relative z-10 border-t border-border py-16 sm:py-24">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Narrative Philosophy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" />
                <span>Nasıl Çalışıyoruz?</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                Mühendislik ve Açık Kaynak Odaklarımız
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Biz Yahya Kaptan Anadolu Lisesi öğrencileri olarak teorik bilgiyi sahaya taşıyor;
                GNU/Linux çekirdeği, bellek analizi ve web teknolojilerinde kendi açık kaynak
                çözümlerimizi üretiyoruz.
              </p>
              <div className="pt-2">
                <ArrowLink href="/about">Hikayemizi ve Takım Kadromuzu Tanıyın</ArrowLink>
              </div>
            </div>

            {/* Right Column: Editorial Focus Areas (Clean Row Layout) */}
            <div className="lg:col-span-7 divide-y divide-border border-y border-border">
              {DISCIPLINES.map((discipline) => (
                <div key={discipline.id} className="py-5 space-y-2.5">
                  <h3 className="text-lg font-bold text-foreground">
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
          </div>
        </div>
      </section>

      {/* Call To Action: Open Editorial Callout (NO Boxed Card Clutter) */}
      <section className="relative z-10 border-t border-border py-20 sm:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              Takımımıza Katıl
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Açık Kaynak Dünyasında Birlikte Üretelim
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Yahya Kaptan Anadolu Lisesi öğrencisiysen ve GNU/Linux, Pardus veya yazılım geliştirme alanlarına ilgi duyuyorsan; resmi başvuru formumuzu doldurarak ekibimize katılabilirsin.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 shadow-lg shadow-primary/25"
              >
                <Link
                  href={JOIN_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Ekip Başvuru Formunu Doldur</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Bize Soru Sorun</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

