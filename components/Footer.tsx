import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-5 w-5 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 35% 30%, #f3c193 0%, #e05a3a 55%, #c9341e 100%)",
                }}
              />
              <span className="font-serif text-2xl tracking-heading">Emberlight</span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-2 text-[15px]">
              <Link href="/how-it-works" className="text-taupe hover:text-ink transition-colors">How it works</Link>
              <Link href="/for-coaches" className="text-taupe hover:text-ink transition-colors">For Coaches</Link>
              <Link href="/for-users" className="text-taupe hover:text-ink transition-colors">For Users</Link>
              <Link href="/founding-team" className="text-taupe hover:text-ink transition-colors">Founding team</Link>
              <Link href="/for-coaches#become-a-creator" className="text-taupe hover:text-ink transition-colors">Become a creator</Link>
              <Link href="/for-users#get-the-app" className="text-taupe hover:text-ink transition-colors">Get the app</Link>
            </div>
          </div>
          <p className="font-serif text-2xl md:text-3xl font-light tracking-heading text-ink max-w-sm md:text-right">
            Emberlight lets real experts coach the world, infinitely.
          </p>
        </div>
        <div className="mt-14 pt-6 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-2 text-sm text-taupe">
          <span>© 2026 Emberlight AI. All rights reserved.</span>
          <span>alice@emberlightai.com</span>
        </div>
      </div>
    </footer>
  );
}
