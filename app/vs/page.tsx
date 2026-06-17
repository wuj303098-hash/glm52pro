import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 vs Claude Fable vs Kimi 2.7 — Coding Model Comparison 2026",
  description: "Detailed comparison of GLM 5.2, Claude Fable, and Kimi 2.7. Which coding AI wins on benchmark, price, speed, and real-world tasks?",
};

const compareRows = [
  { feature: "Developer", glm: "Zhipu AI", fable: "Anthropic", kimi: "Moonshot AI" },
  { feature: "Context Window", glm: "128K", fable: "200K", kimi: "128K" },
  { feature: "HumanEval", glm: "92.1%", fable: "94.3%", kimi: "90.8%" },
  { feature: "LiveCodeBench", glm: "68.4%", fable: "71.2%", kimi: "66.9%" },
  { feature: "SWE-bench", glm: "51.2%", fable: "55.1%", kimi: "49.7%" },
  { feature: "Input price (per 1M tok)", glm: "$0.14", fable: "$3.00", kimi: "$0.12" },
  { feature: "Output price (per 1M tok)", glm: "$0.28", fable: "$15.00", kimi: "$0.30" },
  { feature: "Speed (tokens/sec)", glm: "~85", fable: "~70", kimi: "~90" },
  { feature: "Open weights", glm: "✅ HuggingFace", fable: "❌", kimi: "❌" },
  { feature: "Coding Plan feature", glm: "✅", fable: "✅ (extended thinking)", kimi: "✅" },
  { feature: "OpenRouter access", glm: "✅", fable: "✅", kimi: "✅" },
  { feature: "Ollama / local run", glm: "✅", fable: "❌", kimi: "❌" },
];

const winners = [
  { category: "Best Benchmark Score", winner: "Claude Fable", why: "Leads on HumanEval (+2.2%), SWE-bench (+3.9%), and MMLU", color: "orange" },
  { category: "Best Price", winner: "GLM 5.2", why: "Output at $0.28/M — 53× cheaper than Fable, comparable to Kimi", color: "blue" },
  { category: "Best Speed", winner: "Kimi 2.7", why: "~90 tok/s edges out GLM 5.2 at ~85 tok/s", color: "purple" },
  { category: "Best for Local Use", winner: "GLM 5.2", why: "Only top-tier coding model with open weights + Ollama support", color: "blue" },
  { category: "Best Value Overall", winner: "GLM 5.2", why: "92% of Fable's coding performance at 2% of the cost", color: "blue" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-800",
  orange: "bg-orange-50 border-orange-200 text-orange-800",
  purple: "bg-purple-50 border-purple-200 text-purple-800",
};

export default function VsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 vs Claude Fable vs Kimi 2.7</h1>
      <p className="text-gray-500 mb-8">Full comparison across coding benchmarks, pricing, speed, and features — June 2026</p>

      <AdUnit slot="4444444444" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Quick Winners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {winners.map(({ category, winner, why, color }) => (
            <div key={category} className={`border rounded-xl p-4 ${colorMap[color]}`}>
              <div className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-70">{category}</div>
              <div className="text-lg font-bold mb-1">{winner}</div>
              <div className="text-sm opacity-80">{why}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Full Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Feature</th>
                <th className="text-center py-3 px-4 font-bold text-blue-700 bg-blue-50">GLM 5.2</th>
                <th className="text-center py-3 px-4 font-bold text-orange-700">Claude Fable</th>
                <th className="text-center py-3 px-4 font-bold text-purple-700">Kimi 2.7</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <td className="py-3 px-4 font-medium text-gray-700">{row.feature}</td>
                  <td className="text-center py-3 px-4 bg-blue-50/40">{row.glm}</td>
                  <td className="text-center py-3 px-4">{row.fable}</td>
                  <td className="text-center py-3 px-4">{row.kimi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="5555555555" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Real-World Coding Test</h2>
        <p className="text-gray-600 mb-4">We gave all three models the same prompt: <em>&quot;Build a REST API in Python with FastAPI that handles CRUD for a todo list with SQLite.&quot;</em></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { model: "GLM 5.2", result: "Generated a Coding Plan first (5 files), then complete working code with tests. Minor import issue in test file.", score: "4.2/5", color: "blue" },
            { model: "Claude Fable", result: "Extended thinking produced clean architecture. Most complete output with error handling and migration scripts.", score: "4.6/5", color: "orange" },
            { model: "Kimi 2.7", result: "Fast output, working code, but no tests and minimal error handling. Good for quick prototypes.", score: "3.9/5", color: "purple" },
          ].map(({ model, result, score, color }) => (
            <div key={model} className={`border rounded-xl p-4 ${colorMap[color]}`}>
              <div className="font-bold mb-2">{model}</div>
              <div className="text-sm mb-3 opacity-90">{result}</div>
              <div className="font-bold text-lg">{score}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-3">Our Recommendation</h2>
        <ul className="space-y-2 text-blue-800 text-sm">
          <li><strong>Choose GLM 5.2</strong> if: you need a cheap coding API, want local deployment, or are running high-volume agentic tasks</li>
          <li><strong>Choose Claude Fable</strong> if: you need the absolute best quality and budget is not a constraint</li>
          <li><strong>Choose Kimi 2.7</strong> if: speed is critical and you want a Chinese-developed alternative to GLM</li>
        </ul>
      </section>
    </div>
  );
}
