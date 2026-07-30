'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  Heart,
  Menu,
  MessageCircle,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from 'lucide-react';

const appUrl = 'https://apps.apple.com/us/app/amber-find-soul-mate/id6757027267';

const featureCards = [
  {
    eyebrow: 'Proactive',
    title: 'Texts first',
    copy: 'Daily check-ins and nudges that keep momentum moving. It never waits for a prompt.',
    icon: Send,
    tone: 'peach',
  },
  {
    eyebrow: 'Multimodal',
    title: 'Reads real life',
    copy: 'Meal photos, chat screenshots, resumes, and voice notes become useful context in seconds.',
    icon: ScanLine,
    tone: 'lavender',
  },
  {
    eyebrow: 'Accountable',
    title: 'Keeps you on plan',
    copy: "Habit tracking built from a real expert's method — with the warmth of a coach who knows you.",
    icon: Target,
    tone: 'mint',
  },
];

const coachCards = [
  { eyebrow: 'Live now', title: 'Dating', copy: 'Screenshot a chat, get the reply.', icon: MessageCircle, tone: 'rose' },
  { eyebrow: 'Live now', title: 'Fitness', copy: 'Photo in, macros out.', icon: Dumbbell, tone: 'gold' },
  { eyebrow: 'Live now', title: 'Manifestation', copy: 'Daily rituals that stick.', icon: Sparkles, tone: 'violet' },
  { eyebrow: 'Coming soon', title: 'Career', copy: 'Resume and interview prep.', icon: Zap, tone: 'blue' },
];

