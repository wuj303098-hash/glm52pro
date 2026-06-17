import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 — Zhipu AI's Coding Model: Benchmark, Pricing & Guide",
  description: "Complete independent guide to GLM 5.2 by Zhipu AI. Benchmark scores, API pricing, coding plan feature, comparisons vs Claude Fable and Kimi 2.7.",
};

const highlights = [
  { icon: "🏆", title: "Benchmark", desc: "HumanEval, LiveCodeBench scores vs top models", href: "/benchmark" },
  { icon: "⚔️", title: "vs Fable & Kimi 2.7", desc: "Side-by-side comparison on coding, speed & price", href: "/vs" },
  { icon: "💰", title: "API Pricing", desc: "Full cost breakdown, free tier & OpenRouter rates", href: "/pricing" },
  { icon: "🧑‍💻", title: "Coding Plan", desc: "How GLM 5.2's planning feature works with real examples", href: "/coding-plan" },
  { icon: "🖥️", title: "Run Locally (Ollama)", desc: "Step-by-step guide to run GLM 5.2 on your machine", href: "/ollama" },
  { icon: "🔌", title: "OpenCode Setup", desc: "Use GLM 5.2 as your OpenCode backend", href: "/opencode" },
];

const quickFacts = [
  { label: "Developer", value: "Zhipu AI (智谱AI)" },
  { label: "Release", value: "June 2026" },
  { label: "Context Window", value: "128K tokens" },
  { label: "Specialty", value: "Coding & Planning" },
  { label: "API Access", value: "Z.ai + OpenRouter" },
  { label: "Open Source", value: "Weights on HuggingFace" },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <section className="text-center mb-12">
        <div className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Independent Guide · Not affiliated with Zhipu AI
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          GLM 5.2: Everything You Need to Know
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Zhipu AI&apos;s flagship coding model. Benchmarks, pricing, comparisons, and how-to guides — all in one place.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <Link href="/benchmark" className="bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            See Benchmarks
          </Link>
          <Link href="/vs" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:border-gray-400 transition-colors">
            Compare Models
          </Link>
          <Link href="/pricing" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:border-gray-400 transition-colors">
            View Pricing
          </Link>
        </div>
      </section>

      <AdUnit slot="1234567890" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickFacts.map(({ label, value }) => (
            <div key={label} className="border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">{label}</div>
              <div className="font-semibold text-gray-900">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What is GLM 5.2?</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            <strong>GLM 5.2</strong> is a large language model developed by <strong>Zhipu AI (智谱AI)</strong>, released in June 2026. It is designed specifically to excel at coding tasks, including multi-file planning, code generation, debugging, and agentic coding workflows.
          </p>
          <p>
            The model features a unique <strong>&quot;Coding Plan&quot;</strong> capability — before writing code, it creates a structured plan across multiple files, similar to how a senior engineer would approach a complex task. This has attracted significant attention from developers using tools like <strong>OpenCode</strong> and <strong>Ollama</strong>.
          </p>
          <p>
            GLM 5.2 is available through the <strong>Z.ai API</strong> and <strong>OpenRouter</strong>, and model weights are published on <strong>HuggingFace</strong> for local deployment. It competes directly with <strong>Claude Fable</strong> and <strong>Kimi 2.7</strong> in the coding model space.
          </p>
        </div>
      </section>

      <AdUnit slot="0987654321" />

      <section>
        <h2 className="text-2xl font-bold mb-6">Explore GLM 5.2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map(({ icon, title, desc, href }) => (
            <Link key={href} href={href} className="border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-sm transition-all group">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-gray-900 group-hover:text-blue-700 mb-1">{title}</div>
              <div className="text-sm text-gray-500">{desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
