export default function ChatMockup() {
  return (
    <div className="rounded-card bg-white shadow-xl shadow-ink/5 border border-ink/5 p-6 max-w-md w-full">
      <div className="flex items-center justify-between pb-4 border-b border-ink/5">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-serif text-lg"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #e87a4e 0%, #c9341e 100%)",
            }}
          >
            M
          </div>
          <div>
            <p className="font-medium text-[15px]">Coach Maya</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
              Active now
            </p>
          </div>
        </div>
        <span className="text-xs rounded-full bg-cream-card px-3 py-1.5 text-ink/70 font-medium">
          ⚡ Knows your method
        </span>
      </div>

      <p className="text-[11px] tracking-widest text-taupe uppercase mt-4">
        Daily check-in · 7:30 AM
      </p>
      <div className="mt-2 rounded-2xl rounded-tl-md bg-cream-card px-4 py-3 text-[14px] max-w-[85%]">
        Morning! Day 12. What was your first meal?
      </div>

      <div className="mt-3 flex justify-end">
        <div className="rounded-2xl rounded-tr-md bg-ink text-cream px-4 py-3 text-[14px]">
          📷 Breakfast photo
        </div>
      </div>

      <div className="mt-3 rounded-2xl rounded-tl-md bg-cream-card px-4 py-3 text-[14px] max-w-[90%]">
        <p className="text-[11px] tracking-widest text-taupe uppercase mb-1">
          Maya&apos;s read
        </p>
        480 kcal, solid protein. Add greens at lunch.
        <span className="mt-2 flex flex-wrap gap-1.5">
          <span className="text-[11px] rounded-full bg-white px-2.5 py-1 border border-ink/5">32g protein</span>
          <span className="text-[11px] rounded-full bg-white px-2.5 py-1 border border-ink/5">41g carbs</span>
          <span className="text-[11px] rounded-full bg-white px-2.5 py-1 border border-ink/5">18g fat</span>
        </span>
      </div>

      <div className="mt-3 rounded-2xl rounded-tl-md bg-cream-card px-4 py-3 text-[14px] max-w-[85%]">
        Push day at 6 — I&apos;ll check in at 5:30. ❤️
      </div>
    </div>
  );
}
