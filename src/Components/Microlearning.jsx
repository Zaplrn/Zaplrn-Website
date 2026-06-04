import React from "react";

import video1 from "../assets/micro-learning-1.mp4";
import video2 from "../assets/micro-learning-2.mp4";
import video3 from "../assets/micro-learning-3.mp4";
import video4 from "../assets/micro-learning-4.mp4";

// ─── Styles ───────────────────────────────────────────────────────────────────
const STYLES = `
  /* ═══════════════════════════════════════
     SECTION SHELL
  ═══════════════════════════════════════ */
  .zph-section {
    position: relative;
    width: 100%;
    background: #010101;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    box-sizing: border-box;
  }

  /* Desktop */
  @media (min-width: 768px) {
    .zph-section {
      height: 680px;
      padding: 136px 40px 0;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    .zph-section {
      min-height: 520px;
      padding: 48px 24px 0;
    }
  }

  /* ═══════════════════════════════════════
     TEXT BLOCK
  ═══════════════════════════════════════ */
  .zph-text {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 14px;
    /* Ensure text stays above phone cards */
    pointer-events: none;
  }

  .zph-eyebrow {
    font-family: 'Gilroy';
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 110%;
    text-transform: lowercase;
    color: rgba(255,255,255,0.4);
    margin: 0;
  }

  .zph-headline {
    font-family: 'Denton';
    font-weight: bold;
    color: #ffffff;
    line-height: 98%;
    letter-spacing: -0.04em;
    margin: 0;
    font-size: clamp(42px, 7vw, 88px);
  }

  .zph-body {
    font-family: 'Gilroy';
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(255,255,255,0.48);
    line-height: 165%;
    max-width: 580px;
    margin: 0;
  }

  /* Mobile: hide eyebrow to save space */
  @media (max-width: 767px) {
    .zph-body { font-size: 16px; max-width: 320px; }
    .zph-text {
    position: relative;  /* ← add */
    z-index: 10;         /* ← add (already set globally but reinforced) */
  }
  }

  /* ═══════════════════════════════════════
     PHONE BANNER  — desktop (4 phones)
  ═══════════════════════════════════════ */
  .zph-banner {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 420px;
    z-index: 1;
    /* Left & right edge fade */
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%
    );
  }

  /* ── Shared phone frame ── */
  .zph-phone {
    position: absolute;
    border-radius: 28px;
    border: 2.5px solid #2a3a4a;
    overflow: hidden;
    box-shadow:
      0 0 0 1px #0d1520,
      0 16px 60px rgba(0,0,0,0.85),
      inset 0 0 0 1.5px rgba(255,255,255,0.07);
    bottom: -30px;
  }
  /* Notch */
  .zph-phone::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 5px;
    background: rgba(0,0,0,0.6);
    border-radius: 3px;
    z-index: 10;
    pointer-events: none;
  }
  .zph-phone video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── Desktop phone sizes & positions ──
     Mirrors the original HTML banner exactly —
     outer two are wider + more tilted, partially cut off;
     inner two are upright and fully visible.
  ── */

  /* Phone 1 — far left, large, steep tilt */
  .zph-phone--1 {
    width: 240px;
    height: 400px;
    left: -30px;
    transform: rotate(14deg);
    transform-origin: bottom center;
    z-index: 1;
  }

  /* Phone 2 — left-center, slightly tilted */
  .zph-phone--2 {
    width: 220px;
    height: 380px;
    left: 170px;
    transform: rotate(5deg);
    transform-origin: bottom center;
    z-index: 2;
  }

  /* Phone 3 — right-center, slightly tilted */
  .zph-phone--3 {
    width: 220px;
    height: 380px;
    right: 170px;
    transform: rotate(-5deg);
    transform-origin: bottom center;
    z-index: 2;
  }

  /* Phone 4 — far right, large, steep tilt */
  .zph-phone--4 {
    width: 240px;
    height: 400px;
    right: -30px;
    transform: rotate(-14deg);
    transform-origin: bottom center;
    z-index: 3;
  }

  /* Hide desktop banner on mobile */
  @media (max-width: 767px) {
    .zph-banner { display: none; }
  }

  /* ═══════════════════════════════════════
     MOBILE BANNER  — 2 overlapping phones
  ═══════════════════════════════════════ */
  .zph-banner-mobile {
    display: none;
  }
  @media (max-width: 767px) {
    .zph-banner-mobile {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 300px;
      z-index: 1;
    }
  }

  /* Shared mobile phone frame */
  .zph-mphone {
    position: absolute;
    width: 170px;
    height: 280px;
    border-radius: 24px;
    border: 2px solid #2a3a4a;
    overflow: hidden;
    box-shadow:
      0 0 0 1px #0d1520,
      0 12px 40px rgba(0,0,0,0.85),
      inset 0 0 0 1px rgba(255,255,255,0.07);
    bottom: -20px;
  }
  .zph-mphone::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 5px;
    background: rgba(0,0,0,0.55);
    border-radius: 3px;
    z-index: 10;
    pointer-events: none;
  }
  .zph-mphone video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Left mobile phone — tilts right, behind */
  .zph-mphone--left {
    left: 10px;
    transform: rotate(12deg);
    transform-origin: bottom left;
    z-index: 1;
  }

  /* Right mobile phone — tilts left, in front */
  .zph-mphone--right {
    right: 10px;
    transform: rotate(-12deg);
    transform-origin: bottom right;
    z-index: 2;
  }

  /* ═══════════════════════════════════════
     BADGE
  ═══════════════════════════════════════ */
  .zph-badge {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 22px;
    border-radius: 999px;
    background: #ffffff;
    color: #0d0e0c;
    font-family: 'Gilroy';
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.01em;
    white-space: nowrap;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    cursor: default;
    user-select: none;
  }
  @media (max-width: 767px) {
    .zph-badge {
      font-size: 13px;
      padding: 9px 16px;
      bottom: 20px;
    }
  }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────

function TextBlock() {
  return (
    <div className="zph-text">
      <p className="zph-eyebrow">welcome</p>
      <h2 className="zph-headline" id="zph-heading">
        to the future of
        <br />
        <i>micro–learning</i>
      </h2>
      <p className="zph-body">
        Wasting hours on entertainment with zero ROI? Reclaim your time and your
        focus by switching to a feed designed for growth, not distraction.
      </p>
    </div>
  );
}

/* Desktop: 4 phones spread across the full width */
function DesktopPhones() {
  const phones = [
    { mod: "1", src: video1 },
    { mod: "2", src: video2 },
    { mod: "3", src: video3 },
    { mod: "4", src: video4 },
  ];
  return (
    <div className="zph-banner" aria-hidden="true">
      {phones.map(({ mod, src }) => (
        <div key={mod} className={`zph-phone zph-phone--${mod}`}>
          <video src={src} autoPlay loop muted playsInline />
        </div>
      ))}
    </div>
  );
}

/* Mobile: 2 phones overlapping, opposite tilts */
function MobilePhones() {
  return (
    <div className="zph-banner-mobile" aria-hidden="true">
      <div className="zph-mphone zph-mphone--left">
        <video src={video1} autoPlay loop muted playsInline />
      </div>
      <div className="zph-mphone zph-mphone--right">
        <video src={video3} autoPlay loop muted playsInline />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="zph-badge">
      <span aria-hidden="true">⭐</span>
      Loved by 1M+ users worldwide
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Microlearning() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="zph-section" aria-labelledby="zph-heading">
        <TextBlock />
        <DesktopPhones />
        <MobilePhones />
        <Badge />
      </section>
    </>
  );
}
