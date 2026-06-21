import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | GLM52.pro",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>
      <p className="text-gray-500 mb-8">Last updated: June 21, 2026</p>
      <div className="text-gray-700 space-y-4 text-sm">
        <p>
          <strong>GLM52.pro is an independent, third-party website.</strong> We are not affiliated with,
          endorsed by, sponsored by, or officially connected to Z.ai, Zhipu AI, or any subsidiaries.
        </p>
        <p>
          The name &quot;GLM 5.2&quot; and related trademarks are the property of their respective owners.
          Their use on this site is for informational and editorial purposes only.
        </p>
        <p>
          Benchmark scores, pricing data, and performance figures may change. Always verify with official sources
          before making purchasing or engineering decisions.
        </p>
        <p>This site may contain advertisements. The presence of an advertisement does not constitute an endorsement.</p>
        <p>For the most accurate and up-to-date information about GLM 5.2, visit z.ai and the official model pages.</p>
      </div>
    </div>
  );
}
