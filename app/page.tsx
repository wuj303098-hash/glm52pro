import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 API, OpenRouter, Pricing and Coding Guide",
  description:
    "Independent GLM 5.2 guide covering the Z.ai API, OpenRouter model ID, 1M-token context, pricing, OpenCode setup, benchmarks, and local deployment.",
};

const quickFacts = [
  { label: "Model ID", value: "z-ai/glm-5.2" },
  { label: "Context", value: "1M tokens" },
  { label: "OpenRouter input", value: "$1.20 / 1M" },
  { label: "OpenRouter output", value: "$4.10 / 1M" },
  { label: "Official API", value: "api.z.ai" },
  { label: "Open weights", value: "zai-org/GLM-5.2" },
];

const primaryGuides = [
  {
    title: "GLM5.2 API",
    desc: "Official Z.ai endpoint, model IDs, curl examples, context facts, and pricing notes.",
    href: "/glm5.2-api",
  },
  {
    title: "OpenRouter",
    desc: "Use z-ai/glm-5.2 through OpenRouter with the OpenAI-compatible API.",
    href: "/openrouter",
  },
  {
    title: "OpenCode Setup",
    desc: "Updated OpenCode config for OpenRouter and direct Z.ai coding endpoints.",
    href: "/opencode",
  },
  {
    title: "Pricing",
    desc: "Current GLM 5.2 API pricing and tradeoffs for agentic coding workloads.",
    href: "/pricing",
  },
];

const secondaryGuides = [
  { title: "Benchmarks", href: "/benchmark" },
  { title: "Compare Models", href: "/vs" },
  { title: "Coding Plan", href: "/coding-plan" },
  { title: "HuggingFace", href: "/huggingface" },
  { title: "Local Deployment", href: "/ollama" },
  { title: "Review", href: "/review" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Independent GLM 5.2 developer guide
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            GLM5.2 API and OpenRouter setup for developers
          </h1>
          <p className="mb-6 max-w-2xl text-lg leading-8 text-gray-600">
            Current facts for GLM 5.2: 1M-token context, model ID z-ai/glm-5.2,
            Z.ai API endpoints, OpenRouter access, OpenCode config, and pricing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/glm5.2-api"
              className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              GLM5.2 API
            </Link>
            <Link
              href="/openrouter"
              className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-blue-400 hover:text-blue-700"
            >
              OpenRouter guide
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <div className="mb-4 text-sm font-semibold text-gray-500">Current setup snapshot</div>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg bg-white p-4 font-mono text-gray-800">
              model: z-ai/glm-5.2
              <br />
              context: 1M-token context
              <br />
              baseURL: https://openrouter.ai/api/v1
            </div>
            <div className="rounded-lg bg-white p-4 font-mono text-gray-800">
              model: glm-5.2
              <br />
              baseURL: https://api.z.ai/api/paas/v4
            </div>
          </div>
        </div>
      </section>

      <AdUnit slot="1234567890" />

      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold text-gray-950">Quick Facts</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {quickFacts.map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-gray-200 p-4">
              <div className="mb-1 text-sm text-gray-500">{label}</div>
              <div className="font-semibold text-gray-950">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 text-2xl font-bold text-gray-950">Start Here</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {primaryGuides.map(({ title, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-xl border border-gray-200 p-5 transition-all hover:border-blue-400 hover:bg-blue-50"
            >
              <div className="mb-2 text-lg font-semibold text-gray-950">{title}</div>
              <div className="text-sm leading-6 text-gray-600">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <AdUnit slot="0987654321" />

      <section>
        <h2 className="mb-5 text-2xl font-bold text-gray-950">Explore GLM 5.2</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {secondaryGuides.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-700"
            >
              {title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
