import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GLM52.pro",
  description: "About GLM52.pro — an independent resource for GLM 5.2 benchmarks, pricing, and guides.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">About GLM52.pro</h1>
      <div className="text-gray-700 space-y-4">
        <p>
          <strong>GLM52.pro</strong> is an independent resource site dedicated to GLM 5.2, the coding-focused large language model developed by Zhipu AI (智谱AI).
        </p>
        <p>
          We provide benchmark data, API pricing comparisons, how-to guides, and model comparisons to help developers choose the right AI model for their use case.
        </p>
        <p>
          This site is <strong>not affiliated with, endorsed by, or connected to Zhipu AI</strong> in any way. All information is sourced from publicly available data including official documentation, community benchmarks, and independent testing.
        </p>
        <p>
          Our goal is to help developers make informed decisions about AI coding tools — covering setup, cost, and real-world performance.
        </p>
        <p className="text-sm text-gray-500 mt-6">
          For corrections or suggestions, please use the <a href="/contact" className="text-blue-600 hover:underline">contact page</a>.
        </p>
      </div>
    </div>
  );
}
