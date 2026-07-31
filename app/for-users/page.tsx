import type { Metadata } from "next";
import CoachMarquee from "@/components/CoachMarquee";
import PhoneDemo from "@/components/PhoneDemo";
import Reveal from "@/components/Reveal";
import { PillButton, TwoToneHeading, Card, GradientPanel } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Users — Emberlight",
  description:
    "Personal coaching, on-demand and unlimited. Subscribe to a coach built from a real expert that texts you first and actually helps you reach your goals.",
};

const benefits = [
  { title: "It texts you first", body: "Check-ins and nudges — not just answers." },
  { title: "On your schedule", body: "Early mornings, late nights, weekends." },
  { title: "Built for results", body: "Real programs, tracked against your goals." },
  { title: "Personalized", body: "It learns your habits — even your meal photos." },
  { title: "100% private", body: "Your conversations stay yours. Full stop." },
  { title: "Unlimited", body: "No booking, no hourly rates, no running out." },
];

export default function ForUsers() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-sm font-medium tracking-widest uppercase text-ember">
              A coach, not a chatbot
            </p>
            <h1 className="mt-5 font-serif font-light text-5xl md:text-6xl tracking-display leading-[1.05]">
              Personal coaching,{" "}
              <span className="text-taupe">on-demand and unlimited.</span>
            </h1>
            <p className="mt-6 text-lg text-taupe leading-relaxed max-w-xl">
              A coach built from a real expert — that texts first and gets you
              to your goal.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PillButton href="#get-the-app" variant="dark">
                Get the app →
              </PillButton>
              <PillButton href="#get-the-app" variant="ghost">
                Explore coaches
              </PillButton>
            </div>
          </Reveal>
          <Reveal delay={150} className="flex justify-center lg:justify-end">
            <PhoneDemo
              src="/media/demo-user.mp4"
              poster="/media/demo-user-poster.jpg"
              label="User demo — a day with your coach"
            />
          </Reveal>
        </div>
      </section>

      {/* Coach marquee */}
      <section className="pb-16">
        <Reveal>
          <CoachMarquee />
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-ink/10">
        <Reveal>
          <TwoToneHeading
            first="Real progress,"
            second="not just conversation."
            className="text-4xl md:text-5xl text-center"
          />
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 100} className="lift rounded-card">
              <Card>
                <h3 className="font-serif text-2xl tracking-heading">{b.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-taupe">
                  {b.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-the-app" className="mx-auto max-w-7xl px-6 py-4 pb-24">
        <Reveal>
          <GradientPanel className="ember-animate px-8 py-20 text-center">
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-display">
              Meet your coach today.
            </h2>
            <div className="mt-9">
              <PillButton
                href="https://apps.apple.com/us/app/amber-find-soul-mate/id6757027267"
                variant="light"
              >
                 Download on the App Store
              </PillButton>
            </div>
          </GradientPanel>
        </Reveal>
      </section>
    </>
  );
}
