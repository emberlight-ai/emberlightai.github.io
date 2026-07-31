import type { Metadata } from "next";
import TwinEditor from "@/components/TwinEditor";
import CoachMarquee from "@/components/CoachMarquee";
import SmartVideo from "@/components/SmartVideo";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { PillButton, TwoToneHeading, Chip, Card, GradientPanel } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Coaches — Emberlight",
  description:
    "Coach every client, all day, without being there. Emberlight turns your program into an AI coach that works in your voice and earns for you around the clock.",
};

const features = [
  {
    title: "Trained on you",
    body: "Built from your content and method — not a generic chatbot.",
  },
  {
    title: "Runs your program",
    body: "Your structure, your pace, your philosophy.",
  },
  {
    title: "Your control level",
    body: "Fully autonomous, or review before it sends.",
  },
  {
    title: "Take over anytime",
    body: "Jump into any conversation, instantly.",
  },
  {
    title: "One dashboard",
    body: "Engagement, progress, and earnings in one place.",
  },
  {
    title: "Earn on your terms",
    body: "Your pricing — flat subscription or tiers.",
  },
];

export default function ForCoaches() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 text-center">
        <Reveal>
          <h1 className="font-serif font-light text-5xl md:text-6xl tracking-display leading-[1.05] max-w-4xl mx-auto">
            Coach every client, all day,{" "}
            <span className="text-taupe">without being there.</span>
          </h1>
          <p className="mt-6 text-lg text-taupe max-w-2xl mx-auto leading-relaxed">
            Your program, as an AI coach in your voice — earning around the
            clock.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Chip>Unlimited clients at once</Chip>
            <Chip>No added hours</Chip>
            <Chip>Income that doesn&apos;t log off</Chip>
          </div>
        </Reveal>
      </section>

      {/* Coach banner */}
      <section className="pb-16">
        <Reveal>
          <CoachMarquee />
        </Reveal>
      </section>

      {/* Problem + solution */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-ink/10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2">
            <TwoToneHeading
              first="The real"
              second="bottleneck"
              className="text-4xl md:text-5xl"
            />
            <p className="mt-6 leading-relaxed text-ink/80">
              Client demand grows faster than your calendar. Check-ins pile up
              and eat the hours you needed for the deep work only you can do.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-card overflow-hidden lift shadow-xl shadow-ink/10">
              <SmartVideo
                src="/media/demo-coach-build.mp4"
                poster="/media/demo-coach-build-poster.jpg"
                label="Creator demo — building your AI coach"
                className="w-full aspect-video"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solution band */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <GradientPanel className="ember-animate px-8 py-16 text-center">
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-display">
              Coaching that doesn&apos;t clock out
            </h2>
            <p className="mt-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your Emberlight coach learns how you actually coach, then shows
              up for your clients the way you would — proactive, consistent,
              in your voice.
            </p>
          </GradientPanel>
        </Reveal>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <TwoToneHeading
            first="Built for"
            second="your practice"
            className="text-4xl md:text-5xl text-center"
          />
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100} className="lift rounded-card">
              <Card>
                <h3 className="font-serif text-2xl tracking-heading">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-taupe">
                  {f.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dashboard screenshot */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <TwoToneHeading
              first="Your practice,"
              second="at a glance."
              className="text-3xl md:text-4xl"
            />
            <p className="mt-4 text-taupe leading-relaxed max-w-md">
              Engagement, client progress, and earnings — with insights ready
              before your next live session.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-card overflow-hidden lift shadow-xl shadow-ink/10">
              <SmartVideo
                src="/media/demo-coach-dashboard.mp4"
                poster="/media/demo-coach-dashboard-poster.jpg"
                label="Creator demo — your dashboard"
                className="w-full aspect-video"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Twin editor */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <TwoToneHeading
            first="Your content on one side."
            second="Your coach on the other."
            className="text-3xl md:text-4xl text-center"
          />
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <TwinEditor />
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <TwoToneHeading
            first="From coaches"
            second="already live."
            className="text-3xl md:text-4xl text-center"
          />
        </Reveal>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <Reveal>
          <TwoToneHeading
            first="Questions coaches"
            second="ask us first."
            className="text-3xl md:text-4xl text-center"
          />
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <Faq />
        </Reveal>
      </section>

      {/* CTA */}
      <section id="become-a-creator" className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <GradientPanel className="ember-animate px-8 py-20 text-center">
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-display">
              Drop in your content. We build your coach.
            </h2>
            <div className="mt-9">
              <PillButton
                href="https://calendar.app.google/nJyvu1NnxVVxqVrv7"
                variant="light"
              >
                Become a creator
              </PillButton>
            </div>
          </GradientPanel>
        </Reveal>
      </section>
    </>
  );
}
