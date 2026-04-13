import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SyncOrSink",
  description: "Read the Privacy Policy for SyncOrSink to understand how we collect, use, and protect your data while playing our friendship test game.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "April 13, 2026";

  return (
    <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-slate-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              Welcome to SyncOrSink (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (syncorsink.app) and use our friendship test game.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
            <div className="space-y-4 text-slate-300">
              <p>We collect information that you voluntarily provide to us when you use the service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Account Information:</strong> If you sign in with Google, we collect your name, email address, and profile picture provided by Google.</li>
                <li><strong className="text-white">Game Data:</strong> We store your chosen display name and your answers to the &quot;would you rather&quot; questions to facilitate the game experience and calculate sync scores.</li>
                <li><strong className="text-white">Device Information:</strong> We may collect technical data such as IP addresses, browser types, and operating systems for security and analytical purposes.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
            <p className="text-slate-300 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Provide and maintain our Service (e.g., managing game rooms).</li>
              <li>Personalize your experience (e.g., showing your nickname in result cards).</li>
              <li>Analyze usage patterns to improve the game.</li>
              <li>Protect against unauthorized access or fraudulent activity.</li>
              <li>Display relevant advertisements via Google AdSense.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Third-Party Services</h2>
            <p className="text-slate-300 leading-relaxed">
              We use the following third-party services which have their own privacy policies:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong className="text-white">Google Auth & Firebase:</strong> Used for user authentication and real-time database management.</li>
              <li><strong className="text-white">Google AdSense:</strong> We use Google AdSense to serve ads on our site. Google uses cookies to serve ads based on a user&apos;s prior visits to your website or other websites.</li>
              <li><strong className="text-white">Vercel:</strong> Our hosting provider, which may collect server logs.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Data Security</h2>
            <p className="text-slate-300 leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <span className="text-primary font-bold">support@syncorsink.app</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
