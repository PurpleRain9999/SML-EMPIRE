'use client';

import { useState } from 'react';
import {
  Search,
  ShieldCheck,
  ShoppingBag,
  Bot,
  Gift,
  TrendingUp,
  Gamepad2,
  Globe2,
  PlayCircle,
  HeartPulse,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const cats = [
  ['🛍️', 'Shop', 'Products, deals & brands', ShoppingBag],
  ['📱', 'Apps & AI', 'Apps, software & AI tools', Bot],
  ['🎮', 'Gaming', 'Games, guides & legal homebrew', Gamepad2],
  ['🎬', 'Watch', 'Streaming discovery & trailers', PlayCircle],
  ['🌐', 'Useful Web', 'Helpful & trending websites', Globe2],
  ['🔥', 'Trending', 'What people are discovering now', TrendingUp],
  ['📈', 'Markets', 'Crypto, stocks & authorised providers', TrendingUp],
  ['🥗', 'Health & Fitness', 'Wellness, recipes & workouts', HeartPulse],
  ['🔎', 'Lost & Found', 'Find and report lost devices', MapPin],
] as const;

export default function Home() {
  const [q, setQ] = useState('');

  return (
    <div className="page">
      <header>
        <div className="brand">
          💲SML-EMPIRE💲
          <small>est. 2026</small>
        </div>
        <div className="search">
          <Search size={18} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the Empire..."
          />
        </div>
        <button className="outline">Log in</button>
        <button className="primary">Join free</button>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">
              SHOP • DISCOVER • WATCH • PLAY • LEARN • CONNECT
            </p>
            <h1>
              Welcome to your
              <br />
              <span>digital Empire.</span>
            </h1>
            <p className="lead">
              A growing international platform where members can discover
              products, apps, games, useful websites, live streams, deals,
              wellness resources and more.
            </p>
            <div className="buttons">
              <button className="primary big">
                Explore SML-Empire <ArrowRight size={18} />
              </button>
              <button className="outline big">How it works</button>
            </div>
          </div>
          <div className="trial">
            <div className="seal">SML</div>
            <p>14-DAY FREE TRIAL</p>
            <strong>Membership from $2</strong>
            <small>Current price is shown before checkout.</small>
            <div className="safe">
              <ShieldCheck size={16} /> Secure account design
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <b>14 days</b>
            <span>free trial</span>
          </div>
          <div>
            <b>1 account</b>
            <span>across your devices</span>
          </div>
          <div>
            <b>AI + community</b>
            <span>help when you need it</span>
          </div>
          <div>
            <b>Global</b>
            <span>built for expansion</span>
          </div>
        </section>

        <section className="section">
          <div className="sectionTitle">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>There's always something new.</h2>
            </div>
          </div>
          <div className="grid">
            {cats.map(([icon, name, desc, Icon]) => (
              <article className="card" key={name}>
                <div className="catIcon">{icon}</div>
                <Icon className="lineIcon" size={19} />
                <h3>{name}</h3>
                <p>{desc}</p>
                <button className="link">
                  Explore <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="member">
          <div>
            <p className="eyebrow">MEMBERSHIP</p>
            <h2>Unlock the Empire.</h2>
            <p>
              Start with a 14-day trial. Membership pricing is displayed
              transparently at checkout. VIP is an optional upgrade that unlocks
              additional member features and rewards.
            </p>
          </div>
          <button className="primary big">
            Create account <ArrowRight size={18} />
          </button>
        </section>

        <section className="section">
          <div className="features">
            <div className="feature">
              <ShieldCheck />
              <h3>Safety first</h3>
              <p>
                OTP authentication, fraud controls, privacy protections and
                layered security are part of the platform architecture.
              </p>
            </div>
            <div className="feature">
              <Gift />
              <h3>Member rewards</h3>
              <p>
                Eligible VIP members can unlock tasks and rewards. Suspicious
                activity is held for review.
              </p>
            </div>
            <div className="feature">
              <Bot />
              <h3>AI support</h3>
              <p>
                Our AI helps members navigate the platform and can escalate
                conversations to the admin.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="brand">💲SML-EMPIRE💲</div>
          <p>Founder • Est. 2026</p>
        </div>
        <div className="footlinks">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Safety</span>
          <span>Contact Admin</span>
        </div>
      </footer>
    </div>
  );
}
