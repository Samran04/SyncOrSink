import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syncorsink.app"),
  title: {
    default: "SyncOrSink – The Ultimate Friendship Test Game | Play Free Online",
    template: "%s | SyncOrSink"
  },
  description: "SyncOrSink is the ultimate friendship test game! Answer 'would you rather' questions in 5 seconds, get brutally roasted, and find out if you truly sync with your friends. Play free online – no downloads needed!",
  keywords: [
    "sync or sink", "syncorsink", "sync or sinc", "sinc or sink", "sync or sink game",
    "friendship test", "friendship test online", "friendship test game", "best friend quiz",
    "would you rather game", "would you rather friends", "fun quiz with friends",
    "multiplayer quiz game", "online friendship quiz", "friend compatibility test",
    "friendship score", "funny roast game", "personality quiz", "fun game with friends",
    "viral friendship game", "best friend test", "friendship challenge",
    "quiz game online free", "fun game online", "party game online",
    "sos game", "sync sink game", "syncorsink game",
    "play sync or sink", "sync or sink online", "sync or sink free",
    "friendship quiz online free", "would you rather with friends online",
    "best friend compatibility test", "friend test game online"
  ],
  authors: [{ name: "Muhammad Samran", url: "https://muhammadsamran.netlify.app/" }],
  creator: "Muhammad Samran",
  publisher: "SyncOrSink",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    }
  },
  openGraph: {
    title: "SyncOrSink – Are You True Friends? 👀",
    description: "Answer 10 spicy 'would you rather' questions with friends — get roasted, scored, and find out if you're Soul Sync or Opposite Species! 💀 Play free online now.",
    type: "website",
    url: "https://syncorsink.app",
    siteName: "SyncOrSink",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SyncOrSink – The Ultimate Friendship Test Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncOrSink – Friendship Test Game 🎮",
    description: "Test how well you sync with your friends in just 10 questions. Get brutally roasted. Share the results. Play free! 😂",
    creator: "@muhammadsamran",
    images: ["/opengraph-image"],
  },
  category: "games",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://syncorsink.app" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
