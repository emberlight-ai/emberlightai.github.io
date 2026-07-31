"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-coaches", label: "For Coaches" },
  { href: "/for-users", label: "For Users" },
  { href: "/founding-team", label: "Founding team" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <EmberMark />
            <span className="font-serif text-xl tracking-heading">Emberlight</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[15px] transition-colors ${
                  pathname === l.href
                    ? "text-ink font-medium"
                    : "text-taupe hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/for-users#get-the-app"
            className="hidden sm:inline-block text-[15px] text-ink hover:text-ember transition-colors"
          >
            Get the app
          </Link>
          <Link
            href="/for-coaches#become-a-creator"
            className="hidden sm:inline-block rounded-full bg-ink text-cream text-[15px] font-medium px-5 py-2.5 hover:bg-ember-deep transition-colors"
          >
            Become a creator
          </Link>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ink/15"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
              {open ? (
                <path d="M2 1l14 12M16 1L2 13" stroke="#2B180A" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : (
                <path d="M1 1h16M1 7h16M1 13h16" stroke="#2B180A" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-cream px-6 py-4">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-[16px] ${
                  pathname === l.href
                    ? "bg-cream-card text-ink font-medium"
                    : "text-ink/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/for-users#get-the-app"
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[16px] text-ink/80"
            >
              Get the app
            </Link>
            <Link
              href="/for-coaches#become-a-creator"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink text-cream text-center text-[16px] font-medium px-5 py-3"
            >
              Become a creator
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function EmberMark() {
  return (
    <span
      aria-hidden
      className="inline-block h-5 w-5 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 35% 30%, #f3c193 0%, #e05a3a 55%, #c9341e 100%)",
      }}
    />
  );
}
