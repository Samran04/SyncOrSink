import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SyncOrSink",
  description: "Review the Terms of Service for SyncOrSink, the ultimate friendship test game.",
};

export default function TermsOfService() {
  const lastUpdated = "April 13, 2026";

  return (
    <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Terms of <span className="text-accent">Service</span>
          </h1>
          <p className="text-slate-400 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing or using SyncOrSink (the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Use License</h2>
            <p className="text-slate-300 leading-relaxed">
              SyncOrSink grants you a personal, non-exclusive, non-transferable, revocable license to use the Service for your own personal, non-commercial purposes.
            </p>
            <p className="text-slate-300 leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Modify, copy, or create derivative works based on the Service.</li>
              <li>Use the Service for any commercial purpose or for any public display.</li>
              <li>Attempt to decompile or reverse engineer any software contained in the Service.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. User Conduct</h2>
            <p className="text-slate-300 leading-relaxed">
              You are responsible for your conduct while using the Service. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Use the Service for any unlawful purpose.</li>
              <li>Post or transmit any content that is offensive, harmful, or violates others&apos; rights.</li>
              <li>Interfere with or disrupt the security or integrity of the Service.</li>
              <li>Impersonate any person or entity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Disclaimer</h2>
            <p className="text-slate-300 leading-relaxed italic border-l-4 border-slate-700 pl-4 bg-slate-900/50 py-4">
              The Service is provided &quot;as is&quot;. SyncOrSink makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Limitations</h2>
            <p className="text-slate-300 leading-relaxed">
              In no event shall SyncOrSink or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Changes to Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Governing Law</h2>
            <p className="text-slate-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the Service operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
