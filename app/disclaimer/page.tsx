import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — GLM52.pro",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>
      <p className="text-gray-500 mb-8">Last updated: June 17, 2026</p>
      <div className="text-gray-700 space-y-4 text-sm">
        <p><strong>GLM52.pro is an independent, third-party website.</strong> We are not affiliated with, endorsed by, sponsored by, or in any way officially connected to Zhipu AI or any of its subsidiaries.</p>
        <p>The name &quot;GLM 5.2&quot; and related trademarks are the property of Zhipu AI. Their use on this site is for informational and editorial purposes only.</p>
        <p>Benchmark scores, pricing data, and performance figures on this site are sourced from publicly available information and independent testing. They may not reflect current or official values. Always verify with official sources before making purchasing or engineering decisions.</p>
        <p>This site contains advertisements served by Google AdSense. The presence of an advertisement does not constitute an endorsement of the advertiser&apos;s products or services.</p>
        <p>For the most accurate and up-to-date information about GLM 5.2, visit the official Zhipu AI website at z.ai.</p>
      </div>
    </div>
  );
}
