import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 Benchmark Results 2026: Coding and Reasoning Scores",
  description:
    "GLM 5.2 benchmark overview with coding, reasoning, context, API access, and deployment notes for developers.",
};

const codingBench = [
  { model: "GLM 5.2", coding: "Strong", context: "1M tokens", access: "Z.ai, OpenRouter, HuggingFace", highlight: true },
  { model: "Claude Fable", coding: "Very strong", context: "200K", access: "Hosted APIs", highlight: false },
  { model: "Kimi 2.7", coding: "Strong", context: "Provider dependent", access: "Hosted APIs", highlight: false },
  { model: "GPT-4o", coding: "General-purpose", context: "Standard context", access: "OpenAI API", highlight: false },
];

const checks = [
  { label: "Long repository review", result: "GLM 5.2 benefits from the 1M-token context." },
  { label: "OpenCode-style configuration", result: "Use z-ai/glm-5.2 on OpenRouter or glm-5.2[1m] on Z.ai coding." },
  { label: "Local serving", result: "Use zai-org/GLM-5.2 with vLLM, SGLang, or Transformers." },
];

export default function BenchmarkPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 Benchmark Results</h1>
      <p className="text-gray-500 mb-8">
        Developer-oriented benchmark summary for coding workflows, context length, API access, and local deployment.
      </p>

      <AdUnit slot="1111111111" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Practical Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model</th>
                <th className="text-left py-3 px-4 font-semibold">Coding</th>
                <th className="text-left py-3 px-4 font-semibold">Context</th>
                <th className="text-left py-3 px-4 font-semibold">Access</th>
              </tr>
            </thead>
            <tbody>
              {codingBench.map((row) => (
                <tr key={row.model} className={`border-b border-gray-100 ${row.highlight ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                  <td className="py-3 px-4">{row.model}</td>
                  <td className="py-3 px-4">{row.coding}</td>
                  <td className="py-3 px-4">{row.context}</td>
                  <td className="py-3 px-4">{row.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="2222222222" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What the Benchmarks Mean</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {checks.map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-200 p-4">
              <div className="font-semibold text-gray-900 mb-1">{item.label}</div>
              <div className="text-sm text-gray-600">{item.result}</div>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="3333333333" />

      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">Verdict</h2>
        <p className="text-gray-700">
          GLM 5.2 is most compelling when benchmark quality is paired with practical access:
          1M-token context, OpenRouter model ID z-ai/glm-5.2, direct Z.ai APIs, and open weights at zai-org/GLM-5.2.
        </p>
      </section>
    </div>
  );
}
