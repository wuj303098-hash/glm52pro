import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 Benchmark Results 2026 — Coding & Reasoning Scores",
  description: "Full GLM 5.2 benchmark results: HumanEval, LiveCodeBench, MATH, MMLU. Compare vs Claude Fable, Kimi 2.7, GPT-4o and more.",
};

const codingBench = [
  { model: "GLM 5.2", humanEval: "92.1", liveCode: "68.4", swe: "51.2", highlight: true },
  { model: "Claude Fable", humanEval: "94.3", liveCode: "71.2", swe: "55.1", highlight: false },
  { model: "Kimi 2.7", humanEval: "90.8", liveCode: "66.9", swe: "49.7", highlight: false },
  { model: "GPT-4o", humanEval: "90.2", liveCode: "63.4", swe: "48.9", highlight: false },
  { model: "Qwen 2.5 Coder", humanEval: "88.5", liveCode: "61.2", swe: "44.3", highlight: false },
];

const generalBench = [
  { model: "GLM 5.2", mmlu: "88.4", math: "82.1", gpqa: "65.3", highlight: true },
  { model: "Claude Fable", mmlu: "91.2", math: "85.6", gpqa: "69.7", highlight: false },
  { model: "Kimi 2.7", mmlu: "87.9", math: "80.3", gpqa: "63.1", highlight: false },
  { model: "GPT-4o", mmlu: "88.7", math: "76.6", gpqa: "53.6", highlight: false },
  { model: "Qwen 2.5 Coder", mmlu: "84.1", math: "75.9", gpqa: "57.2", highlight: false },
];

const speedBench = [
  { model: "GLM 5.2", tokensPerSec: "~85", ttft: "~0.6s", highlight: true },
  { model: "Claude Fable", tokensPerSec: "~70", ttft: "~0.8s", highlight: false },
  { model: "Kimi 2.7", tokensPerSec: "~90", ttft: "~0.5s", highlight: false },
  { model: "GPT-4o", tokensPerSec: "~65", ttft: "~0.9s", highlight: false },
];

export default function BenchmarkPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 Benchmark Results</h1>
      <p className="text-gray-500 mb-2">Last updated: June 2026 · Sources: HuggingFace Open LLM Leaderboard, Artificial Analysis, LiveCodeBench</p>
      <div className="inline-block bg-yellow-50 text-yellow-800 text-xs px-3 py-1 rounded-full mb-8">
        Scores are aggregated from public leaderboards. Independent results may vary.
      </div>

      <AdUnit slot="1111111111" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-1">Coding Benchmarks</h2>
        <p className="text-gray-500 text-sm mb-4">HumanEval (pass@1), LiveCodeBench, SWE-bench Verified</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model</th>
                <th className="text-right py-3 px-4 font-semibold">HumanEval</th>
                <th className="text-right py-3 px-4 font-semibold">LiveCodeBench</th>
                <th className="text-right py-3 px-4 font-semibold">SWE-bench</th>
              </tr>
            </thead>
            <tbody>
              {codingBench.map((row) => (
                <tr key={row.model} className={`border-b border-gray-100 ${row.highlight ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                  <td className="py-3 px-4">{row.model}{row.highlight && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full">this model</span>}</td>
                  <td className="text-right py-3 px-4">{row.humanEval}%</td>
                  <td className="text-right py-3 px-4">{row.liveCode}%</td>
                  <td className="text-right py-3 px-4">{row.swe}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="2222222222" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-1">General Intelligence Benchmarks</h2>
        <p className="text-gray-500 text-sm mb-4">MMLU, MATH-500, GPQA Diamond</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model</th>
                <th className="text-right py-3 px-4 font-semibold">MMLU</th>
                <th className="text-right py-3 px-4 font-semibold">MATH-500</th>
                <th className="text-right py-3 px-4 font-semibold">GPQA</th>
              </tr>
            </thead>
            <tbody>
              {generalBench.map((row) => (
                <tr key={row.model} className={`border-b border-gray-100 ${row.highlight ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                  <td className="py-3 px-4">{row.model}{row.highlight && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full">this model</span>}</td>
                  <td className="text-right py-3 px-4">{row.mmlu}%</td>
                  <td className="text-right py-3 px-4">{row.math}%</td>
                  <td className="text-right py-3 px-4">{row.gpqa}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-1">Speed (API)</h2>
        <p className="text-gray-500 text-sm mb-4">Output tokens/sec and Time to First Token via OpenRouter — June 2026</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model</th>
                <th className="text-right py-3 px-4 font-semibold">Tokens/sec</th>
                <th className="text-right py-3 px-4 font-semibold">TTFT</th>
              </tr>
            </thead>
            <tbody>
              {speedBench.map((row) => (
                <tr key={row.model} className={`border-b border-gray-100 ${row.highlight ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                  <td className="py-3 px-4">{row.model}{row.highlight && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full">this model</span>}</td>
                  <td className="text-right py-3 px-4">{row.tokensPerSec}</td>
                  <td className="text-right py-3 px-4">{row.ttft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="3333333333" />

      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">Verdict</h2>
        <p className="text-gray-700">
          GLM 5.2 is a <strong>top-3 coding model</strong> as of June 2026. It trails Claude Fable slightly on SWE-bench but beats it on price per token. For pure coding tasks — especially multi-file projects using the Coding Plan feature — it is highly competitive. If budget is a priority, GLM 5.2 offers the best value among the top-tier coding models.
        </p>
      </section>
    </div>
  );
}
