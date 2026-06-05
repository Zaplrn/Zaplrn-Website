import { useState, useEffect, useRef } from "react";
import defaultImg from "../assets/why-zaplrn-image.png";
import cleanMindImg from "../assets/clean-mind.png";
import zeroAlgoImg from "../assets/zero-algo.png";
import passiveToActiveImg from "../assets/passive to active doing.png";
import selfLifeImg from "../assets/self-life.png";

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

const ICONS = {
  cleanMind: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12" />
    </svg>
  ),
  zeroAlgo: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  passiveToActive: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  selfLife: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
};

const POINTS = [
  {
    key: "cleanMind",
    title: 'The "Clean Mind" Guarantee',
    desc: "feeling better, not drained",
  },
  {
    key: "zeroAlgo",
    title: 'Zero "Algorithm Anxiety"',
    desc: "Content with intent and categories",
  },
  {
    key: "passiveToActive",
    title: 'From "Passive Watching" to "Active Doing"',
    desc: "Structured Series and Mastery Chat",
  },
  {
    key: "selfLife",
    title: 'Content with a "Shelf-Life"',
    desc: "timeless wisdom over trending noise",
  },
];

export default function WhySection() {
  const [activeCard, setActiveCard] = useState(null);
  const trackRef = useRef(null);
  const autoSlideRef = useRef(null);
  const cardImages = {
    default: defaultImg,
    cleanMind: cleanMindImg,
    zeroAlgo: zeroAlgoImg,
    passiveToActive: passiveToActiveImg,
    selfLife: selfLifeImg,
  };
  const activeImg = cardImages[activeCard] || cardImages.default;

  // Mobile: swipe one card at a time; the centred card becomes active and
  // swaps the image above it.
  const settledIndex = useRef(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Card whose centre is nearest the track centre (using viewport rects so
    // it doesn't depend on offsetParent).
    const nearestIndex = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let nearest = 0;
      let best = Infinity;
      Array.from(track.children).forEach((child, idx) => {
        const r = child.getBoundingClientRect();
        const dist = Math.abs(r.left + r.width / 2 - center);
        if (dist < best) {
          best = dist;
          nearest = idx;
        }
      });
      return nearest;
    };

    const centerOn = (idx, smooth = true) => {
      const child = track.children[idx];
      if (!child) return;
      const trackRect = track.getBoundingClientRect();
      const r = child.getBoundingClientRect();
      const delta =
        r.left + r.width / 2 - (trackRect.left + trackRect.width / 2);
      track.scrollBy({ left: delta, behavior: smooth ? "smooth" : "auto" });
    };

    let timer;
    const onScroll = () => {
      if (window.innerWidth > 767) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        // Limit movement to a single card per swipe.
        let target = nearestIndex();
        const prev = settledIndex.current;
        if (target > prev + 1) target = prev + 1;
        if (target < prev - 1) target = prev - 1;
        settledIndex.current = target;
        centerOn(target);
        setActiveCard(POINTS[target].key);
      }, 90);
    };

    const init = () => {
      if (window.innerWidth > 767) return;

      settledIndex.current = 0;
      setActiveCard(POINTS[0].key);

      setTimeout(() => {
        const firstCard = track.children[0];

        firstCard?.scrollIntoView({
          behavior: "auto",
          inline: "center",
          block: "nearest",
        });
      }, 100);
    };

    init();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", init);
    return () => {
      clearTimeout(timer);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", init);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 767) return;

    const track = trackRef.current;
    if (!track) return;

    let currentIndex = 0;
    const cards = track.querySelectorAll(".why-mcard");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          autoSlideRef.current = setInterval(() => {
            currentIndex = settledIndex.current;
            currentIndex = (currentIndex + 1) % cards.length;

            track.scrollTo({
              left:
                cards[currentIndex].offsetLeft -
                track.offsetWidth / 2 +
                cards[currentIndex].offsetWidth / 2,
              behavior: "smooth",
            });

            settledIndex.current = currentIndex;
            setActiveCard(POINTS[currentIndex].key);
          }, 4500);
        } else {
          clearInterval(autoSlideRef.current);
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(track);

    return () => {
      clearInterval(autoSlideRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
      
       .why-section {
  position: relative;
  width: 100%;
  background-color: #010101;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  box-sizing: border-box;
  overflow: hidden;
}

        .why-text {
          width: 100%;
          max-width: 920px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .why-heading {
          font-family: 'Denton';
          font-weight: 700;
          font-size: clamp(40px, 8vw, 88px);
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .why-heading em { font-style: italic; }

        .why-subtext {
          font-family: 'Gilroy';
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          margin: 0;
          max-width: 500px;
        }

        /* --- BODY CONTAINER --- */
        .why-body {
          width: 100%;
          max-width: 1300px;
          height: auto;
          min-height: 600px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        @media (min-width: 1024px) {
          .why-body {
            height: 800px;
            flex-direction: row;
            justify-content: center;
          }
        }

        /* --- PHONE PLACEHOLDER --- */
        .why-phone {
          width: 280px;
          height: 570px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          z-index: 2;
          order: 1; /* Center on mobile */
          position: relative;
          border-radius: 40px;
          box-shadow: 0 35px 100px rgba(0, 0, 0, 0.35);
          transition: transform 0.45s ease, box-shadow 0.45s ease;
        }

        .why-phone:hover,
        .why-phone-active {
          // transform: translateY(-6px);
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.45);
        }

        .why-phone::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 42%);
          opacity: 0.7;
        }

        .why-phone img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 40px;
          transition: transform 0.45s ease, opacity 0.45s ease;
        }

        @media (min-width: 1024px) {
          .why-phone {
            position: absolute;
            width: 300px;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .why-phone-label {
          font-family: 'Gilroy';
          font-size: 11px;
          color: rgba(255,255,255,0.2);
          text-transform: uppercase;
        }

        /* --- FEATURE POINTS --- */
        .why-point {
          width: 100%;
          max-width: 320px;
          z-index: 3;
          cursor: pointer;
          border-radius: 28px;
          padding: 18px 20px 18px 18px;
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease, border-color 0.35s ease;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.02);
        }

        .why-point:hover,
        .why-point-active,
        .why-point:focus-visible {
          transform: translateY(-8px);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.22);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.16);
          outline: none;
        }

        .why-point:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.35);
          outline-offset: 6px;
        }

        .why-point:hover .why-point-icon {
          transform: scale(1.1) translateX(-1px);
          background: rgba(255, 255, 255, 0.12);
        }

        .why-point:hover .why-point-title,
        .why-point:hover .why-point-desc {
          color: rgba(255, 255, 255, 0.95);
        }

        @media (min-width: 1024px) {
          .why-point { position: absolute; }
        }

        .why-point-inner {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .why-point-texts {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* Desktop Point Directions */
        @media (min-width: 1024px) {
          .why-point-left .why-point-inner {
            flex-direction: row;
            text-align: right;
            justify-content: flex-end;
          }
          .why-point-left .why-point-texts { align-items: flex-end; }
          
          .why-point-right .why-point-inner {
            flex-direction: row;
            text-align: left;
            justify-content: flex-start;
          }
          .why-point-right .why-point-texts { align-items: flex-start; }
        }

        @media (max-width: 1023px) {
          .why-body {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: auto;
            height: auto;
            gap: 28px;
            padding-top: 20px;
          }
          .why-phone {
            position: relative;
            width: min(100%, 320px);
            height: auto;
            left: auto;
            top: auto;
            transform: none;
            margin: 0 auto;
          }
          .why-point {
            position: relative;
            width: 100%;
            max-width: 100%;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            padding: 22px;
          }
          .why-point-inner {
            flex-direction: row;
            text-align: left;
            justify-content: flex-start;
          }
          .why-point-texts {
            align-items: flex-start;
          }
        }

        /* Mobile Point Logic */
        @media (max-width: 1023px) {
          .why-point-inner {
            flex-direction: row-reverse !important; /* Icon left, Text right for mobile consistency */
            text-align: left !important;
          }
          .why-point-texts { align-items: flex-start !important; }
          .why-point:nth-child(even) { order: 2; } /* Put some below phone */
          .why-point:nth-child(odd) { order: 0; }  /* Put some above phone */
        }

        .why-point-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.35s ease, background 0.35s ease, border-color 0.35s ease;
        }

        .why-point-title {
          font-family: 'Denton';
          font-weight: 700;
          font-size: 20px;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .why-point-desc {
          font-family: 'Gilroy';
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
          margin: 0;
        }

        /* ── MOBILE SWIPE LAYOUT ── */
        .why-mobile { display: none; }

        @media (max-width: 767px) {
          /* Hide the desktop/tablet positioned layout */
          .why-body { display: none; }

          .why-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 28px;
          }

          /* Phone image above, swaps with the active card */
          .why-mobile-phone {
            width: min(62%, 260px);
            aspect-ratio: 280 / 570;
            border-radius: 36px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 30px 90px rgba(0,0,0,0.4);
            flex-shrink: 0;
          }
          .why-mobile-phone img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: opacity 0.4s ease;
          }

          /* Right-to-left swipeable card track */
          .why-mobile-track {
            display: flex;
            flex-direction: row;
            gap: 16px;
            width: 100%;
            padding: 8px calc(50% - 130px);
            box-sizing: border-box;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x proximity;
            scrollbar-width: none;
            scroll-behavior: smooth;
          }
          .why-mobile-track::-webkit-scrollbar { display: none; }

          .why-mcard {
            width: 260px;
            flex-shrink: 0;
            scroll-snap-align: center;
            box-sizing: border-box;
            border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.03);
            padding: 22px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            opacity: 0.45;
            transform: scale(0.92);
            transition: opacity 0.35s ease, transform 0.35s ease,
                        background 0.35s ease, border-color 0.35s ease;
          }

          /* Centre (active) card highlighted */
          .why-mcard-active {
            opacity: 1;
            transform: scale(1);
            background: rgba(255,255,255,0.08);
            border-color: rgba(255,255,255,0.18);
             box-shadow: 0 15px 40px rgba(255,255,255,0.08);
          }
        }
          .why-text,
