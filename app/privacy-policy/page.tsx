import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GLM52.pro",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: June 21, 2026</p>
      <div className="text-gray-700 space-y-6 text-sm">
        <section>
          <h2 className="text-lg font-bold mb-2">1. Information We Collect</h2>
          <p>
            GLM52.pro does not collect personal information directly. We use analytics and advertising services,
            which may collect anonymized usage data such as pages visited, browser type, and approximate location.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">2. Cookies</h2>
          <p>
            This site may use cookies through analytics or advertising providers. You can manage cookies in your browser settings.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">3. Third-Party Advertising</h2>
          <p>
            Advertising providers may use cookies to serve ads based on prior visits to this and other websites.
            You can opt out at <a href="https://optout.aboutads.info" className="text-blue-600 hover:underline">optout.aboutads.info</a>.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">4. Data Retention</h2>
          <p>We do not store personal data on our own servers.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">5. Contact</h2>
          <p>
            Privacy questions: <a href="mailto:hello@glm52.pro" className="text-blue-600 hover:underline">hello@glm52.pro</a>
          </p>
        </section>
      </div>
    </div>
  );
}
