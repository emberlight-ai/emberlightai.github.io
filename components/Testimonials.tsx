import Reveal from "./Reveal";
import SmartImage from "./SmartImage";

/**
 * SAMPLE QUOTES — the coach photos/names are real, but the quote text
 * itself is still placeholder copy. Swap in each coach's actual words
 * before launch.
 */
const quotes = [
  {
    img: "coach-1.jpg",
    quote:
      "My clients message their coach at 11pm and I wake up to a summary of who needs me today.",
    name: "Rui",
    tag: "Fitness coach",
  },
  {
    img: "coach-5.jpg",
    quote:
      "It runs my exact program — same cues, same pacing. Clients say it sounds like me on a good day.",
    name: "Alice",
    tag: "Dating coach",
  },
  {
    img: "coach-6.jpg",
    quote:
      "I went from 15 clients to hundreds of subscribers without adding a single hour to my week.",
    name: "Ann",
    tag: "Wellness coach",
  },
];

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {quotes.map((q, i) => (
        <Reveal key={i} delay={i * 120} className="lift rounded-card">
          <figure className="rounded-card bg-cream-card p-8 h-full flex flex-col">
            <svg width="28" height="22" viewBox="0 0 28 22" aria-hidden className="text-ember">
              <path
                d="M0 22V13.2C0 5.9 4.5 1.2 12 0l1.4 3.4C8.6 4.6 6.2 7 6 10h6v12H0zm16 0V13.2C16 5.9 20.5 1.2 28 0l-1.4 3.4C22.6 4.6 20.2 7 20 10h6v12H16z"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
            <blockquote className="mt-5 font-serif text-xl leading-snug tracking-heading text-ink flex-1">
              {q.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <SmartImage
                src={`/media/${q.img}`}
                alt={`${q.name} portrait`}
                label=""
                className="h-11 w-11 rounded-full shrink-0"
              />
              <span>
                <span className="block text-[15px] font-medium">{q.name}</span>
                <span className="block text-sm text-taupe">{q.tag}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
