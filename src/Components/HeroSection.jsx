import React, { useState, useEffect } from "react";
import heroVideo from "../assets/hero-section-video.mp4";

// ─── Sub-components ───────────────────────────────────────────────────────────

function TickCircle() {
  return (
    <div className="hero-tick">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0d0e0c"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

// The button now accepts `pulsing` to toggle the sonar rings
function CtaButton({ onClick, pulsing }) {
  return (
    <div className="hero-cta-btn-wrap">
      <div className="hero-cta-pulse-wrap">
        {/* Sonar rings — 3 staggered waves emanating from the button */}
        {pulsing && (
          <>
            <span className="pulse-ring" style={{ animationDelay: "0s" }} />
            <span className="pulse-ring" style={{ animationDelay: "0.55s" }} />
            <span className="pulse-ring" style={{ animationDelay: "1.1s" }} />
          </>
        )}

        <button className="hero-cta-btn" onClick={onClick}>
          Let's Fix It
        </button>
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <div className="hero-media">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeroSection({ onLetsFix }) {
  const [pulsing, setPulsing] = useState(false);

  // Start pulsing 1.5s after mount
  useEffect(() => {
    const t = setTimeout(() => setPulsing(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Stop pulsing and fire the parent handler
  const handleCta = () => {
    setPulsing(false);
    onLetsFix?.();
  };

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════════ */

        .hero-section {
          position: relative;
          width: 100%;
          background: #010101;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          min-height: 100svh;
          padding-top: 100px;
          padding-bottom: 80px;
        }
        @media (min-width: 768px) {
          .hero-section { min-height: 760px; padding-bottom: 0; }
        }

        /* ── Inner container — mirrors Navbar ── */
        .hero-inner {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        

        /* ── Left content ── */
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }
       

        /* ── Headline ── */
        .hero-headline {
          font-family: 'Denton';
          font-weight: bold;
          color: #ffffff;
          line-height: 0.98;
          letter-spacing: 0;
          margin: 0;
          font-size: clamp(38px, 5.5vw, 80px);
        }

        /* ── CTA row ── */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          cursor: default;
        }

        /* Tick circle */
        .hero-tick {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #ffffff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-tick svg { width: 20px; height: 20px; }
        .hero-cta-row:hover .hero-tick { transform: translateX(160px); }

        @media (min-width: 768px) {
          .hero-tick { width: 48px; height: 48px; }
          .hero-tick svg { width: 22px; height: 22px; }
        }

        /* CTA slide wrap */
        .hero-cta-btn-wrap {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-cta-row:hover .hero-cta-btn-wrap { transform: translateX(-60px); }

        /*
         * ── Pulse wrap ──
         * position:relative so the rings (position:absolute) expand from
         * the button's own bounding box centre.
         */
        .hero-cta-pulse-wrap {
          position: relative;
          display: inline-flex;
        }

        /* ── The button itself ── */
        .hero-cta-btn {
          position: relative; /* sits above the rings */
          z-index: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 14px 32px;
          border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.8);
          background: transparent;
          color: #ffffff;
          font-family: 'Gilroy';
          font-size: 15px; font-weight: 500;
          cursor: pointer; white-space: nowrap;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .hero-cta-btn:hover {
          border-color: #ffffff;
          background: rgba(255,255,255,0.05);
        }
        @media (min-width: 768px) {
          .hero-cta-btn { font-size: 16px; padding: 16px 36px; }
        }

        /* ══════════════════════════════════════════
           SONAR PULSE RINGS
           Each ring starts at the button's exact
           border, then expands outward and fades.
        ══════════════════════════════════════════ */
        .pulse-ring {
          position: absolute;
          inset: 0;                       /* match button size exactly */
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.55);
          pointer-events: none;

          /* start invisible & at button size, then scale up & fade */
          animation: sonar-pulse 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        @keyframes sonar-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.55);
            opacity: 0;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        /* ── Right media ── */
        .hero-media {
          width: min(100%, 600px);
          max-width: 100%;
          height: auto;
          aspect-ratio: 5 / 4;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 16px;
        }
        .hero-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 20px;
          min-height: 240px;
        }
       
        @media (min-width: 768px) {
  .hero-section {
    min-height: 100vh;
    padding: 0;
    overflow: hidden;
  }

  .hero-inner {
    position: relative;
    width: 100%;
    max-width: none;
    height: 100vh;
    padding: 0;
    display: block;
  }

  /* Fullscreen background video */
  .hero-media {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    border-radius: 0;
    z-index: 1;
  }

  .hero-media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  /* Overlay */
  .hero-media::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 2;
  }

  /* Center content */
  .hero-content {
    position: absolute;
    inset: 0;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    gap: 36px;
    padding: 40px;
    top:240px
  }

 

  .hero-cta-row {
    justify-content: center;
  }
}

          /* Mobile */
@media (max-width: 767px) {
  .hero-section {
    min-height: 100vh;
    padding: 0;
    overflow: hidden;
  }

  .hero-inner {
    position: relative;
    height: 100vh;
    padding: 0;
    display: block;
  }

  /* Full-screen video */
  .hero-media {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    border-radius: 0;
    z-index: 1;
  }

  .hero-media video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    min-height: 100%;
  }

  /* Dark overlay for readability */
  .hero-media::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 2;
  }

  /* Text centered over video */
  .hero-content {
    position: absolute;
    inset: 0;
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 24px;
    gap: 24px;
    top:265px;
  }

  .hero-headline {
    font-size: clamp(36px, 9vw, 54px);
    color: #fff;
  }

  .hero-cta-row {
    justify-content: center;
  }
}
      `}</style>

      <section className="hero-section" aria-label="Hero">
        <div className="hero-inner">
          <HeroVideo />
          {/* ── Left: headline + CTA ── */}
          <div className="hero-content">
            <h1 className="hero-headline">
              you scrolled <br />
              something today <br />
              that felt like <br />
              <i style={{fontWeight: '200'}}>a waste, isn't it?</i>
            </h1>

            <div className="hero-cta-row">
              <TickCircle />
              <CtaButton onClick={handleCta} pulsing={pulsing} />
            </div>
          </div>

          {/* ── Right: video ── */}
          
        </div>
      </section>
    </>
  );
}
