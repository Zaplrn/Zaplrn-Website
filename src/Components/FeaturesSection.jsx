import React, { useEffect, useRef, useState } from "react";
import creatorVideo from "../assets/creator-section-video.mp4";

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

export default function FeaturesSection() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const autoSlideRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const totalScrollable = outer.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress =
        totalScrollable > 0 ? Math.min(scrolled / totalScrollable, 1) : 0;

      // Mobile: cards are a native, manually-swipeable carousel — no scroll-driven reveal.
      const isMobile = window.innerWidth <= 767;
      if (isMobile) return;

      // Desktop: staged reveal of cards as the section is scrolled.
      if (progress >= 0.86) setVisibleCards(6);
      else if (progress >= 0.71) setVisibleCards(5);
      else if (progress >= 0.57) setVisibleCards(4);
      else if (progress >= 0.43) setVisibleCards(3);
      else if (progress >= 0.28) setVisibleCards(2);
      else if (progress >= 0.14) setVisibleCards(1);
      else setVisibleCards(0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 767) return;

    const track = trackRef.current;
    if (!track) return;

    let currentIndex = 0;

    const cards = track.querySelectorAll(".feat-info-card");

    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;

        const card = cards[currentIndex];

        track.scrollTo({
          left: card.offsetLeft - track.offsetWidth / 2 + card.offsetWidth / 2,
          behavior: "smooth",
        });
      }, 4500);
    };

    startAutoSlide();

    const stopAutoSlide = () => {
      clearInterval(autoSlideRef.current);
    };

    const resumeAutoSlide = () => {
      stopAutoSlide();

      setTimeout(() => {
        startAutoSlide();
      }, 4000);
    };

    track.addEventListener("touchstart", stopAutoSlide);
    track.addEventListener("touchend", resumeAutoSlide);

    return () => {
      stopAutoSlide();

      track.removeEventListener("touchstart", stopAutoSlide);
      track.removeEventListener("touchend", resumeAutoSlide);
    };
  }, []);

  return (
    <>
      <style>{`

        /* ── OUTER: scroll budget ── */
        .feat-outer {
          position: relative;
          background-color: #0d0e0c;
          overflow: hidden;
        }

        /* ── STICKY: pins at top, exactly 1020px tall (original design) ── */
        .feat-sticky {
          position: sticky;
          top: 0;
          height: 1020px;
          width: 100%;
          overflow: hidden;
          background-color: rgba(0,0,0); 
          box-sizing: border-box;
        }

        /* ── HEADING: original absolute position ── */
        .feat-text {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 60px;
          width: 100%;
          max-width: 920px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          z-index: 10;
          white-space: nowrap;
        }

        .feat-heading {
          font-family: 'Denton';
          font-weight: 700;
          font-size: 80px;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .feat-heading em { font-style: italic; }

        .feat-subtext {
          font-family: 'Gilroy';
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0;
          max-width: 600px;
          white-space: normal;
        }

        /* ── CARD CONTAINER: original absolute position ── */
        .feat-card-container {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 240px;
          width: 1392px;
          height: 802px;
        }

        /* ── PHONE: original exact position ── */
        .feat-phone-visual {
          position: absolute;
          width: 408px;
          height: 613px;
          left: 492px;
          top: 95px;
          border-radius: 40px;
          overflow: hidden;
          z-index: 2;
        }

        .feat-phone-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 40px;
          display: block;
        }

        /* ── CARDS: original exact positions ── */
        .feat-info-card {
          position: absolute;
          width: 406px;
          background: #0d0e0c;
          border: 1px solid rgba(173,172,172,0.4);
          border-radius: 14px;
          padding: 24px;
          box-sizing: border-box;
          opacity: 0;
          transition:
            opacity 0.8s ease,
            transform 0.8s ease,
            border-color 0.3s ease;
        }
        .feat-info-card:hover { border-color: #ffffff; }

        .feat-info-title {
          font-family: 'Gilroy';
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 10px 0;
        }
        .feat-info-desc {
          font-family: 'Gilroy';
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin: 0;
        }

        .feat-card-left  { transform: translateX(-80px); }
        .feat-card-right { transform: translateX(80px); }

        .feat-info-card.active {
          opacity: 1;
          transform: translateX(0) !important;
        }

        @media (max-width: 767px) {
          .feat-outer {
            min-height: auto;
            height: auto;
            overflow: visible;
            padding: 0;
          }

          /* Wrapper holds the scroll-away heading + the pinned stage.
             padding-bottom gives the pinned stage travel room so it stays
             centered while the user swipes cards. */
          .feat-sticky {
            position: relative;
            top: auto;
            height: auto;
            overflow: visible;
            display: block;
          }

          /* Heading scrolls away above the pinned stage */
          .feat-text {
            position: relative;
            left: auto;
            transform: none;
            top: auto;
            width: 100%;
            max-width: 100%;
            padding: 48px 20px 24px;
            gap: 12px;
            white-space: normal;
            align-items: center;
          }
          .feat-heading { font-size: 38px; line-height: 1.12; }
          .feat-subtext { font-size: 14px; padding: 0 6px; }

          /* STAGE: pins to the viewport and vertically centers the phone,
             with the swipeable card row beneath it */
          .feat-card-container {
            position: sticky;
            top: 0;
            left: auto;
            transform: none;
            width: 100%;
            max-width: 100%;
            height: 100vh;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 28px;
            overflow: hidden;
          }

          /* Phone — fixed in the centre of the stage, shown complete */
          .feat-phone-visual {
            position: relative;
            width: min(80%, 300px);
            max-width: 100%;
            height: auto;
            aspect-ratio: 408 / 613;
            left: auto;
            top: auto;
            transform: none;
            border-radius: 28px;
            overflow: hidden;
            margin: 0;
            flex-shrink: 0;
          }
          .feat-phone-image {
            image-rendering: auto;
          }

          /* The card row is the ONLY thing the user swipes (horizontal) */
          .feat-card-track {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            gap: 16px;
            padding: 4px 20px;
            width: 100%;
            max-width: 100vw;
            box-sizing: border-box;
            transform: none;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x proximity;
            scroll-behavior: smooth;
            scrollbar-width: none;
            flex-shrink: 0;
          }
          .feat-card-track::-webkit-scrollbar { display: none; }

          /* Each card snaps into place as the user swipes */
          .feat-info-card {
            position: relative;
           width: calc(100vw - 80px);
           min-width: calc(100vw - 80px);
            max-width: 320px;
            flex-shrink: 0;
            margin: 0;
            scroll-snap-align: center;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            opacity: 1;
            transform: none !important;
            transition: border-color 0.3s ease;
          }
            .feat-card-track {
  width: 100%;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;
}

.feat-card-container {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

.feat-sticky {
  overflow-x: hidden;
}
        }
          
      `}</style>

      <div ref={outerRef} className="feat-outer">
        <div className="feat-sticky">
          <StarField />
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "700px",
              height: "400px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              left: "-100px",
              width: "500px",
              height: "500px",
              background:
                "radial-gradient(circle, rgba(255,46,147,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          {/* Heading */}
          <div className="feat-text">
            <h2 className="feat-heading">
              from content creator
              <br />
              <em>to knowledge leader</em>
            </h2>
            <p className="feat-subtext">
              At Zaplrn, we've built a home where your wisdom isn't just
              "content" — it's a curriculum. We don't just give you views; we
              give you a legacy.
            </p>
          </div>

          {/* Card container */}
          <div className="feat-card-container">
            <div className="feat-phone-visual">
              <video
                src={creatorVideo}
                className="feat-phone-image"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Track — horizontal scroll on mobile, transparent wrapper on desktop */}
            <div ref={trackRef} className="feat-card-track">
              {/* 1 — Series Architect (left) */}
              <div
                className={`feat-info-card feat-card-left ${visibleCards >= 1 ? "active" : ""}`}
                style={{ left: "70px", top: "120px" }}
              >
                <p className="feat-info-title">The Series Architect</p>
                <p className="feat-info-desc">
                  Stop posting random clips that disappear. Chain your Zaps into
                  a structured Series.
                </p>
              </div>

              {/* 2 — 60-Second (right) */}
              <div
                className={`feat-info-card feat-card-right ${visibleCards >= 2 ? "active" : ""}`}
                style={{ right: "40px", top: "120px" }}
              >
                <p className="feat-info-title">
                  60-Second "Concentrated" Learning
                </p>
                <p className="feat-info-desc">
                  We challenge you to be the best version of yourself by
                  limiting Zaps to 60 seconds.
                </p>
              </div>

              {/* 3 — Integrated Chat (left) */}
              <div
                className={`feat-info-card feat-card-left ${visibleCards >= 3 ? "active" : ""}`}
                style={{ left: "20px", top: "340px" }}
              >
                <p className="feat-info-title">Integrated Mastery Chat</p>
                <p className="feat-info-desc">
                  Bridge the gap between "Follower" and "Student." Use our
                  built-in chat to offer direct mentorship.
                </p>
              </div>

              {/* 4 — Intentional Reach (right) */}
              <div
                className={`feat-info-card feat-card-right ${visibleCards >= 4 ? "active" : ""}`}
                style={{ right: "2px", top: "340px" }}
              >
                <p className="feat-info-title">Intentional Reach</p>
                <p className="feat-info-desc">
                  Our discovery engine puts your expertise in front of people.
                  You don't find them; they find you.
                </p>
              </div>

              {/* 5 — Deep-Dive Analytics (left) */}
              <div
                className={`feat-info-card feat-card-left ${visibleCards >= 5 ? "active" : ""}`}
                style={{ left: "70px", top: "562px" }}
              >
                <p className="feat-info-title">Deep-Dive Analytics</p>
                <p className="feat-info-desc">
                  See how many users completed your Series, where they got
                  stuck, and how their skills are improving.
                </p>
              </div>

              {/* 6 — Digital Campus (right) */}
              <div
                className={`feat-info-card feat-card-right ${visibleCards >= 6 ? "active" : ""}`}
                style={{ right: "30px", top: "562px" }}
              >
                <p className="feat-info-title">Your Digital Campus</p>
                <p className="feat-info-desc">
                  Organize your Zaps by category — your profile on Zaplrn is
                  your professional portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
