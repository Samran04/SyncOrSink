import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SyncOrSink",
  description: "Learn about how SyncOrSink uses cookies to improve your gaming experience.",
};

export default function CookiePolicy() {
  const lastUpdated = "April 13, 2026";

  return (
    <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Cookie <span className="text-primary">Policy</span>
          </h1>
          <p className="text-slate-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. What are Cookies?</h2>
            <p className="text-slate-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. How We Use Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              We use cookies for several reasons:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li><strong className="text-white">Authentication:</strong> To keep you signed in while you play with friends.</li>
              <li><strong className="text-white">Preferences:</strong> To remember your game settings and nicknames.</li>
              <li><strong className="text-white">Analytics:</strong> To understand how our users interact with the game so we can improve it.</li>
              <li><strong className="text-white">Advertising:</strong> Google AdSense uses cookies to serve ads based on your visits to this and other websites.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Types of Cookies We Use</h2>
            <div className="space-y-4 text-slate-300">
              <p><strong className="text-white">Essential Cookies:</strong> These are necessary for the website to function (e.g., Firebase Auth cookies).</p>
              <p><strong className="text-white">Performance Cookies:</strong> These collect information about how you use our site.</p>
              <p><strong className="text-white">Targeting/Advertising Cookies:</strong> These are used to deliver ads more relevant to you and your interests.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Managing Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can delete all cookies currently on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Third-Party Cookies</h2>
            <p className="text-slate-300 leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and deliver advertisements on and through the Service. Specifically, Google is a third-party vendor that uses cookies to serve ads on SyncOrSink.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. More Information</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at <span className="text-primary font-bold">support@syncorsink.app</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
