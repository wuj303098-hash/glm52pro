import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | GLM52.pro",
  description: "Contact the GLM52.pro team for corrections, suggestions, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="text-gray-700 space-y-4 mb-8">
        <p>For corrections, data updates, or general inquiries, please reach out via email.</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:hello@glm52.pro" className="text-blue-600 hover:underline">
            hello@glm52.pro
          </a>
        </p>
        <p className="text-sm text-gray-500">
          We typically respond within 2-3 business days. For urgent benchmark corrections, please include a source link.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-600">
        <p className="font-semibold mb-2">Please note:</p>
        <ul className="space-y-1 list-disc pl-4">
          <li>We are not affiliated with Zhipu AI. For official support, contact them directly at z.ai.</li>
          <li>We do not offer API access or model hosting.</li>
          <li>Advertising and sponsorship inquiries are welcome.</li>
        </ul>
      </div>
    </div>
  );
}
