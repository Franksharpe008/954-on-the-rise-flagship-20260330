import Link from "next/link";

import { AnimatedWord } from "@/components/animated-word";
import { HeroVideo } from "@/components/hero-video";
import { Reveal } from "@/components/reveal";
import { SplashGate } from "@/components/splash-gate";
import { TrackGrid } from "@/components/track-grid";
import { featuredVisuals, heroMetrics } from "@/lib/site";

export default function HomePage() {
  const [heroVisual, secondaryVisual, arcadeVisual] = featuredVisuals;

  return (
    <>
      <SplashGate />
      <section className="hero-section">
        <HeroVideo src={heroVisual.src} poster={heroVisual.poster || "/media/hero/hero-poster.png"} label="954 On The Rise hero video" />
        <div className="hero-copy">
          <Reveal className="hero-kicker">
            <span className="eyebrow">954 On The Rise</span>
            <span className="status-chip">Voice-led splash entry</span>
          </Reveal>
          <Reveal as="h1" className="hero-title" delay={80}>
            Step into a <AnimatedWord text="rising" /> release world.
          </Reveal>
          <Reveal as="p" className="hero-summary" delay={160}>
            Five premium one-minute songs, a spoken intro, bold video motion, and a splash gate that makes the first
            touch feel earned instead of generic.
          </Reveal>
          <Reveal className="hero-actions" delay={220}>
            <Link href="/tracks" className="primary-button">
              Hear the vault
            </Link>
            <Link href="/arcade" className="ghost-button">
              Enter through the gate
            </Link>
          </Reveal>
          <Reveal className="metric-row" delay={260}>
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="metric-card media-card">
                <p className="eyebrow">{metric.label}</p>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Featured tracks</p>
          <h2>The songs close the argument fast.</h2>
          <p>Each record is one minute long, styled for a different lane, and ready to preview, loop, or download.</p>
        </Reveal>
        <TrackGrid compact />
      </section>

      <section className="section-shell split-section">
        <Reveal className="media-card">
          <div className="section-video-card">
            <video autoPlay loop muted playsInline poster={secondaryVisual.poster}>
              <source src={secondaryVisual.src} type="video/mp4" />
            </video>
          </div>
        </Reveal>
        <Reveal className="section-copy" delay={100}>
          <p className="eyebrow">Visual rhythm</p>
          <h2>Motion makes the page feel premium before the listener even presses play.</h2>
          <p>
            Hero motion, section loops, hover animation, and luminous transitions keep every scroll step alive without
            ever drowning the records.
          </p>
          <Link href="/visuals" className="ghost-button">
            See the visual system
          </Link>
        </Reveal>
      </section>

      <section className="section-shell split-section reverse">
        <Reveal className="section-copy">
          <p className="eyebrow">Splash entry</p>
          <h2>The first touch feels like crossing a threshold, not loading a brochure.</h2>
          <p>
            The splash gate gives visitors something to do, the audio dock gives them something to hear, and the vault
            gives them a reason to stay longer than a normal promo site.
          </p>
          <Link href="/downloads" className="primary-button">
            Grab the bundle
          </Link>
        </Reveal>
        <Reveal className="media-card" delay={100}>
          <div className="section-video-card">
            <video autoPlay loop muted playsInline poster={arcadeVisual.poster}>
              <source src={arcadeVisual.src} type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </section>
    </>
  );
}
