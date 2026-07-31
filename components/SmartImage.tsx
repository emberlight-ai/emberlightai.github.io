"use client";

import { useEffect, useState } from "react";

/**
 * Renders /public media if the file exists; otherwise shows a styled
 * placeholder so the layout works before real assets are dropped in.
 * Drop files into public/media/ with the documented names and they
 * appear automatically.
 */
export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "object-cover w-full h-full",
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
}) {
  // null = checking, true = exists, false = missing
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const probe = new Image();
    probe.onload = () => !cancelled && setExists(true);
    probe.onerror = () => !cancelled && setExists(false);
    probe.src = src;
    if (probe.complete && probe.naturalWidth > 0) setExists(true);
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
            "radial-gradient(120% 140% at 20% 110%, #c9341e 0%, transparent 55%), radial-gradient(100% 120% at 85% -5%, #f3c193 0%, transparent 55%), linear-gradient(120deg, #d0432a, #eb9563)",
        }}
        role="img"
        aria-label={alt}
      >
        <span className="text-white/80 text-xs font-medium text-center px-4 leading-relaxed">
          {exists === false ? (label ?? alt) : ""}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  );
}
