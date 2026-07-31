import type { Metadata } from "next";
import TwinEditor from "@/components/TwinEditor";
import CoachMarquee from "@/components/CoachMarquee";
import SmartVideo from "@/components/SmartVideo";
import Reveal from "@/components/Reveal";
import { PillButton, TwoToneHeading, NumberedCard, GradientPanel } from "@/components/ui";

export const metadata: Metadata = {
  title: "How it works — Emberlight",
  description:
    "Drop in your content, we build your coach, it coaches like you would, and you earn while you sleep.",
};

const steps = [
  {
    num: "01",
    title: "Drop in your content",
    body: "Your program, courses, or session notes. No prompts, no AI expertise needed.",
  },
  {
    num: "02",
    title: "We build your coach",
    body: "Your voice and structure become an agent. You review and refine.",
  },
  {
    num: "03",
    title: "It coaches like you would",
    body: "Texts first, tracks habits, and acts on what clients send — like meal photos.",
  },
  {
    num: "04",
    title: "You earn while you sleep",
    body: "Subscribers in every timezone. One dashboard for progress and earnings.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14 text-center">
        <Reveal>
          <TwoToneHeading
            first="From your program"
            second="to a coach that never clocks out."
            className="text-4xl md:text-6xl"
            as="h1"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100} className="lift rounded-card">
              <NumberedCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Build demo video */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Reveal>
          <div className="rounded-card overflow-hidden lift shadow-xl shadow-ink/10">
            <SmartVideo
              src="/media/demo-coach-build.mp4"
              poster="/media/demo-coach-build-poster.jpg"
              label="Creator demo — building your AI coach"
              className="w-full aspect-video"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <TwoToneHeading
            first="Watch your coach"
            second="take shape."
            className="text-3xl md:text-4xl text-center"
          />
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <TwinEditor />
        </Reveal>
      </section>

      {/* Coach banner */}
      <section className="pb-20">
        <Reveal>
          <CoachMarquee />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <GradientPanel className="ember-animate px-8 py-16 text-center">
            <h2 className="font-serif font-light text-3xl md:text-4xl tracking-display">
              Ready to see yours?
            </h2>
            <div className="mt-8">
              <PillButton href="/for-coaches#become-a-creator" variant="light">
                Become a creator
              </PillButton>
            </div>
          </GradientPanel>
        </Reveal>
      </section>
    </>
  );
}
