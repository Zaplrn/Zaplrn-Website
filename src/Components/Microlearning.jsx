import React from "react";

import video1 from "../assets/micro-learning-1.mp4";
import video2 from "../assets/micro-learning-2.mp4";
import video3 from "../assets/micro-learning-3.mp4";
import video4 from "../assets/micro-learning-4.mp4";

import { useRef, useEffect } from "react";
import { TrendingUp } from "lucide-react";

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseX: 0,
      baseY: 0,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.25 + 0.05,
      vx: 0,
      vy: 0,
    }));

    const prevMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.dx = e.clientX - prevMouse.x;
      mouse.dy = e.clientY - prevMouse.y;

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      prevMouse.x = e.clientX;
      prevMouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        if (mouse.active) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;

            star.vx += (dx / distance) * force * 0.15;
            star.vy += (dy / distance) * force * 0.15;
          }
        }

        star.vx *= 0.96;
        star.vy *= 0.96;

        star.x += star.vx;
        star.y += star.vy;
        star.y -= star.speed;

        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const STYLES = `
  /* ═══════════════════════════════════════
     SECTION SHELL
  ═══════════════════════════════════════ */
  .zph-section {
    position: relative;
    width: 100%;
    background: transparent;
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
    letter-spacing: 0;
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
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    bottom: -50px;
  }
  /* Notch */
  
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
    left: 61px;
    transform: rotate(-19.05deg);
    transform-origin: bottom center;
    z-index: 1;
}

  /* Phone 2 — left-center, slightly tilted */
  .zph-phone--2 {
    width: 220px;
    height: 380px;
    left: 170px;
    bottom: -50px;
    transform: rotate(10deg);
    transform-origin: bottom center;
    z-index: -1;
  }

  /* Phone 3 — right-center, slightly tilted */
  .zph-phone--3 {
    width: 220px;
    height: 380px;
    right: 170px;
    bottom: -50px;
    transform: rotate(-10deg);
    transform-origin: bottom center;
    z-index: 2;
  }

  /* Phone 4 — far right, large, steep tilt */
  .zph-phone--4 {
    width: 240px;
    height: 400px;
    right: 61px;
    transform: rotate(19.05deg);
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
    overflow: hidden;
    bottom: -20px;
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
    background: #010101;
    color: #ffffff;
    font-family: 'Gilroy';
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.01em;
    white-space: nowrap;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    cursor: default;
    user-select: none;
    border: 1.5px solid rgba(255, 255, 255);
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
        <i style={{ fontWeight: "200" }}>micro-learning</i>
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
      <TrendingUp size={16} strokeWidth={2} />
      Learn Smarter. Grow Faster.
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Microlearning() {
  return (
    <>
      <div
        style={{
          background: "#050507",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <style>{STYLES}</style>
        <StarField />
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "300px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            width: "350px",
            height: "250px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <section
          className="zph-section"
          aria-labelledby="zph-heading"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <TextBlock />
          <DesktopPhones />
          <MobilePhones />
          <Badge />
        </section>
      </div>
    </>
  );
}
