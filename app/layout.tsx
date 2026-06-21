import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "GLM 5.2 API, OpenRouter, Pricing and Coding Guide", template: "%s | GLM52.pro" },
  description:
    "Independent guide to GLM 5.2: API setup, OpenRouter model ID, 1M context, pricing, coding plan demos, comparisons, and local deployment.",
  metadataBase: new URL("https://glm52.pro"),
  openGraph: { siteName: "GLM52.pro", locale: "en_US", type: "website" },
};

const nav = [
  { href: "/glm5.2-api", label: "API" },
  { href: "/openrouter", label: "OpenRouter" },
  { href: "/benchmark", label: "Benchmark" },
  { href: "/vs", label: "Compare" },
  { href: "/pricing", label: "Pricing" },
  { href: "/opencode", label: "OpenCode" },
  { href: "/ollama", label: "Run Locally" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="fSAoa9q/Qk95JEng6ChaJA"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CSE2XCL4CR"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CSE2XCL4CR');
        `}</Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="font-bold text-lg text-blue-700 hover:text-blue-800">
              GLM52.pro
            </Link>
            <nav className="flex gap-4 text-sm font-medium text-gray-600 flex-wrap justify-end">
              {nav.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-blue-700 transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 text-xs text-gray-400 mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap gap-4 justify-between">
            <span>2026 GLM52.pro - Independent, not affiliated with Z.ai or Zhipu AI.</span>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
              <Link href="/privacy-policy" className="hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-gray-600">
                Disclaimer
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
