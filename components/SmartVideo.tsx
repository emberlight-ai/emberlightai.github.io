"use client";

import { useEffect, useState } from "react";

/**
 * Video slot: plays /public media when present, otherwise shows a
 * poster-style placeholder with a play button so the layout reads
 * correctly before the real demo video is dropped in.
 */
export default function SmartVideo({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}) {
  // null = checking, true = exists, false = missing
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        if (!cancelled) setExists(res.ok && !type.includes("text/html"));
      })
      .catch(() => !cancelled && setExists(false));
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (exists !== true) {
    return (
      <div
        className={`relative overflow-hidden flex items-center justify-center ${className}`}
        style={{
          background:
            "radial-gradient(120% 140% at 15% 110%, #b52d18 0%, transparent 55%), radial-gradient(100% 120% at 90% -5%, #f3c193 0%, transparent 50%), linear-gradient(120deg, #cf4128, #e88a55)",
        }}
      >
        {exists === false && (
          <div className="text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden>
                <path
                  d="M2 1.8v18.4c0 1.4 1.5 2.2 2.7 1.5l15-9.2c1.1-.7 1.1-2.3 0-3L4.7.3C3.5-.4 2 .4 2 1.8z"
                  fill="#2B180A"
                />
              </svg>
            </span>
            <p className="mt-4 text-white/85 text-sm font-medium px-4">{label}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <video
      className={`${className} object-cover`}
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
    />
  );
}
