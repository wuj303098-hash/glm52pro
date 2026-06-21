import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 + OpenCode Setup Guide 2026",
  description:
    "Updated OpenCode configuration for GLM 5.2 using OpenRouter z-ai/glm-5.2 or the direct Z.ai coding endpoint.",
};

export default function OpenCodePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 + OpenCode</h1>
      <p className="text-gray-500 mb-8">
        Configure GLM 5.2 as your OpenCode backend through OpenRouter or the direct Z.ai coding API.
      </p>

      <AdUnit slot="4455667788" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Why GLM 5.2 for OpenCode?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { title: "1M context", desc: "Use the 1M-token context window for larger repositories and long coding sessions" },
            { title: "Coding Plan endpoint", desc: "Z.ai exposes a dedicated coding endpoint for agentic coding workflows" },
            { title: "OpenRouter option", desc: "Use z-ai/glm-5.2 when you want unified billing and provider routing" },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-blue-200 bg-blue-50 rounded-xl p-4">
              <div className="font-bold text-blue-900 mb-1">{title}</div>
              <div className="text-sm text-blue-700">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Setup via OpenRouter</h2>
        <div className="space-y-4">
          <div>
            <div className="font-semibold mb-2">1. Get an OpenRouter API key</div>
            <p className="text-sm text-gray-600">
              Sign up at openrouter.ai and add credits. Use model z-ai/glm-5.2.
              Current listed pricing is $1.20/M input and $4.10/M output tokens.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">2. Configure OpenCode</div>
            <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`# opencode.json
{
  "model": {
    "provider": "openai",
    "name": "z-ai/glm-5.2",
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
        <h2 className="text-2xl font-bold mb-4">Setup via Z.ai Coding API</h2>
        <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">{`# opencode.json (Z.ai direct)
{
  "model": {
    "provider": "openai",
    "name": "glm-5.2[1m]",
    "baseURL": "https://api.z.ai/api/coding/paas/v4",
    "apiKey": "YOUR_ZAI_API_KEY"
  }
}`}</pre>
        <p className="text-xs text-gray-400 mt-2">
          Use the Z.ai coding endpoint when you want the dedicated Coding Plan path.
          For general chat completions, use https://api.z.ai/api/paas/v4.
        </p>
      </section>

      <section className="bg-gray-50 rounded-xl p-5">
        <h3 className="font-bold text-gray-900 mb-3">Recommended OpenCode Settings for GLM 5.2</h3>
        <pre className="bg-white border border-gray-200 rounded-lg p-4 text-xs text-gray-700 overflow-x-auto">{`{
  "model": {
    "provider": "openai",
    "name": "z-ai/glm-5.2",
    "baseURL": "https://openrouter.ai/api/v1",
    "apiKey": "sk-or-YOUR_KEY_HERE"
  },
  "autoshare": false,
  "keybinds": {
    "leader": "ctrl+x"
  }
}`}</pre>
      </section>
    </div>
  );
}
