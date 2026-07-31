const faqs = [
  {
    q: "What does it cost to become a creator?",
    a: "Nothing up front. Your subscribers pay a monthly subscription you price yourself; Emberlight takes a platform share and you keep the majority. Full terms are shared when you onboard.",
  },
  {
    q: "Who owns my content and my method?",
    a: "You do — always. Your materials train your coach and nothing else. If you leave, your content leaves with you.",
  },
  {
    q: "What if my coach says something I wouldn't?",
    a: "You choose the control level. Run it fully autonomous, or review and approve messages before they send — and you can take over any conversation live, anytime.",
  },
  {
    q: "How much work is it to launch?",
    a: "Drop in the content you already teach with — programs, courses, session recordings. We build the persona and infrastructure; most coaches go live within days.",
  },
  {
    q: "How do payouts work?",
    a: "Earnings accrue as your subscribers renew, and you can track everything on your dashboard. Payouts land monthly.",
  },
  {
    q: "Do I need an audience already?",
    a: "It helps, but it isn't required. Your coach can also qualify and convert interest from your existing channels — site, socials, newsletter — around the clock.",
  },
];

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink/10 rounded-card bg-cream-card px-8">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl tracking-heading">
            {f.q}
            <span className="text-ember transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
              +
            </span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-taupe">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
