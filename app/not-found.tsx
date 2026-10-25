import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="page-container py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Sayfa bulunamadı</h1>
      <p className="mt-4 text-muted-foreground">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Button asChild variant="outline" className="mt-8">
        <Link href="/">Anasayfaya dön</Link>
      </Button>
    </div>
  );
}
