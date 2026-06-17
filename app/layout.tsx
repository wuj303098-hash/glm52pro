import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "GLM 5.2 — Benchmark, Pricing & Coding Guide", template: "%s | GLM52.pro" },
  description: "Independent guide to GLM 5.2: benchmarks, API pricing, coding plan demos, comparisons vs Fable and Kimi 2.7, and local Ollama setup.",
  metadataBase: new URL("https://glm52.pro"),
  openGraph: { siteName: "GLM52.pro", locale: "en_US", type: "website" },
};

const nav = [
  { href: "/benchmark", label: "Benchmark" },
  { href: "/vs", label: "vs Fable & Kimi" },
  { href: "/pricing", label: "Pricing" },
  { href: "/coding-plan", label: "Coding Plan" },
  { href: "/ollama", label: "Run Locally" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-blue-700 hover:text-blue-800">GLM52.pro</Link>
            <nav className="flex gap-5 text-sm font-medium text-gray-600 flex-wrap">
              {nav.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-blue-700 transition-colors">{label}</Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 text-xs text-gray-400 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-wrap gap-4 justify-between">
            <span>© 2026 GLM52.pro — Independent, not affiliated with Zhipu AI.</span>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-gray-600">About</Link>
              <Link href="/contact" className="hover:text-gray-600">Contact</Link>
              <Link href="/privacy-policy" className="hover:text-gray-600">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-gray-600">Disclaimer</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
