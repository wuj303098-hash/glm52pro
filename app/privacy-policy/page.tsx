import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GLM52.pro",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: June 17, 2026</p>
      <div className="text-gray-700 space-y-6 text-sm">
        <section>
          <h2 className="text-lg font-bold mb-2">1. Information We Collect</h2>
          <p>GLM52.pro does not collect personal information directly. We use Google Analytics and Google AdSense, which may collect anonymized usage data such as pages visited, browser type, and approximate location.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">2. Cookies</h2>
          <p>This site uses cookies through Google AdSense to serve relevant advertisements. These cookies are set by Google and governed by Google&apos;s privacy policy. You can opt out via Google&apos;s Ad Settings.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">3. Third-Party Advertising</h2>
          <p>We use Google AdSense to display ads. Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out at <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">google.com/settings/ads</a>.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">4. Data Retention</h2>
          <p>We do not store personal data on our servers. Analytics data is retained per Google Analytics default settings (26 months).</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">5. Your Rights</h2>
          <p>You have the right to opt out of personalized advertising. Visit <a href="https://optout.aboutads.info" className="text-blue-600 hover:underline">optout.aboutads.info</a> or use your browser&apos;s privacy controls.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-2">6. Contact</h2>
          <p>Privacy questions: <a href="mailto:hello@glm52.pro" className="text-blue-600 hover:underline">hello@glm52.pro</a></p>
        </section>
      </div>
    </div>
  );
}
