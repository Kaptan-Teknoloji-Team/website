"use client";

import * as React from "react";
import Image from "next/image";
import { Maximize2, Calendar, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { GALLERY_ITEMS, type GalleryItem } from "@/data/team-data";

export function Gallery() {
  const [filter, setFilter] = React.useState<string>("all");
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item: GalleryItem) => item.category === filter);

  return (
    <section id="galeri" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="default" className="mb-3 px-3 py-1">
            Medya & Projeler
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Geliştirdiğimiz Projeler ve <span className="text-primary">Çalışmalarımız</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Açık kaynak sistemler, Pardus hata ayıklama süreçlerimiz ve 2026 Şanlıurfa yarışma anlarımız.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "Tümü" },
              { id: "yazilim", label: "Açık Kaynak & Sistem" },
              { id: "yarismalar", label: "Yarışma Sahası" },
              { id: "medya", label: "Kurumsal Medya" },
            ].map((btn) => (
              <Button
                key={btn.id}
                variant={filter === btn.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(btn.id)}
                className="text-xs rounded-xl"
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card glow-hover rounded-2xl overflow-hidden border border-border group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-72 w-full bg-muted overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="backdrop-blur-md">
                    {item.categoryLabel}
                  </Badge>
                </div>

                {/* Inspect button hover effect */}
                <div className="absolute top-4 right-4 h-9 w-9 rounded-xl bg-background/80 border border-border backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4 text-foreground" />
                </div>

                {/* Bottom text preview */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Specs preview */}
              <div className="p-4 bg-card/60 border-t border-border">
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                {item.specs && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.specs.slice(0, 3).map((spec: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-secondary-foreground border border-border"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog Modal */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-3xl bg-card border-border p-6 overflow-hidden">
            {selectedItem && (
              <div>
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="default">{selectedItem.categoryLabel}</Badge>
                    <span className="text-xs text-muted-foreground">• {selectedItem.date}</span>
                  </div>
                  <DialogTitle className="text-xl font-bold text-foreground">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-muted my-4 border border-border">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                </div>

                <DialogDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {selectedItem.description}
                </DialogDescription>

                {selectedItem.specs && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <Layers className="h-4 w-4" />
                      Teknik Özellikler & Detaylar
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {selectedItem.specs.map((spec: string, i: number) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-secondary border border-border text-center"
                        >
                          <span className="text-xs font-medium text-secondary-foreground">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
