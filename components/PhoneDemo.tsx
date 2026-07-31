import SmartVideo from "./SmartVideo";

/** iPhone-style frame for the user-end demo video (9:16). */
export default function PhoneDemo({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  return (
    <div className="rounded-[44px] bg-ink p-2.5 shadow-2xl shadow-ink/25 w-[280px]">
      <div className="rounded-[36px] overflow-hidden bg-black">
        <SmartVideo
          src={src}
          poster={poster}
          label={label}
          className="w-full aspect-[9/19] block"
        />
      </div>
    </div>
  );
}
