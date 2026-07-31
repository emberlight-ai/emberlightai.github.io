export default function TwinEditor() {
  return (
    <div className="rounded-card bg-white shadow-xl shadow-ink/5 border border-ink/5 overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-ink/5 bg-cream/60">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
        <span className="ml-3 text-xs text-taupe font-medium">
          Emberlight Studio — Twin Editor
        </span>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="p-6 border-b md:border-b-0 md:border-r border-ink/5">
          <p className="text-[11px] tracking-widest text-taupe uppercase">
            Your program
          </p>
          <div className="mt-3 space-y-2.5">
            <div className="rounded-xl bg-cream-card px-4 py-3 text-[13px]">
              📁 12-week-strength-program.pdf
            </div>
            <div className="rounded-xl bg-cream-card px-4 py-3 text-[13px]">
              🎙️ client-session-recordings/
            </div>
            <div className="rounded-xl bg-cream-card px-4 py-3 text-[13px]">
              📓 nutrition-philosophy.docx
            </div>
            <div className="rounded-xl border border-dashed border-ink/15 px-4 py-3 text-[13px] text-taupe">
              + Drop in more content
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-[11px] tracking-widest text-ember uppercase">
            Your AI coach
          </p>
          <div className="mt-3 space-y-2.5 text-[13px]">
            <div className="rounded-xl bg-cream-card px-4 py-3 flex items-center justify-between">
              <span>Voice &amp; tone</span>
              <span className="text-ember font-medium">Matched · 98%</span>
            </div>
            <div className="rounded-xl bg-cream-card px-4 py-3 flex items-center justify-between">
              <span>Program structure</span>
              <span className="text-ember font-medium">12 weeks</span>
            </div>
            <div className="rounded-xl bg-cream-card px-4 py-3 flex items-center justify-between">
              <span>Control level</span>
              <span className="text-ink/70">Review before send ▾</span>
            </div>
            <div className="rounded-xl bg-ink text-cream px-4 py-3">
              &ldquo;Great session today. Same cue as Tuesday: brace before the
              descent.&rdquo;
              <span className="block mt-1 text-[11px] text-cream/60">
                Preview · sounds like you
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