const faqs = [
  {
    question: 'How is Amber different from a chatbot?',
    answer: "Most chatbots wait for a prompt. Amber's coaches are proactive and agentic: they initiate check-ins, track habits, and process real-world data to drive actual behavioral outcomes.",
  },
  {
    question: 'Do I need technical skills to build an AI coach?',
    answer: 'No. You drop raw content into the Twin Editor and Emberlight compiles your method into a working coach. No model training or code required.',
  },
  {
    question: 'How do creators get paid?',
    answer: 'Subscribers pay $19.99/month through the iOS app, and creators receive a revenue share on every active subscriber. Premium sessions can escalate to you personally.',
  },
  {
    question: 'What niches are live today?',
    answer: 'Dating, fitness, and manifestation are live now, with career and professional development next. The long-term vision is infrastructure for any domain expert.',
  },
  {
    question: 'Is my methodology protected?',
    answer: 'Yes. Your content powers your coach only. It is not shared across coaches or used to build someone else\'s product.',
  },
];

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`wordmark ${inverse ? 'wordmark-inverse' : ''}`}>
      <span className="wordmark-mark" aria-hidden="true" />
      Emberlight
    </span>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-home">
      <header className={`site-nav ${isScrolled ? 'site-nav-scrolled' : ''}`}>
        <div className="site-container nav-inner">
          <a href="#top" onClick={closeMenu} aria-label="Emberlight home">
            <Wordmark />
          </a>

          <nav className={`desktop-nav ${menuOpen ? 'mobile-nav-open' : ''}`} aria-label="Primary navigation">
            <a href="#how" onClick={closeMenu}>How it works</a>
            <a href="#coaches" onClick={closeMenu}>Coaches</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="mobile-only-nav-link" href={appUrl} onClick={closeMenu}>Get the app <ArrowUpRight size={15} /></a>
            <a className="mobile-only-nav-link nav-creator-link" href="#creator" onClick={closeMenu}>Become a creator <ArrowRight size={15} /></a>
          </nav>

          <div className="nav-actions">
            <a className="nav-app-link" href={appUrl}>Get the app <ArrowUpRight size={15} /></a>
            <a className="button button-primary button-small" href="#creator">Become a creator</a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="site-container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> AI coaching, built by real experts</div>
              <h1>Your expertise,<br /><span>turned into an AI coach.</span></h1>
              <p className="hero-subcopy">It texts your subscribers first, tracks their habits, and reads their meal photos. You earn while it works.</p>
              <div className="hero-actions">
                <a className="button button-primary button-large" href="#creator">Become a creator <ArrowRight size={18} /></a>
                <a className="button button-soft button-large" href="#coaches">Get a coach</a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true">
                  <img src="/assets/harsh.jpg" alt="" />
                  <img src="/assets/anil.JPG" alt="" />
                  <img src="/assets/Manuel.jpeg" alt="" />
                </div>
                <span><strong>1,000+</strong> people already building better habits</span>
              </div>
            </div>

            <div className="hero-stage" aria-label="Amber AI coach product preview">
              <div className="float-note float-note-top"><span className="float-note-icon"><Zap size={13} /></span> Knows your method</div>
              <div className="float-note float-note-bottom"><span className="float-note-icon"><Clock3 size={13} /></span> Checks in at 7:30 AM</div>
              <div className="coach-window">
                <div className="coach-window-topbar">
                  <div className="coach-identity">
                    <div className="coach-avatar">M</div>
                    <div><strong>Coach Maya</strong><span><i /> Active now</span></div>
                  </div>
                  <button className="window-icon" type="button" aria-label="More options"><span /><span /><span /></button>
                </div>
                <div className="coach-window-body">
                  <div className="coach-day-label"><span>Tuesday, June 18</span><span className="coach-day-line" /></div>
                  <div className="chat-bubble chat-bubble-coach">
                    <span className="chat-kicker">Daily check-in · 7:30 AM</span>
                    Morning! Day 12. What was your first meal?
                  </div>
                  <div className="chat-bubble chat-bubble-user"><Camera size={14} /> Breakfast photo</div>
                  <div className="chat-bubble chat-bubble-coach coach-photo-reply">
                    <div className="meal-photo" aria-hidden="true"><span className="meal-sun" /><span className="meal-bowl" /><span className="meal-leaf meal-leaf-one" /><span className="meal-leaf meal-leaf-two" /></div>
                    <div><span className="chat-kicker">Maya's read</span>480 kcal, solid protein. Add greens at lunch.</div>
                    <div className="macro-row"><span>32g protein</span><span>41g carbs</span><span>18g fat</span></div>
                  </div>
                  <div className="chat-bubble chat-bubble-coach coach-last-message">Push day at 6 — I’ll check in at 5:30. <Heart size={14} fill="currentColor" /></div>
                </div>
                <div className="coach-window-input"><span>Message Coach Maya</span><button type="button" aria-label="Send message"><ArrowUpRight size={16} /></button></div>
              </div>
            </div>
          </div>
          <a className="hero-scroll-cue" href="#signal"><span>Scroll to explore</span><ArrowRight size={15} /></a>
        </section>

        <section className="stats-band" id="signal">
          <div className="site-container stats-grid">
            <div className="stat"><strong>1,000<span>+</span></strong><span>users, zero ad spend</span></div>
            <div className="stat"><strong>30<span>%</span></strong><span>pay $19.99/month</span></div>
            <div className="stat"><strong>3</strong><span>expert coaches live</span></div>
            <div className="stats-note"><span className="eyebrow">Early signal</span><p>People do not need another feed. They need a little more follow-through.</p></div>
          </div>
        </section>

        <section className="content-section feature-section">
          <div className="site-container">
            <div className="section-heading section-heading-centered">
              <span className="eyebrow">Why it works</span>
              <h2>Not a chatbot.<br /><span>A coach.</span></h2>
              <p>Amber turns a real expert’s point of view into a daily layer of support that actually shows up.</p>
            </div>
            <div className="feature-layout">
              <div className="feature-lead-card">
                <div className="feature-lead-top"><span className="feature-chip"><Sparkles size={14} /> Always learning</span><span className="feature-chip-dot" /></div>
                <div className="feature-lead-content">
                  <span className="eyebrow eyebrow-light">The difference</span>
                  <h3>Context is the<br /><em>superpower.</em></h3>
                  <p>Amber remembers the patterns, preferences, and small promises that make advice feel like it came from someone who knows you.</p>
                </div>
                <div className="signal-orbit signal-orbit-one" aria-hidden="true"><span>habit</span><span>context</span><span>care</span></div>
                <div className="feature-lead-foot"><span>Powered by your method</span><ArrowUpRight size={16} /></div>
              </div>
              <div className="feature-card-grid">
                {featureCards.map(({ eyebrow, title, copy, icon: Icon, tone }) => (
                  <article className={`feature-card feature-card-${tone}`} key={title}>
                    <div className="feature-card-icon"><Icon size={21} /></div>
                    <span className="eyebrow">{eyebrow}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <span className="card-arrow"><ArrowUpRight size={17} /></span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section creator-section" id="creator">
          <div className="site-container">
            <div className="creator-band">
              <div className="creator-intro">
                <span className="eyebrow">For experts</span>
                <h2>Upload.<br />Compile.<br /><span>Earn.</span></h2>
                <p>Your knowledge is already valuable. Amber gives it a way to work beyond the hours you can personally be online.</p>
                <a className="button button-primary button-large" href="mailto:ceo@emberlightai.com?subject=Creator beta">Apply for the creator beta <ArrowRight size={18} /></a>
              </div>
              <div className="creator-steps">
                <div className="creator-step">
                  <span className="step-number">01</span>
                  <div><h3>Upload</h3><p>Voice notes, PDFs, videos. Your method, raw.</p></div>
                </div>
                <div className="creator-step">
                  <span className="step-number">02</span>
                  <div><h3>Compile</h3><p>We build your AI coach. No code needed.</p></div>
                </div>
                <div className="creator-step">
                  <span className="step-number">03</span>
                  <div><h3>Earn</h3><p>Your followers subscribe. You get a cut of every $19.99/mo.</p></div>
                </div>
                <div className="creator-loop-note"><span><ShieldCheck size={15} /></span><p>Your methodology stays yours — private to your coach.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section coaches-section" id="coaches">
          <div className="site-container">
            <div className="section-heading section-heading-row">
              <div><span className="eyebrow">On Amber for iOS</span><h2>Pick a coach.</h2></div>
              <p>$19.99/month.<br />Human coaches charge that per 6 minutes.</p>
            </div>
            <div className="coach-grid">
              {coachCards.map(({ eyebrow, title, copy, icon: Icon, tone }) => (
                <a className={`coach-card coach-card-${tone}`} href={appUrl} key={title}>
                  <div className="coach-card-art"><div className="coach-art-glow" /><Icon size={38} strokeWidth={1.6} /><span className="coach-art-line" /><span className="coach-art-dot" /></div>
                  <div className="coach-card-meta"><span className={`coach-status ${eyebrow === 'Live now' ? 'coach-status-live' : ''}`}><i /> {eyebrow}</span><ArrowUpRight size={17} /></div>
                  <h3>{title}</h3><p>{copy}</p>
                </a>
              ))}
            </div>
            <div className="section-cta"><a className="button button-outline" href={appUrl}>Download Amber <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="content-section expertise-section">
          <div className="site-container expertise-grid">
            <div className="expertise-mosaic" aria-label="People behind Emberlight">
              <div className="mosaic-photo mosaic-photo-main"><img src="/assets/Manuel.jpeg" alt="A member of the Emberlight team smiling" /><span className="mosaic-caption">Human taste in the loop</span></div>
              <div className="mosaic-photo mosaic-photo-small mosaic-photo-top"><img src="/assets/harsh.jpg" alt="A member of the Emberlight team" /></div>
              <div className="mosaic-photo mosaic-photo-small mosaic-photo-bottom"><img src="/assets/CarlLiu.jpg" alt="A member of the Emberlight team" /></div>
              <div className="mosaic-sticker"><Heart size={16} fill="currentColor" /><span>Made for<br />real life</span></div>
            </div>
            <div className="expertise-copy">
              <span className="eyebrow">The point of view</span>
              <h2>The best AI coaches start with lived experience.</h2>
              <p>We are building the layer between human expertise and everyday action — with enough personality to feel human, and enough consistency to make a difference.</p>
              <div className="check-list">
                <div><span><Check size={14} /></span><p>Real methods, not generic prompts</p></div>
                <div><span><Check size={14} /></span><p>Useful context, not more noise</p></div>
                <div><span><Check size={14} /></span><p>Follow-through that compounds</p></div>
              </div>
              <a className="text-link" href="/about">More about Emberlight <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="content-section faq-section" id="faq">
          <div className="site-container faq-layout">
            <div className="section-heading faq-heading"><span className="eyebrow">FAQ</span><h2>Questions,<br /><span>answered.</span></h2><p>Still curious? Say hello at <a href="mailto:ceo@emberlightai.com">ceo@emberlightai.com</a>.</p></div>
            <div className="faq-list">
              {faqs.map(({ question, answer }, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={question}>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : index)}><span>{question}</span><ChevronDown size={19} /></button>
                    <div className="faq-answer"><p>{answer}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="content-section closing-section">
          <div className="site-container"><div className="closing-band"><div className="closing-orb closing-orb-one" /><div className="closing-orb closing-orb-two" /><span className="eyebrow eyebrow-light">Your knowledge, working around the clock</span><h2>Earn while<br /><em>you sleep.</em></h2><p>Turn the thing only you know into something more people can use.</p><div className="hero-actions"><a className="button button-light button-large" href="#creator">Become a creator <ArrowRight size={18} /></a><a className="button button-outline-inverse button-large" href={appUrl}>Download Amber <ArrowUpRight size={17} /></a></div></div></div>
        </section>
      </main>
    </div>
  );
}