.why-body,
.why-mobile {
  position: relative;
  z-index: 2;
}
      `}</style>

      <section className="why-section">
        <StarField />

        <div className="why-text">
          <h2 className="why-heading">
            why zaplrn solution
            <br />
            <span>
              <em>to your problems</em>
            </span>
          </h2>
          <p className="why-subtext">
            It's time for a space where your attention is an investment, not a
            product.
          </p>
        </div>

        <div className="why-body">
          <img
            src={activeImg}
            alt="Zaplrn App Preview"
            className={activeCard ? "why-phone why-phone-active" : "why-phone"}
          />

          {/* POINT 1 */}
          <div
            className="why-point why-point-left"
            style={{ left: "60px", top: "240px" }}
            onMouseEnter={() => setActiveCard("cleanMind")}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => setActiveCard("cleanMind")}
            onBlur={() => setActiveCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className="why-point-inner">
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  The "Clean Mind"
                  <br />
                  Guarantee
                </h4>
                <p className="why-point-desc">feeling better, not drained</p>
              </div>
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12" />
                </svg>
              </div>
            </div>
          </div>

          {/* POINT 2 */}
          <div
            className="why-point why-point-left"
            style={{ left: "110px", top: "580px" }}
            onMouseEnter={() => setActiveCard("zeroAlgo")}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => setActiveCard("zeroAlgo")}
            onBlur={() => setActiveCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className="why-point-inner">
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  Zero "Algorithm
                  <br />
                  Anxiety"
                </h4>
                <p className="why-point-desc">
                  Content with intent and categories
                </p>
              </div>
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </div>

          {/* POINT 3 */}
          <div
            className="why-point why-point-right"
            style={{ right: "60px", top: "240px" }}
            onMouseEnter={() => setActiveCard("passiveToActive")}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => setActiveCard("passiveToActive")}
            onBlur={() => setActiveCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className="why-point-inner">
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  From "Passive Watching"
                  <br />
                  to "Active Doing"
                </h4>
                <p className="why-point-desc">
                  Structured Series and Mastery Chat
                </p>
              </div>
            </div>
          </div>

          {/* POINT 4 */}
          <div
            className="why-point why-point-right"
            style={{ right: "120px", top: "580px" }}
            onMouseEnter={() => setActiveCard("selfLife")}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => setActiveCard("selfLife")}
            onBlur={() => setActiveCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className="why-point-inner">
              <div className="why-point-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                </svg>
              </div>
              <div className="why-point-texts">
                <h4 className="why-point-title">
                  Content with a<br />
                  "Shelf-Life"
                </h4>
                <p className="why-point-desc">
                  timeless wisdom over trending noise
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE — image on top + right-to-left swipe cards (centre = active) */}
        <div className="why-mobile">
          <div className="why-mobile-phone">
            <img src={activeImg} alt="Zaplrn App Preview" />
          </div>

          <div className="why-mobile-track" ref={trackRef}>
            {POINTS.map((p) => (
              <div
                key={p.key}
                className={`why-mcard ${activeCard === p.key ? "why-mcard-active" : ""}`}
              >
                <div className="why-point-icon">{ICONS[p.key]}</div>
                <h4 className="why-point-title">{p.title}</h4>
                <p className="why-point-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
