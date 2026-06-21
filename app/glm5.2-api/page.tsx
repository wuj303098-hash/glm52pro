import type { Metadata } from "next";
import Link from "next/link";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM5.2 API Guide: Endpoint, Model ID, 1M Context and Pricing",
  description:
    "Current GLM5.2 API setup guide with Z.ai endpoint, glm-5.2 model ID, OpenRouter z-ai/glm-5.2 ID, 1M-token context, and examples.",
};

const facts = [
  { label: "Official API model", value: "glm-5.2" },
  { label: "OpenRouter model", value: "z-ai/glm-5.2" },
  { label: "Context window", value: "1M-token context" },
  { label: "OpenRouter input", value: "$1.20 / 1M tokens" },
  { label: "OpenRouter output", value: "$4.10 / 1M tokens" },
  { label: "Open weights", value: "zai-org/GLM-5.2" },
];

export default function GlmApiPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-gray-950">GLM5.2 API</h1>
      <p className="mb-8 max-w-3xl text-gray-600">
        GLM 5.2 is Z.ai&apos;s long-context coding and reasoning model. Use the
        official Z.ai API for direct access, or OpenRouter when you want a
        single OpenAI-compatible provider layer.
      </p>

      <AdUnit slot="1212121212" />

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Current API Facts</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {facts.map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-gray-200 p-4">
              <div className="mb-1 text-sm text-gray-500">{label}</div>
              <div className="font-semibold text-gray-950">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Z.ai Chat Completions</h2>
        <p className="mb-4 text-gray-600">
          The official OpenAI-compatible base URL is{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5">https://api.z.ai/api/paas/v4</code>.
          For chat completions, call the full endpoint below with the model{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5">glm-5.2</code>.
        </p>
        <pre className="overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm text-green-300">{`curl https://api.z.ai/api/paas/v4/chat/completions \\
  -H "Authorization: Bearer $ZAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "glm-5.2",
    "messages": [
      {"role": "user", "content": "Plan and implement a small TypeScript API."}
    ]
  }'`}</pre>
      </section>

      <AdUnit slot="1313131313" />

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">JavaScript Example</h2>
        <pre className="overflow-x-auto rounded-xl bg-gray-950 p-5 text-sm text-green-300">{`const response = await fetch("https://api.z.ai/api/paas/v4/chat/completions", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.ZAI_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "glm-5.2",
    messages: [
      { role: "user", content: "Summarize this repository migration plan." }
    ],
  }),
});

const data = await response.json();
console.log(data.choices[0].message.content);`}</pre>
      </section>

      <section className="mb-10 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <h2 className="mb-3 text-xl font-bold text-blue-950">When to Use OpenRouter</h2>
        <p className="text-blue-800">
          Use OpenRouter when your app already speaks the OpenAI API shape and
          you want the model ID <strong>z-ai/glm-5.2</strong>, unified billing,
          fallbacks, and fast provider switching. Current OpenRouter pricing is
          <strong> $1.20</strong> input and <strong>$4.10</strong> output per
          million tokens.
        </p>
        <Link className="mt-4 inline-block font-semibold text-blue-700 hover:underline" href="/openrouter">
          Read the OpenRouter setup
        </Link>
      </section>
    </div>
  );
}
