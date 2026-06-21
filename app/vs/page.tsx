import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 vs Claude Fable vs Kimi 2.7: Coding Model Comparison 2026",
  description:
    "Detailed comparison of GLM 5.2, Claude Fable, and Kimi 2.7 across context, API access, pricing, coding workflow, and local deployment.",
};

const compareRows = [
  { feature: "Developer", glm: "Z.ai / Zhipu AI", fable: "Anthropic", kimi: "Moonshot AI" },
  { feature: "Context window", glm: "1M tokens", fable: "200K", kimi: "Varies by provider" },
  { feature: "OpenRouter model", glm: "z-ai/glm-5.2", fable: "Provider-specific", kimi: "Provider-specific" },
  { feature: "Input price on OpenRouter", glm: "$1.20 / 1M", fable: "$3.00 / 1M", kimi: "Varies" },
  { feature: "Output price on OpenRouter", glm: "$4.10 / 1M", fable: "$15.00 / 1M", kimi: "Varies" },
  { feature: "Open weights", glm: "zai-org/GLM-5.2", fable: "No", kimi: "No" },
  { feature: "Local deployment", glm: "vLLM, SGLang, Transformers", fable: "API only", kimi: "API focused" },
  { feature: "OpenCode fit", glm: "Strong", fable: "Strong", kimi: "Useful for lighter tasks" },
];

const winners = [
  { category: "Best long context", winner: "GLM 5.2", why: "1M-token context is the main technical differentiator." },
  { category: "Best direct coding setup", winner: "GLM 5.2", why: "Z.ai exposes a dedicated coding endpoint for agentic workflows." },
  { category: "Best broad ecosystem", winner: "Claude Fable", why: "Claude-style tool integrations remain mature in many coding products." },
  { category: "Best local option", winner: "GLM 5.2", why: "Open weights are available through zai-org/GLM-5.2." },
];

export default function VsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 vs Claude Fable vs Kimi 2.7</h1>
      <p className="text-gray-500 mb-8">
        A practical comparison for developers choosing an API model for coding, long-context work, and OpenCode-style workflows.
      </p>

      <AdUnit slot="4444444444" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Quick Winners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {winners.map(({ category, winner, why }) => (
            <div key={category} className="border border-blue-200 bg-blue-50 rounded-xl p-4">
              <div className="text-xs font-semibold uppercase tracking-wide mb-1 text-blue-700">{category}</div>
              <div className="text-lg font-bold text-blue-950 mb-1">{winner}</div>
              <div className="text-sm text-blue-800">{why}</div>
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
                <th className="text-center py-3 px-4 font-bold text-gray-700">Claude Fable</th>
                <th className="text-center py-3 px-4 font-bold text-gray-700">Kimi 2.7</th>
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

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-3">Recommendation</h2>
        <p className="text-blue-800">
          Choose GLM 5.2 when long context, OpenRouter access, direct Z.ai API access,
          and local deployment all matter. Choose Claude Fable when your workflow is
          already deeply tied to Claude-specific tools and quality is the only constraint.
        </p>
      </section>
    </div>
  );
}
