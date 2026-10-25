import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TEAM } from "@/data/team-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: TEAM.name,
    template: `%s | ${TEAM.name}`,
  },
  description: TEAM.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var isDark=t==='dark'||(!t&&!window.matchMedia('(prefers-color-scheme: light)').matches);if(isDark){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="flex min-h-full flex-col relative">
        {/* Continuous Atmospheric Background (Glow & Tech Grid) across ALL pages */}
        <div className="pointer-events-none fixed inset-0 ambient-glow" />
        <div className="pointer-events-none fixed inset-0 tech-grid opacity-70 dark:opacity-85" />
        <Navbar />
        <main className="relative z-10 flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
