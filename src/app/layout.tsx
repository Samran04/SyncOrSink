import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyncOrSink - Friendship Test Game",
  description: "Test your friendship with quirky 'would you rather' situations and get funny roasts!",
  openGraph: {
    title: "SyncOrSink - Friendship Test Game",
    description: "Are you true friends or just vibing? Find out in 5 seconds!",
    type: "website",
  }
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
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        {children}
      </body>
    </html>
  );
}
