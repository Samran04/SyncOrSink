import type { Metadata } from "next";
import { Mail, MessageSquare, Bug, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | SyncOrSink",
  description: "Have a question or feedback about SyncOrSink? Contact us today for support, bug reports, or partnership inquiries.",
};

export default function Contact() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Got an idea, a bug report, or a burning question about your results? We&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Support Email */}
          <a 
            href="mailto:support@syncorsink.app" 
            className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Support</h3>
            <p className="text-slate-400 text-sm mb-4">Email us directly for any account issues or sensitive inquiries.</p>
            <span className="text-primary font-bold text-sm">support@syncorsink.app →</span>
          </a>

          {/* Social / IG */}
          <a 
            href="https://instagram.com/syncorsink" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-accent/50 transition-all hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Social Hub</h3>
            <p className="text-slate-400 text-sm mb-4">Send us a DM or tag us in your hilarious result roasts!</p>
            <span className="text-accent font-bold text-sm">@syncorsink Instagram →</span>
          </a>

          {/* Bug Report */}
          <a 
            href="https://github.com/samran/syncorsink/issues" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-danger/50 transition-all hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-2xl bg-danger/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Bug className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Report a Bug</h3>
            <p className="text-slate-400 text-sm mb-4">Found a glitch? Help us improve by filing an issue on GitHub.</p>
            <span className="text-danger font-bold text-sm">Open GitHub Issue →</span>
          </a>

          {/* Business / Partnerships */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-400/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center mb-6">
              <Github className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Partnerships</h3>
            <p className="text-slate-400 text-sm mb-4">Interested in collaborating or featured content? Reach out to our business team.</p>
            <span className="text-blue-400 font-bold text-sm">biz@syncorsink.app</span>
          </div>
        </div>

        {/* FAQ Quick Link */}
        <div className="text-center pt-8">
          <p className="text-slate-500 text-sm italic">
            Check our <a href="/#faq" className="text-slate-400 hover:text-white underline decoration-primary underline-offset-4">FAQ on the homepage</a> before reaching out—we might have already answered your question!
          </p>
        </div>
      </div>
    </main>
  );
}
