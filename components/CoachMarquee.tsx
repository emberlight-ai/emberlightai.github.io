import SmartImage from "./SmartImage";

/** Coach strip. Photos live in public/media/coach-N.jpg. */
const coaches = [
  { file: "coach-1.jpg", name: "Rui", tag: "Fitness" },
  { file: "coach-2.jpg", name: "Anil", tag: "Creative Writing" },
  { file: "coach-3.jpg", name: "Manuel", tag: "Spanish Language" },
  { file: "coach-4.jpg", name: "Carl Liu", tag: "Career Coaching" },
  { file: "coach-5.jpg", name: "Alice", tag: "Dating" },
  { file: "coach-6.jpg", name: "Ann", tag: "Wellness" },
];

export default function CoachMarquee() {
  // doubled set: the -50% marquee loop stays seamless
  const doubled = [...coaches, ...coaches];
  const items = [...doubled, ...doubled];
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track flex w-max gap-5">
        {items.map((c, i) => (
          <div
            key={i}
            className="relative h-72 w-56 shrink-0 rounded-card overflow-hidden lift"
          >
            <SmartImage
              src={`/media/${c.file}`}
              alt={c.name}
              label={`Drop ${c.file} in public/media`}
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
              <p className="text-white font-medium text-sm">{c.name}</p>
              <p className="text-white/70 text-xs">{c.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
