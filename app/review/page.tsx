import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 Review 2026: API, Context and Coding Value",
  description:
    "In-depth GLM 5.2 review covering coding quality, 1M-token context, OpenRouter pricing, Z.ai API access, and local deployment.",
};

const scores = [
  { category: "Coding workflow", score: 9, max: 10, comment: "Coding Plan and long-context behavior make it useful for multi-file work." },
  { category: "API access", score: 9, max: 10, comment: "Available through Z.ai direct endpoints and OpenRouter." },
  { category: "Price clarity", score: 8, max: 10, comment: "OpenRouter lists z-ai/glm-5.2 at $1.20 input and $4.10 output per 1M tokens." },
  { category: "Context window", score: 10, max: 10, comment: "1M-token context is the headline capability." },
  { category: "Local deployment", score: 9, max: 10, comment: "Open weights are published as zai-org/GLM-5.2." },
  { category: "Documentation", score: 8, max: 10, comment: "Z.ai and HuggingFace docs cover the main API and serving paths." },
];

const tests = [
  {
    title: "Repository planning",
    prompt: "Plan a migration for a Next.js site with multiple SEO landing pages.",
    result: "Strong fit. The 1M context and planning behavior are useful for keeping route, metadata, and copy changes aligned.",
    rating: "4.5/5",
  },
  {
    title: "OpenCode configuration",
    prompt: "Configure a coding assistant through an OpenAI-compatible provider.",
    result: "Strong fit through z-ai/glm-5.2 on OpenRouter or glm-5.2[1m] on the Z.ai coding endpoint.",
    rating: "4.4/5",
  },
  {
    title: "Local serving",
    prompt: "Run the model behind a local OpenAI-compatible endpoint.",
    result: "Good fit when using supported serving stacks such as vLLM, SGLang, or Transformers.",
    rating: "4.1/5",
  },
];

export default function ReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 Review</h1>
      <p className="text-gray-500 mb-8">Updated June 2026. Independent assessment, not sponsored by Z.ai.</p>

      <AdUnit slot="4455667788" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Score Breakdown</h2>
        <div className="space-y-4">
          {scores.map(({ category, score, max, comment }) => (
            <div key={category}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">{category}</span>
                <span className="text-sm font-bold text-blue-700">{score}/{max}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(score / max) * 100}%` }} />
              </div>
              <div className="text-xs text-gray-500">{comment}</div>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="5566778899" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What We Tested</h2>
        <div className="space-y-5">
          {tests.map(({ title, prompt, result, rating }) => (
            <div key={title} className="border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between gap-4 mb-2">
                <h3 className="font-bold">{title}</h3>
                <span className="text-sm font-semibold text-blue-700">{rating}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">Prompt: <em>{prompt}</em></div>
              <div className="text-sm text-gray-700">{result}</div>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="6677889900" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Pros and Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="font-bold text-green-800 mb-3">Pros</div>
            <ul className="text-sm text-green-700 space-y-2">
              <li>1M-token context for long repository work</li>
              <li>OpenRouter model ID: z-ai/glm-5.2</li>
              <li>Direct Z.ai coding endpoint for Coding Plan workflows</li>
              <li>Open weights at zai-org/GLM-5.2</li>
              <li>Works with OpenAI-compatible clients</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="font-bold text-red-800 mb-3">Cons</div>
            <ul className="text-sm text-red-700 space-y-2">
              <li>Provider pricing can change, so check live pages before launch</li>
              <li>Full 1M-context local serving requires serious hardware planning</li>
              <li>Some ecosystem integrations still lag older provider families</li>
              <li>Benchmarks are not a substitute for testing your own workload</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Verdict</h2>
        <p className="text-blue-800">
          GLM 5.2 is strongest when you need a coding-capable model with 1M-token
          context, OpenRouter access, direct Z.ai access, and an open local deployment path.
          It is especially relevant for OpenCode-style workflows and large repository analysis.
        </p>
      </section>
    </div>
  );
}
