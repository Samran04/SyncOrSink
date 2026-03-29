import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SyncOrSink – The Ultimate Friendship Test Game";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(34, 197, 94, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(239, 68, 68, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.08)",
            display: "flex",
          }}
        />

        {/* Emojis */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          <span>🎮</span>
          <span>🧠</span>
          <span>💀</span>
          <span>🔥</span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-4px",
            }}
          >
            Sync
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#FACC15",
              letterSpacing: "-4px",
            }}
          >
            Or
          </span>
          <span
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#EF4444",
              letterSpacing: "-4px",
            }}
          >
            Sink
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "32px",
            color: "#94A3B8",
            fontWeight: 600,
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          The Ultimate Friendship Test Game
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "22px",
            color: "#64748B",
            fontWeight: 500,
            marginTop: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          10 Questions • 5 Seconds • Brutal Roasts 😂
        </p>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#22C55E",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            syncorsink.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
