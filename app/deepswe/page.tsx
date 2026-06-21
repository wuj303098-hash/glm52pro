import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 vs DeepSWE: Coding Agent Comparison 2026",
  description:
    "Compare GLM 5.2 and DeepSWE on coding tasks, API access, OpenCode compatibility, local deployment, and real-world use cases.",
};

const compare = [
  { feature: "Type", glm: "General and coding LLM", deep: "Specialized SWE agent" },
  { feature: "Context", glm: "1M tokens", deep: "Task dependent" },
  { feature: "API cost", glm: "$1.20 input / $4.10 output on OpenRouter", deep: "Agent overhead varies" },
  { feature: "Local deployment", glm: "vLLM, SGLang, Transformers", deep: "API focused" },
  { feature: "Chat interface", glm: "Full chat and code", deep: "Task-focused" },
  { feature: "OpenCode compatible", glm: "Yes", deep: "No" },
  { feature: "Best for", glm: "General coding and chat", deep: "Automated repo-level fixes" },
];

export default function DeepSWEPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 vs DeepSWE</h1>
      <p className="text-gray-500 mb-8">Two different approaches to AI-assisted coding.</p>

      <AdUnit slot="7788990011" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What is DeepSWE?</h2>
        <div className="text-gray-700 space-y-3">
          <p>
            DeepSWE is a specialized AI coding agent optimized for solving repository issues autonomously.
            GLM 5.2 is a long-context LLM that can be used interactively through chat, OpenCode, direct APIs, or local serving.
          </p>
          <p>
            The practical choice depends on the workflow. Use DeepSWE for autonomous issue resolution.
            Use GLM 5.2 when you need a model inside an everyday coding workflow.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Feature</th>
                <th className="text-center py-3 px-4 font-bold text-blue-700 bg-blue-50">GLM 5.2</th>
                <th className="text-center py-3 px-4 font-bold text-purple-700">DeepSWE</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row, i) => (
                <tr key={row.feature} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <td className="py-3 px-4 font-medium text-gray-700">{row.feature}</td>
                  <td className="text-center py-3 px-4 bg-blue-50/40">{row.glm}</td>
                  <td className="text-center py-3 px-4">{row.deep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <AdUnit slot="8899001122" />

      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-2">Bottom Line</h2>
        <p className="text-gray-700">
          GLM 5.2 and DeepSWE solve different problems. GLM 5.2 is a coding-first LLM for chat,
          OpenCode, APIs, and local serving. DeepSWE is an autonomous agent for batch issue resolution.
        </p>
      </section>

      <AdUnit slot="9900112233" />
    </div>
  );
}
