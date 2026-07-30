import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

function FooterWordmark() {
  return (
    <span className="footer-wordmark">
      <span className="footer-wordmark-mark" aria-hidden="true" />
      Emberlight
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Emberlight home"><FooterWordmark /></Link>
            <p>Human expertise, compiled into software.</p>
            <a className="footer-mail" href="mailto:ceo@emberlightai.com">Say hello <ArrowUpRight size={15} /></a>
          </div>
          <div className="footer-col">
            <strong>Product</strong>
            <a href="https://apps.apple.com/us/app/amber-find-soul-mate/id6757027267">Amber for iOS</a>
            <a href="/#creator">Twin Editor</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div className="footer-col">
            <strong>Experts</strong>
            <a href="/#creator">Become a creator</a>
            <a href="mailto:ceo@emberlightai.com?subject=Creator beta">Creator beta</a>
            <a href="/#coaches">Live coaches</a>
          </div>
          <div className="footer-col">
            <strong>Company</strong>
            <Link href="/about">About</Link>
            <a href="mailto:ceo@emberlightai.com">Contact</a>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Emberlight AI · Palo Alto, CA</span>
          <div><Link href="/terms">Terms</Link><Link href="/eula">EULA</Link><span>Made with Amber</span></div>
        </div>
      </div>
    </footer>
  );
}
