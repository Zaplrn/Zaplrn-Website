import React, { useRef, useEffect } from "react";
import creatorImg from "../assets/creator-card.png";
import learnerImg from "../assets/learner-card.png";

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

    const stars = Array.from({ length: 120 }, () => ({
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

// ─── Icons ────────────────────────────────────────────────────────────────────

const UserIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PlayIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// ─── Card Label ───────────────────────────────────────────────────────────────

function CardLabel({ icon, text }) {
  return (
    <div className="fc-label">
      <div className="fc-label__icon">{icon}</div>
      <span className="fc-label__text">{text}</span>
    </div>
  );
}

// ─── Creator Card ─────────────────────────────────────────────────────────────

function CreatorCard({ onClick }) {
  return (
    <button
      className="fc-card fc-card--creator"
      onClick={(e) => {
        e.preventDefault();
        onClick("creator");
      }}
    >
      {/* Background image */}
      <img src={creatorImg} alt="For Creators" className="fc-card__bg" />

      {/* Gradient overlay */}
      <div className="fc-card__overlay fc-card__overlay--creator" />

      {/* Text content */}
      <div className="fc-card__body">
        <CardLabel icon={<UserIcon />} text="For Creators" />

        <h3 className="fc-card__title">
          create
          <br />
          something
          <br />
          <i style={{fontWeight: '200'}}>meaningful</i>
        </h3>

        <div className="fc-card__line" />

        <p className="fc-card__desc">
          your ideas deserve
          <br />
          more than drafts
        </p>
      </div>
    </button>
  );
}

// ─── Learner Card ─────────────────────────────────────────────────────────────

function LearnerCard({ onClick }) {
  return (
    <button
      className="fc-card fc-card--learner"
      onClick={(e) => {
        e.preventDefault();
        onClick("learner");
      }}
    >
      <img src={learnerImg} alt="For Learners" className="fc-card__bg" />

      <div className="fc-card__overlay fc-card__overlay--learner" />

      <div className="fc-card__body">
        <CardLabel icon={<PlayIcon />} text="For Learners" />

        <h3 className="fc-card__title">
          learn
          <br />
          something
          <br />
          <i style={{fontWeight: '200'}}>useful</i>
        </h3>

        <div className="fc-card__line" />
        <p className="fc-card__desc">
          small lessons.
          <br />
          real growth.
          <br />
          every day.
        </p>
      </div>
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FeatureSection({ onSelect }) {
  return (
    <>
     
      <style>{`

        /* ══════════════════════════════════════
           SECTION
        ══════════════════════════════════════ */
        .fc-section {
          width: 100%;
          background: #010101;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          padding: 80px 24px 60px;
          position: relative;
  overflow: hidden;
        }
        

        /* ══════════════════════════════════════
           INNER CONTAINER — mirrors navbar grid
        ══════════════════════════════════════ */
        .fc-inner {
          width: 100%;
          max-width: 1440px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
           position: relative;
  z-index: 2;
        }
        @media (min-width: 1024px) { .fc-inner { gap: 56px; } }

        /* ══════════════════════════════════════
           HEADLINE
        ══════════════════════════════════════ */
        .fc-heading {
          font-family: 'Denton' ;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.0;
          letter-spacing: 0;
          margin: 0;
          text-align: center;
          font-size: clamp(38px, 6vw, 80px);
        }

        /* ══════════════════════════════════════
           CARDS ROW
        ══════════════════════════════════════ */
        .fc-cards {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  flex-direction: row;
}

        /* ══════════════════════════════════════
           CARD BASE
        ══════════════════════════════════════ */
        .fc-card {
          position: relative;
          width: min(100%, 28vw);
          max-width: 420px;
          min-width: 280px;
          border-radius: 32px;
          overflow: hidden;
          cursor: pointer;
          background: #050505;
          border: 2px solid #464344;
          padding: 0;
          text-align: left;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          flex: unset;
          aspect-ratio: 3 / 4;
        }
        @media (max-width: 767px) {
          .fc-card {
            width: 100%;
            min-width: auto;
          }
        }
  
          .fc-card:hover {
            box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          }
            .fc-card {
  transform-style: preserve-3d;
  will-change: transform;
  transition:
    transform .5s cubic-bezier(.22,1,.36,1),
    box-shadow .5s cubic-bezier(.22,1,.36,1),
    border-color .5s ease;
}

.fc-card:hover {
  transform:
    translateY(-28px)
    scale(1.05);
    
  box-shadow:
    0 50px 120px rgba(0,0,0,.8),
    0 0 80px rgba(255,255,255,.12);

  border-color: rgba(255,255,255,.45);
}

.fc-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(255,255,255,0.15),
    transparent 70%
  );
  opacity: 0;
  transition: opacity .4s ease;
  pointer-events: none;
  z-index: 4;
}

.fc-card:hover::after {
  opacity: 1;
}
  .fc-card__bg {
  transition:
    transform .8s cubic-bezier(.22,1,.36,1),
    filter .8s ease;
}

.fc-card:hover .fc-card__bg {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.fc-card__overlay {
  transition: opacity .6s ease;
}

.fc-card:hover .fc-card__overlay {
  opacity: .75;
}
  
@keyframes floatCard {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(-20px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.fc-card--creator {
  animation: floatCard 3.5s ease-in-out infinite;
}

.fc-card--learner {
  animation: floatCard 3.5s ease-in-out infinite 1.75s;
}

        /* Background image */
       .fc-card__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  z-index: 1;
}

        /* Gradient overlay — unique per card theme */
        .fc-card__overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        /* Creator: dark top, pink-tinted bottom */
        .fc-card__overlay--creator {
          background: linear-gradient(
            180deg,
            rgba(13,14,12,0.15)  0%,
            rgba(13,14,12,0.0)   35%,
            rgba(180,20,80,0.15) 75%,
            rgba(13,14,12,0.75) 100%
          );
        }

        /* Learner: dark top, purple-tinted bottom */
        .fc-card__overlay--learner {
          background: linear-gradient(
            180deg,
            rgba(13,14,12,0.15)   0%,
            rgba(13,14,12,0.0)    35%,
            rgba(80,30,160,0.15)  75%,
            rgba(13,14,12,0.75)  100%
          );
        }

        /* Text content */
        .fc-card__body {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 40px 36px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .fc-card__body { padding: 52px 48px; }
        }

        .fc-card__line {
  width: 60px;
  height: 4px;
  border-radius: 999px;
  margin-bottom: 22px;
}

/* Creator card line */
.fc-card--creator .fc-card__line {
  background: #ff2e93;
}

/* Learner card line */
.fc-card--learner .fc-card__line {
  background: #9d5cff;
}

        /* ══════════════════════════════════════
           CARD LABEL  ("FOR CREATORS" / "FOR LEARNERS")
        ══════════════════════════════════════ */
        .fc-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .fc-label__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          flex-shrink: 0;
        }

        .fc-label__text {
          font-family: 'Gilroy', ;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        /* Colour per theme */
        .fc-card--creator .fc-label { color: #ff2e93; }
        .fc-card--learner .fc-label { color: #9d5cff; }

        /* ══════════════════════════════════════
           CARD TITLE
        ══════════════════════════════════════ */
        .fc-card__title {
          font-family: 'Denton' ;
          font-weight: 700;
          font-size: clamp(36px, 3.5vw, 52px);
          line-height: 1.02;
          color: #ffffff;
          margin: 0 0 20px;
          letter-spacing: -0.025em;
        }

        /* ══════════════════════════════════════
           CARD DESCRIPTION
        ══════════════════════════════════════ */
        .fc-card__desc {
          font-family: 'Gilroy';
          font-size: 16px;
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.01em;
        }
      `}</style>

      <section className="fc-section" aria-label="Choose your path">
        <StarField />

        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="fc-inner">
          {/* Headline */}
          <h2 className="fc-heading">
            so what do you want
            <br />
            <i style={{fontWeight: '200'}}>from your screen time</i>?
          </h2>

          {/* Cards */}
          <div className="fc-cards">
            <CreatorCard onClick={onSelect} />
            <LearnerCard onClick={onSelect} />
          </div>
        </div>
      </section>
    </>
  );
}
