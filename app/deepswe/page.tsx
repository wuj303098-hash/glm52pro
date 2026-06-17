import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 vs DeepSWE — Coding Agent Comparison 2026",
  description: "Compare GLM 5.2 and DeepSWE on SWE-bench, coding tasks, API cost, and real-world use cases. Which AI coding agent should you use?",
};

const compare = [
  { feature: "Type", glm: "General + Coding LLM", deep: "Specialized SWE Agent" },
  { feature: "SWE-bench Verified", glm: "51.2%", deep: "~57% (reported)" },
  { feature: "HumanEval", glm: "92.1%", deep: "N/A (agent, not chat)" },
  { feature: "API Cost (output)", glm: "$0.28 / 1M tok", deep: "Higher (agent overhead)" },
  { feature: "Local deployment", glm: "✅ Ollama / HuggingFace", deep: "❌ API only" },
  { feature: "Chat interface", glm: "✅ Full chat + code", deep: "⚠️ Task-focused only" },
  { feature: "OpenCode compatible", glm: "✅", deep: "❌" },
  { feature: "Best for", glm: "General coding + chat", deep: "Automated repo-level fixes" },
];

export default function DeepSWEPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 vs DeepSWE</h1>
      <p className="text-gray-500 mb-8">Two different approaches to AI-assisted coding — here&apos;s how they compare</p>

      <AdUnit slot="7788990011" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What is DeepSWE?</h2>
        <div className="text-gray-700 space-y-3">
          <p>
            <strong>DeepSWE</strong> is a specialized AI coding <em>agent</em> optimized for solving real GitHub issues autonomously. Unlike GLM 5.2 which is a general-purpose LLM with strong coding capabilities, DeepSWE is designed to operate like a software engineer: reading repos, writing patches, and running tests — all without human input.
          </p>
          <p>
            It scores highly on <strong>SWE-bench Verified</strong>, a benchmark that tests whether an AI can fix real open-source bugs. However, it is not a conversational model — you can&apos;t chat with it, use it in OpenCode, or run it locally.
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

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">When to Use Each</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="font-bold text-blue-900 mb-3">Choose GLM 5.2 when:</div>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• You want to <strong>chat + code</strong> interactively</li>
              <li>• Using <strong>OpenCode, Cursor, or API</strong> in your workflow</li>
              <li>• You need <strong>local / offline</strong> capability</li>
              <li>• Budget matters — cheap per token</li>
              <li>• You want a <strong>general assistant</strong> that also codes well</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <div className="font-bold text-purple-900 mb-3">Choose DeepSWE when:</div>
            <ul className="text-sm text-purple-800 space-y-2">
              <li>• You want <strong>fully autonomous</strong> bug fixing</li>
              <li>• You have a <strong>GitHub repo</strong> with issues to resolve</li>
              <li>• You can hand off a task and come back later</li>
              <li>• SWE-bench score is your primary metric</li>
              <li>• You don&apos;t need interactive conversation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-2">Bottom Line</h2>
        <p className="text-gray-700">
          GLM 5.2 and DeepSWE solve different problems. <strong>GLM 5.2 is a coding-first LLM</strong> you integrate into your daily workflow. <strong>DeepSWE is an autonomous agent</strong> for batch issue resolution. Most developers will find GLM 5.2 more versatile — it handles 90% of coding tasks interactively at a fraction of the cost, and also runs locally.
        </p>
      </section>

      <AdUnit slot="9900112233" />
    </div>
  );
}
