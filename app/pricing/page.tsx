import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 API Pricing 2026: Z.ai and OpenRouter Costs",
  description:
    "GLM 5.2 API pricing breakdown for z-ai/glm-5.2, input/output token costs, 1M-token context, OpenRouter, and direct Z.ai API setup.",
};

const pricing = [
  { model: "GLM 5.2 (z-ai/glm-5.2)", input: "$1.20", output: "$4.10", context: "1M tokens", access: "OpenRouter", highlight: true },
  { model: "GLM 5.2 (glm-5.2)", input: "Check Z.ai", output: "Check Z.ai", context: "1M tokens", access: "Z.ai direct", highlight: false },
  { model: "Claude Fable", input: "$3.00", output: "$15.00", context: "200K", access: "API providers", highlight: false },
  { model: "GPT-4o", input: "$2.50", output: "$10.00", context: "1M", access: "OpenAI", highlight: false },
];

const channels = [
  { name: "Z.ai (Official)", url: "https://api.z.ai/api/paas/v4", notes: "Direct API with the glm-5.2 model ID" },
  { name: "Z.ai Coding", url: "https://api.z.ai/api/coding/paas/v4", notes: "Dedicated Coding Plan path for OpenCode-style workflows" },
  { name: "OpenRouter", url: "https://openrouter.ai/api/v1", notes: "Use model z-ai/glm-5.2 with OpenAI-compatible clients" },
  { name: "HuggingFace", url: "https://huggingface.co/zai-org/GLM-5.2", notes: "Open weights for local deployment and research" },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 API Pricing</h1>
      <p className="text-gray-500 mb-8">
        Prices per 1 million tokens. Last updated June 2026. Check official provider pages before production use.
      </p>

      <AdUnit slot="6666666666" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Price Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model</th>
                <th className="text-right py-3 px-4 font-semibold">Input / 1M</th>
                <th className="text-right py-3 px-4 font-semibold">Output / 1M</th>
                <th className="text-right py-3 px-4 font-semibold">Context</th>
                <th className="text-right py-3 px-4 font-semibold">Access</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row) => (
                <tr key={row.model} className={`border-b border-gray-100 ${row.highlight ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                  <td className="py-3 px-4">
                    {row.model}
                    {row.highlight && <span className="ml-2 text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full">featured</span>}
                  </td>
                  <td className="text-right py-3 px-4">{row.input}</td>
                  <td className="text-right py-3 px-4">{row.output}</td>
                  <td className="text-right py-3 px-4">{row.context}</td>
                  <td className="text-right py-3 px-4">{row.access}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          OpenRouter lists z-ai/glm-5.2 at $1.20 input and $4.10 output per 1M tokens, with 1M tokens of context.
        </p>
      </section>

      <AdUnit slot="7777777777" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Cost Calculator</h2>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <p className="text-sm text-gray-600">Example: 1,000 API calls, each with 2K input and 1K output tokens</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {[
              { model: "GLM 5.2", cost: "$6.50", highlight: true },
              { model: "Claude Fable", cost: "$21.00", highlight: false },
              { model: "GPT-4o", cost: "$15.00", highlight: false },
            ].map(({ model, cost, highlight }) => (
              <div key={model} className={`rounded-lg p-4 border ${highlight ? "border-blue-300 bg-blue-50" : "border-gray-200 bg-white"}`}>
                <div className="text-gray-500 mb-1">{model}</div>
                <div className={`text-2xl font-bold ${highlight ? "text-blue-700" : "text-gray-900"}`}>{cost}</div>
                <div className="text-xs text-gray-400">per 1,000 calls</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Where to Access GLM 5.2 API</h2>
        <div className="space-y-3">
          {channels.map(({ name, notes, url }) => (
            <div key={name} className="border border-gray-200 rounded-lg p-4 flex justify-between items-start">
              <div>
                <div className="font-semibold text-gray-900">{name}</div>
                <div className="text-sm text-gray-500 mt-0.5">{notes}</div>
                <div className="mt-1 font-mono text-xs text-gray-400">{url}</div>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full ml-4 shrink-0">Available</span>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="8888888888" />
    </div>
  );
}
