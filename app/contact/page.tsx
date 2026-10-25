import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, School, ExternalLink, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, JOIN_LINK, SOCIAL_LINKS, TEAM } from "@/data/team-data";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${TEAM.name} iletişim kanallarımız ve başvuru formumuz.`,
};

export default function ContactPage() {
  return (
    <div className="page-container py-16 sm:py-20 space-y-12">
      <PageHeader
        badge="Bizimle İletişime Geçin"
        title="İletişim"
        description="Açık kaynak iş birliği önerileriniz, teknik sorularınız veya takımımız hakkında bilgi almak için bize yazabilirsiniz."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_22rem] items-start">
        {/* Left Column: Direct Form (NO redundant card container) */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              Bize Mesaj Gönderin
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Formu doldurarak doğrudan takımımıza mesaj iletebilirsiniz. En kısa sürede geri dönüş yapıyoruz.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-md">
            <ContactForm />
          </div>
        </section>

        {/* Right Column: Unified Contact & Channel Panel */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7 space-y-6 backdrop-blur-md">
            <div>
              <h3 className="text-base font-bold text-foreground">İletişim Kanallarımız</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Resmi okul ve proje bilgilerimiz
              </p>
            </div>

            <div className="space-y-4 text-sm border-t border-border/80 pt-4">
              <div className="flex items-start gap-3">
                <School className="size-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-medium text-muted-foreground">Okulumuz</span>
                  <span className="font-semibold text-foreground">{TEAM.school}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-medium text-muted-foreground">Konumumuz</span>
                  <span className="text-foreground">{TEAM.location}</span>
                </div>
              </div>

              {CONTACT_EMAIL && (
                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-medium text-muted-foreground">Resmi E-Posta Adresimiz</span>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-medium text-primary hover:underline break-all"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Social Links & GitHub */}
            {SOCIAL_LINKS.length > 0 && (
              <div className="border-t border-border/80 pt-4 space-y-2.5">
                <span className="block text-xs font-medium text-muted-foreground">
                  Açık Kaynak Kod Sayfamız
                </span>
                <ul className="space-y-2">
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        <span>{social.label} Sayfamız</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Join Team Box */}
            <div className="border-t border-border/80 pt-4 space-y-2">
              <span className="block text-xs font-medium text-muted-foreground">
                Ekibimize Katılmak İster misin?
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yahya Kaptan Anadolu Lisesi öğrencileri için takım başvuru formumuz aktiftir.
              </p>
              <Button asChild size="sm" className="w-full mt-2">
                <Link
                  href={JOIN_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5"
                >
                  <span>Başvuru Formunu Aç</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

