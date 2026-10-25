import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Calendar, MapPin, Users, ArrowRight, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS, TEAM } from "@/data/team-data";

export const metadata: Metadata = {
  title: "Başarılarımız",
  description: `${TEAM.name} yarışma derecelerimiz ve resmi başarı hikayemiz.`,
};

export default function AchievementsPage() {
  const achievement = ACHIEVEMENTS[0];

  return (
    <div className="page-container py-16 sm:py-20 space-y-14">
      <PageHeader
        badge="TÜBİTAK ULAKBİM & Pardus"
        title="Başarılarımız"
        description={`${TEAM.school} KTT Kaptan Teknoloji Takımı olarak ulusal yarışmalarda elde ettiğimiz resmi derecemiz ve başarı hikayemiz.`}
      />

      {/* Primary Achievement Dossier (Architectural Layout, NO generic AI card) */}
      <article className="max-w-4xl space-y-12">
        {/* Milestone Banner */}
        <div className="rounded-2xl border border-amber-500/40 bg-card/60 backdrop-blur-md p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div className="flex items-center gap-3.5">
              <div className="size-14 rounded-xl bg-amber-500/15 border border-amber-500/35 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Trophy className="size-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Resmi Derecemiz
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {achievement?.competition}
                </h2>
              </div>
            </div>

            <div className="self-start sm:self-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-600/35 bg-amber-500/15 px-4 py-1.5 text-base font-extrabold text-amber-900 dark:text-amber-300">
                {achievement?.result}
              </span>
            </div>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                Yıl
              </span>
              <p className="text-sm font-bold text-foreground">{achievement?.date}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                Final Konumu
              </span>
              <p className="text-sm font-bold text-foreground">{achievement?.location}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" />
                Kategori
              </span>
              <p className="text-sm font-bold text-foreground">Hata Ayıklama</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                <Users className="size-3.5" />
                Takım Kadromuz
              </span>
              <p className="text-sm font-bold text-foreground">4 Kişi (1 Öğretmen & 3 Öğrenci)</p>
            </div>
          </div>
        </div>

        {/* Narrative Section - Written in 1st Person Plural */}
        <div className="space-y-8 divide-y divide-border border-y border-border py-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" />
              <span>Yarışma Yolculuğumuz ve Hedefimiz</span>
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Yahya Kaptan Anadolu Lisesi öğrencileri olarak yola çıkarken amacımız; teorik sistem ve C programlama bilgimizi, Türkiye&apos;nin milli işletim sistemi Pardus üzerinde somut faydaya dönüştürmekti. Danışman öğretmenimiz Gamze Yelken rehberliğinde aylar süren yoğun bir çalışma temposuna girdik.
            </p>
          </div>

          <div className="pt-8 space-y-3">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Terminal className="size-5 text-primary" />
              <span>Teknik Analiz ve Kaynak Kod Yamaları</span>
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              GNU/Linux ekosistemi ve Pardus sistem servisleri üzerinde GDB ve Valgrind gibi ileri düzey araçlar kullanarak bellek sızıntılarını, sınır aşımı problemlerini ve olası güvenlik açıklarını tespit ettik. Tespit ettiğimiz hataları salt bildirmekle kalmadık; doğrudan C dili kaynak kodu seviyesinde çalışan yamalar (patch) geliştirip test ettik.
            </p>
          </div>

          <div className="pt-8 space-y-3">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Trophy className="size-5 text-amber-500" />
              <span>2026 Şanlıurfa Finali ve Türkiye Üçüncülüğümüz</span>
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Şanlıurfa&apos;da düzenlenen ulusal finalde; hazırladığımız teknik raporları, kök neden analizlerini ve geliştirdiğimiz kaynak kod yamalarını jüriye başarıyla sunduk. Türkiye&apos;nin dört bir yanından gelen ekipler arasından sıyrılarak <strong className="text-foreground">Hata Ayıklama kategorisinde Türkiye 3.&apos;sü olduk</strong>.
            </p>
          </div>

          <div className="pt-8 space-y-3">
            <h3 className="text-xl font-bold text-foreground">
              Sonrasındaki Yol Haritamız
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Bu derecemizin ardından başka bir yarışmaya katılmadık. Tüm odağımızı ve zamanımızı; okulumuzda açık kaynak felsefesini yaygınlaştırmaya, edindiğimiz GNU/Linux tecrübesini yeni projelerle büyütmeye ve takımımıza yeni arkadaşlar kazandırmaya adadık.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/projects/pardus-hata-ayiklama" className="flex items-center gap-2">
              <span>Yarışma Projemizi İnceleyin</span>
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/about">Takım Kadromuzu Tanıyın</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}


