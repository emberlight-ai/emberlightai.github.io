import type { Metadata } from "next";
import CoachMarquee from "@/components/CoachMarquee";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { PillButton, TwoToneHeading, GradientPanel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Founding team — Emberlight",
  description:
    "Why we started Emberlight, and why we're the ones to build it.",
};

const founders = [
  {
    img: "founder-alice.jpg",
    name: "Alice Zhang",
    role: "Co-founder & CEO",
    bio: "Led an AI ads pilot at Tencent with $250M partners, then bootstrapped her own startup to $300K ARR in two months. She kept meeting brilliant experts whose knowledge never scaled past their own time — so she's fixing that.",
  },
  {
    img: "founder-carl.jpg",
    name: "Carl Liu",
    role: "Co-founder & CTO",
    bio: "Led product and engineering for a Sequoia-backed app past $50M ARR; built tools used by millions at Tableau and Airbnb. Expert content explains but never acts — he's building the missing layer.",
  },
];

export default function FoundingTeam() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14 text-center">
        <Reveal>
          <TwoToneHeading
            first="Why we"
            second="started this."
            className="text-5xl md:text-6xl"
            as="h1"
          />
          <p className="mt-6 text-lg text-taupe max-w-2xl mx-auto leading-relaxed">
            Expert content explains. It doesn&apos;t do the work with you.
            We&apos;re building coaching that acts.
          </p>
        </Reveal>
      </section>

      {/* Bios with photos */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 150} className="lift rounded-card">
              <div className="rounded-card bg-cream-card overflow-hidden">
                <SmartImage
                  src={`/media/${f.img}`}
                  alt={`${f.name} portrait`}
                  label={`Drop ${f.img} in public/media`}
                  className="aspect-[4/3] w-full"
                  imgClassName="object-cover w-full h-full object-top"
                />
                <div className="p-8">
                  <h2 className="font-serif text-3xl tracking-heading">{f.name}</h2>
                  <p className="text-ember font-medium mt-1">{f.role}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                    {f.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Coach banner */}
      <section className="pb-20">
        <Reveal>
          <CoachMarquee />
        </Reveal>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <GradientPanel className="ember-animate px-8 py-16 text-center">
            <h2 className="font-serif font-light text-3xl md:text-4xl tracking-display max-w-3xl mx-auto">
              We&apos;ve each spent years turning expertise into products
              people pay for. Emberlight is us doing it once, for everyone.
            </h2>
            <p className="mt-6 text-white/85 max-w-xl mx-auto leading-relaxed">
              Thirteen years of friendship. Palo Alto. Building together in
              person, every day.
            </p>
            <div className="mt-9">
              <PillButton href="mailto:alice@emberlightai.com" variant="light">
                Get in touch
              </PillButton>
            </div>
          </GradientPanel>
        </Reveal>
      </section>
    </>
  );
}
