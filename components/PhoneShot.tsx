import SmartImage from "./SmartImage";

/** iPhone-style frame for a product screenshot (9:19). */
export default function PhoneShot({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label?: string;
}) {
  return (
    <div className="rounded-[44px] bg-ink p-2.5 shadow-2xl shadow-ink/25 w-[280px]">
      <div className="rounded-[36px] overflow-hidden bg-black">
        <SmartImage
          src={src}
          alt={alt}
          label={label}
          className="w-full aspect-[9/19]"
        />
      </div>
    </div>
  );
}
