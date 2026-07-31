import Link from "next/link";
import { ReactNode } from "react";

export function TwoToneHeading({
  first,
  second,
  className = "",
  as: Tag = "h2",
}: {
  first: string;
  second: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`font-serif font-light tracking-display leading-[1.1] ${className}`}
    >
      <span className="text-ink block">{first}</span>
      <span className="text-taupe block">{second}</span>
    </Tag>
  );
}

export function PillButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "ghost";
}) {
  const styles = {
    dark: "bg-ink text-cream hover:bg-ember-deep",
    light: "bg-white text-ink hover:bg-cream-card shadow-sm",
    ghost: "bg-transparent text-ink border border-ink/20 hover:border-ink",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-cream-card text-ink/80 text-sm font-medium px-4 py-2">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-card bg-cream-card p-8 ${className}`}>
      {children}
    </div>
  );
}

export function NumberedCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <h3 className="font-serif text-2xl tracking-heading">
        <span className="text-ember mr-2">{num}</span>
        <span className="text-ink">{title}</span>
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-taupe">{body}</p>
    </Card>
  );
}

export function GradientPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`ember-gradient-radial rounded-card text-white ${className}`}
    >
      {children}
    </div>
  );
}
