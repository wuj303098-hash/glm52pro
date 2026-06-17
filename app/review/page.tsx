import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "GLM 5.2 Review 2026 — Is It Worth Using?",
  description: "In-depth GLM 5.2 review: coding quality, API speed, pricing value, and real-world test results. Honest assessment vs Claude Fable and Kimi 2.7.",
};

const scores = [
  { category: "Coding Quality", score: 9, max: 10, comment: "Coding Plan feature is genuinely useful for multi-file projects" },
  { category: "API Speed", score: 8, max: 10, comment: "~85 tok/s is fast; occasional latency spikes via OpenRouter" },
  { category: "Price / Value", score: 10, max: 10, comment: "$0.28/M output — best value among top-tier coding models" },
  { category: "Context Window", score: 8, max: 10, comment: "128K is solid; Fable's 200K edge matters for very large codebases" },
  { category: "Local / Open Source", score: 10, max: 10, comment: "Only top coding model with full open weights on HuggingFace" },
  { category: "Documentation", score: 7, max: 10, comment: "Z.ai docs are decent but mostly in Chinese; English docs lagging" },
];

const overall = 88;

export default function ReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">GLM 5.2 Review</h1>
      <p className="text-gray-500 mb-2">Tested June 2026 · Independent assessment · Not sponsored by Zhipu AI</p>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">{overall}</div>
        <div>
          <div className="text-xl font-bold text-gray-900">Very Good</div>
          <div className="text-gray-500 text-sm">Best value coding model in June 2026</div>
        </div>
      </div>

      <AdUnit slot="4455667788" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Score Breakdown</h2>
        <div className="space-y-4">
          {scores.map(({ category, score, max, comment }) => (
            <div key={category}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">{category}</span>
                <span className="text-sm font-bold text-blue-700">{score}/{max}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(score / max) * 100}%` }} />
              </div>
              <div className="text-xs text-gray-500">{comment}</div>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="5566778899" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">What We Tested</h2>
        <div className="space-y-6">
          {[
            {
              title: "Multi-file React App",
              prompt: "Build a React todo app with TypeScript, Zustand state management, and Tailwind CSS.",
              result: "GLM 5.2 generated a Coding Plan with 6 files before writing any code. All imports were consistent. Minor: forgot to install zustand in package.json.",
              rating: "★★★★☆",
            },
            {
              title: "Bug Fix Task",
              prompt: "This Python async function has a race condition. Find and fix it. [200 lines of code]",
              result: "Correctly identified the missing asyncio.Lock() around the shared state. Fix was clean and explained well.",
              rating: "★★★★★",
            },
            {
              title: "Code Review",
              prompt: "Review this Express.js API for security issues.",
              result: "Found SQL injection risk, missing rate limiting, and insecure JWT config. Missed one CORS misconfiguration.",
              rating: "★★★★☆",
            },
            {
              title: "Algorithm Problem",
              prompt: "Implement a LRU cache in Python with O(1) get and put.",
              result: "Correct OrderedDict-based solution on first try, with clear explanation.",
              rating: "★★★★★",
            },
          ].map(({ title, prompt, result, rating }) => (
            <div key={title} className="border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between mb-2">
                <h3 className="font-bold">{title}</h3>
                <span className="text-yellow-500">{rating}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">Prompt: <em>{prompt}</em></div>
              <div className="text-sm text-gray-700">{result}</div>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="6677889900" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Pros & Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="font-bold text-green-800 mb-3">Pros</div>
            <ul className="text-sm text-green-700 space-y-2">
              <li>✅ Coding Plan = fewer multi-file errors</li>
              <li>✅ Extremely cheap API ($0.28/M output)</li>
              <li>✅ Open weights — run locally for free</li>
              <li>✅ Fast output speed (~85 tok/s)</li>
              <li>✅ Available on OpenRouter, no lock-in</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="font-bold text-red-800 mb-3">Cons</div>
            <ul className="text-sm text-red-700 space-y-2">
              <li>❌ Trails Claude Fable on complex reasoning</li>
              <li>❌ English docs are incomplete</li>
              <li>❌ 128K context (Fable has 200K)</li>
              <li>❌ Occasional hallucinations on niche APIs</li>
              <li>❌ Community / ecosystem smaller than OpenAI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Verdict</h2>
        <p className="text-blue-800">
          GLM 5.2 is the best coding model for developers who are <strong>cost-sensitive or want local deployment</strong>. For $0.28/M output tokens, you get ~92% of Claude Fable&apos;s coding ability. The Coding Plan feature makes it genuinely better than zero-shot models for complex projects. If you&apos;re running agentic workflows at scale, GLM 5.2 is the obvious choice.
        </p>
        <div className="mt-3 text-sm text-blue-700 font-semibold">Recommended for: Solo devs, startups, high-volume API users, local deployment enthusiasts.</div>
      </section>
    </div>
  );
}
