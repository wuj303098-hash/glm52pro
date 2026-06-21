import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 on OpenRouter: z-ai/glm-5.2 Setup Guide",
  description:
    "Use GLM 5.2 on OpenRouter with model ID z-ai/glm-5.2, OpenAI-compatible base URL, 1M-token context, reasoning support, and pricing notes.",
};

export default function OpenRouterPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-gray-950">GLM 5.2 on OpenRouter</h1>
      <p className="mb-8 max-w-3xl text-gray-600">
        OpenRouter exposes GLM 5.2 through the OpenAI-compatible API using the
        model ID <strong>z-ai/glm-5.2</strong>. It is a good fit for apps that
        already route multiple LLM providers through one endpoint.
      </p>

      <AdUnit slot="1414141414" />

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {[
          { label: "Model ID", value: "z-ai/glm-5.2" },
          { label: "Base URL", value: "https://openrouter.ai/api/v1" },
          { label: "Context", value: "1M-token context" },
          { label: "Input price", value: "$1.20 / 1M tokens" },
          { label: "Output price", value: "$4.10 / 1M tokens" },
          { label: "Good for", value: "reasoning and coding" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-gray-200 p-4">
            <div className="mb-1 text-sm text-gray-500">{label}</div>
            <div className="font-semibold text-gray-950">{value}</div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">OpenAI-Compatible Request</h2>
        <pre className="overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm text-green-300">{`curl https://openrouter.ai/api/v1/chat/completions \\
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "z-ai/glm-5.2",
    "messages": [
      {"role": "user", "content": "Reason through this bug and propose a patch."}
    ],
    "reasoning": { "enabled": true }
  }'`}</pre>
      </section>

      <AdUnit slot="1515151515" />

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Node.js Fetch Example</h2>
        <pre className="overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm text-green-300">{`const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.OPENROUTER_API_KEY}\`,
    "Content-Type": "application/json",
    "HTTP-Referer": "https://glm52.pro",
    "X-Title": "GLM52.pro",
  },
  body: JSON.stringify({
    model: "z-ai/glm-5.2",
    messages: [{ role: "user", content: "Write a migration checklist." }],
    reasoning: { enabled: true },
  }),
});

console.log(await result.json());`}</pre>
      </section>

      <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <h2 className="mb-3 text-xl font-bold">OpenRouter vs Direct Z.ai</h2>
        <div className="grid gap-4 text-sm md:grid-cols-2">
          <div>
            <div className="mb-1 font-semibold">Choose OpenRouter when</div>
            <p className="text-gray-600">
              You want unified billing, quick provider switching, simple model
              routing, and a familiar OpenAI-compatible base URL.
            </p>
          </div>
          <div>
            <div className="mb-1 font-semibold">Choose Z.ai direct when</div>
            <p className="text-gray-600">
              You want the official platform endpoint, direct account support,
              and access to the dedicated Coding Plan endpoint for OpenCode.
            </p>
          </div>
        </div>
        <Link className="mt-4 inline-block font-semibold text-blue-700 hover:underline" href="/glm5.2-api">
          Compare with the GLM5.2 API guide
        </Link>
      </section>
    </div>
  );
}
