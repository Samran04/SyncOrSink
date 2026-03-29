import type { Metadata } from "next";
import MultiplayerSetupClient from "./MultiplayerSetupClient";

export const metadata: Metadata = {
  title: "Play with Friends – Multiplayer Friendship Test",
  description: "Create or join a SyncOrSink room to play the ultimate friendship test with your bestie. Answer 10 'would you rather' questions together and see if you sync or sink!",
  alternates: { canonical: "/multiplayer" },
  openGraph: {
    title: "SyncOrSink Multiplayer – Test Your Friendship 🎮",
    description: "Create a room, invite your friend, and battle through 10 'would you rather' questions. Get roasted together!",
  },
};

export default function MultiplayerSetupPage() {
  return <MultiplayerSetupClient />;
}
