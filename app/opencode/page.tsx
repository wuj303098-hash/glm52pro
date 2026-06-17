import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 + OpenCode Setup Guide 2026",
  description: "How to use GLM 5.2 as your OpenCode AI backend. Configuration, tips, and why GLM 5.2 is one of the best models for OpenCode.",
};

export default function OpenCodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 + OpenCode</h1>
      <p className="text-gray-500 mb-8">Configure GLM 5.2 as your OpenCode backend for cheap, high-quality AI-assisted coding</p>

      <AdUnit slot="4455667788" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Why GLM 5.2 for OpenCode?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { title: "53× cheaper than Fable", desc: "Run thousands of OpenCode sessions for the price of one Fable session" },
            { title: "Coding Plan built-in", desc: "GLM 5.2 plans multi-file edits before executing — ideal for OpenCode workflows" },
            { title: "Fast responses", desc: "~85 tokens/sec means less waiting between file edits" },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-blue-200 bg-blue-50 rounded-xl p-4">
              <div className="font-bold text-blue-900 mb-1">{title}</div>
              <div className="text-sm text-blue-700">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Setup via OpenRouter (Recommended)</h2>
        <div className="space-y-4">
          <div>
            <div className="font-semibold mb-2">1. Get an OpenRouter API key</div>
            <p className="text-sm text-gray-600">Sign up at openrouter.ai and add credits. GLM 5.2 output costs $0.28/M tokens.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">2. Configure OpenCode</div>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`# opencode.json
{
  "model": {
    "provider": "openai",
    "name": "zhipuai/glm-4",
    "baseURL": "https://openrouter.ai/api/v1",
    "apiKey": "sk-or-YOUR_KEY_HERE"
  }
}`}</pre>
          </div>
          <div>
            <div className="font-semibold mb-2">3. Start OpenCode</div>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm">opencode</pre>
          </div>
        </div>
      </section>

      <AdUnit slot="5566778899" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Setup via Z.ai (Direct)</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`# opencode.json (Z.ai direct)
{
  "model": {
    "provider": "openai",
    "name": "glm-4-plus",
    "baseURL": "https://open.bigmodel.cn/api/paas/v4",
    "apiKey": "YOUR_ZHIPU_API_KEY"
  }
}`}</pre>
        <p className="text-xs text-gray-400 mt-2">Get your API key at z.ai. Offers slightly lower latency than OpenRouter.</p>
      </section>

      <section className="bg-gray-50 rounded-xl p-5">
        <h3 className="font-bold text-gray-900 mb-3">Recommended OpenCode Settings for GLM 5.2</h3>
        <pre className="bg-white border border-gray-200 rounded-lg p-4 text-xs text-gray-700 overflow-x-auto">{`{
  "model": { ... },
  "autoshare": false,
  "keybinds": {
    "leader": "ctrl+x"
  }
}`}</pre>
      </section>
    </div>
  );
}
