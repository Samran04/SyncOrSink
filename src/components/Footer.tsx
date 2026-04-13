"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 col-span-1 md:col-span-1">
            <Link href="/" className="inline-block transform transition-hover hover:scale-105">
              <Image 
                src="/logo-cropped.png" 
                alt="SyncOrSink Logo" 
                width={160} 
                height={40} 
                className="h-8 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The ultimate friendship test game. Rapid-fire questions, brutal roasts, and the truth about your friendship. Play for free online.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/syncorsink" className="text-slate-500 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/syncorsink" className="text-slate-500 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/samran" className="text-slate-500 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Game</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/multiplayer" className="hover:text-primary transition-colors">Multiplayer Mode</Link>
              </li>
              <li>
                <Link href="/single-player" className="hover:text-primary transition-colors">Solo Practice</Link>
              </li>
              <li>
                <Link href="/#how-to-play" className="hover:text-primary transition-colors">How to Play</Link>
              </li>
            </ul>
          </div>

          {/* Resources & Blog */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/articles" className="hover:text-primary transition-colors">Articles & Guides</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} SyncOrSink. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <Mail className="w-3 h-3" />
            <span>support@syncorsink.app</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
