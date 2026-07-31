import Link from "next/link";
import ChatMockup from "@/components/ChatMockup";
import CoachMarquee from "@/components/CoachMarquee";
import PhoneDemo from "@/components/PhoneDemo";
import SmartVideo from "@/components/SmartVideo";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";
import { PillButton, TwoToneHeading, NumberedCard, GradientPanel } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-14">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-sm font-medium tracking-widest uppercase text-ember">
              AI coaching, built by real experts
            </p>
            <h1 className="mt-5 font-serif font-light text-5xl md:text-6xl lg:text-[68px] tracking-display leading-[1.05]">
              An AI coach that does the work for you.{" "}
              <span className="text-taupe">24/7.</span>
            </h1>
            <p className="mt-6 text-lg text-taupe leading-relaxed max-w-xl">
              Your expertise, packaged into a coach that texts first, tracks
              progress, and earns while it works.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PillButton href="/for-coaches#become-a-creator" variant="dark">
                Become a creator →
              </PillButton>
              <PillButton href="/for-users" variant="ghost">
                Explore coaches
              </PillButton>
            </div>
          </Reveal>
          <Reveal delay={150} className="flex justify-center lg:justify-end">
            <ChatMockup />
          </Reveal>
        </div>
      </section>

      {/* Coach marquee */}
      <section className="pb-16">
        <Reveal>
          <CoachMarquee />
        </Reveal>
      </section>

      {/* Stat bar */}
      <section className="border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-3 gap-10 text-center">
          {[
            ["50+", "expert coaches live"],
            ["5.0 ★", "on the App Store"],
            ["$14K", "average earned per creator, monthly*"],
          ].map(([stat, label], i) => (
            <Reveal key={label} delay={i * 120}>
              <p className="font-serif text-4xl tracking-heading">{stat}</p>
              <p className="mt-1 text-taupe text-[15px]">{label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto max-w-7xl px-6 pb-6 -mt-6 text-center text-xs text-taupe/80">
          *Among top-earning creators on the platform.
        </p>
      </section>

      {/* How it works teaser */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <TwoToneHeading
            first="Your expertise,"
            second="working around the clock."
            className="text-4xl md:text-5xl text-center"
          />
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["01", "Drop in your content", "The program you already teach with."],
            ["02", "We build your coach", "Your voice, your method — as an agent."],
            ["03", "It coaches like you", "Texts first. Tracks progress. Acts."],
            ["04", "You earn while you sleep", "Around the clock, in every timezone."],
          ].map(([num, title, body], i) => (
            <Reveal key={num} delay={i * 100} className="lift rounded-card">
              <NumberedCard num={num} title={title} body={body} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className="text-ember font-medium hover:text-ember-deep transition-colors"
          >
            See how it works →
          </Link>
        </Reveal>
      </section>

      {/* Product demos */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal className="flex justify-center">
            <PhoneDemo
              src="/media/demo-user.mp4"
              poster="/media/demo-user-poster.jpg"
              label="User demo — a day with your coach"
            />
          </Reveal>
          <Reveal delay={120}>
            <TwoToneHeading
              first="One product."
              second="Both sides of the coaching."
              className="text-3xl md:text-4xl"
            />
            <p className="mt-4 text-taupe leading-relaxed max-w-md">
              Subscribers get a coach in their pocket. You get a studio and a
              dashboard.
            </p>
            <Reveal delay={200}>
              <div className="mt-8 rounded-card overflow-hidden lift shadow-xl shadow-ink/10">
                <SmartVideo
                  src="/media/demo-coach-dashboard.mp4"
                  poster="/media/demo-coach-dashboard-poster.jpg"
                  label="Creator demo — your dashboard"
                  className="w-full aspect-video"
                />
              </div>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <TwoToneHeading
            first="Coaches are already"
            second="waking up to progress."
            className="text-3xl md:text-4xl text-center"
          />
        </Reveal>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      {/* Gradient CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <GradientPanel className="ember-animate px-8 py-20 text-center">
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-display">
              Coach the world. Keep your calendar.
            </h2>
            <div className="mt-9">
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
