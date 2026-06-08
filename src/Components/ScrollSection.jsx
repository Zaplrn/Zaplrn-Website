import React, { useState, useEffect, useRef } from "react";

import step1Img from "../assets/learner-60-bom.png";
import step2Img from "../assets/learner-structure-learning.png";
import step3Img from "../assets/learner-goal-discovery.png";
import step4Img from "../assets/leaner-mentor-ship.png";
import step5Img from "../assets/leaner-dashboard.png";

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

const steps = [
  {
    number: "01",
    title: 'The 60-Second "Knowledge Bomb"',
    desc: "Master one concept at a time. Every Zap is a distilled, high-impact lesson that fits into the gaps of your day—between meetings, on the commute, or over coffee.",
    imgs: [step5Img, step1Img, step2Img],
  },
  {
    number: "02",
    title: "Structured Learning Series",
    desc: "No more jumping between random videos. Follow curated Series that take you from 'Day 1' to 'Done.' It's a complete curriculum, served one minute at a time.",
    imgs: [step1Img, step2Img, step3Img],
  },
  {
    number: "03",
    title: "Goal-Driven Discovery",
    desc: "Your feed is a reflection of your ambitions. Browse by Industry—from Finance and Tech to Creative Arts—and let our engine suggest the skills you need to reach your next milestone.",
    imgs: [step2Img, step3Img, step4Img],
  },
  {
    number: "04",
    title: "Mentorship in Your Pocket",
    desc: "Use the Integrated Chat to talk to the experts behind the Zaps. Ask questions, get clarity, and connect with the people who are actually doing the work you want to do.",
    imgs: [step3Img, step4Img, step5Img],
  },
  {
    number: "05",
    title: "Skill-Progress Dashboard",
    desc: 'Track your transformation. Watch your "Skills Unlocked" meter grow as you finish Series and Zaps. It’s not just about watching; it’s about becoming.',
    imgs: [step4Img, step5Img, step1Img],
  },
];

export default function ScrollSection() {
  const [activeStep, setActiveStep] = useState(0);
  const triggerRefs = useRef([]);
  const sectionRef = useRef(null);
  const mobileTrackRef = useRef(null);
  const autoSlideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 1023) return;
      const triggers = triggerRefs.current;
      for (let i = triggers.length - 1; i >= 0; i--) {
        if (!triggers[i]) continue;
        const rect = triggers[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          setActiveStep(i);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1023) return;

    const track = mobileTrackRef.current;
    if (!track) return;

    let currentIndex = 0;

    const cards = track.querySelectorAll(".sm-step");

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

  const getStepStyle = (index) => {
    const offset = index - activeStep;
    const absOffset = Math.abs(offset);
    const yStep = 200;
    const yOffset = offset * yStep;
    const xOffset = absOffset === 0 ? 80 : 50 + absOffset * absOffset * -50;
    const scale = offset === 0 ? 1 : Math.max(0.78, 1.1 - absOffset * 0.1);
    const opacity = offset === 0 ? 1 : Math.max(0.3, 0.8 - absOffset * 0.28);
    return {
      position: "absolute",
      left: 0,
      right: 0,
      transform: `translateY(${yOffset}px) translateX(${xOffset}px) scale(${scale})`,
      transformOrigin: "left center",
      opacity,
      transition:
        "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease",
      zIndex: offset === 0 ? 10 : 10 - absOffset,
      pointerEvents: offset === 0 ? "auto" : "none",
    };
  };

  const getTitleSize = (index) =>
    Math.max(17, 26 - Math.abs(index - activeStep) * 5);
  const getDescSize = (index) =>
    Math.max(11, 17 - Math.abs(index - activeStep) * 4);
  const getNumberSize = (index) =>
    Math.max(13, 20 - Math.abs(index - activeStep) * 4);

  const CENTER_W = 260;
  const CENTER_H = 500;
  const SIDE_W = 230;
  const SIDE_H = 420;
  const LEFT_OFFSET_X = -130;
  const RIGHT_OFFSET_X = CENTER_W + 20;
  const FAN_W = CENTER_W + Math.abs(LEFT_OFFSET_X) + SIDE_W + 20;
  const CENTER_LEFT = Math.abs(LEFT_OFFSET_X) + 10;

  return (
    <>
      <style>{`
      
        .scroll-section {
          width: 100%;
          background-color: #010101;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
           position: relative;
        }

        .scroll-text {
          width: 920px;
          min-height: 306px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 24px;
        }

        .scroll-heading {
    font-family: 'Denton';
    font-weight: bolder;
    font-size: 88px;
    line-height: 1.0;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.02em;
}

        .scroll-heading em { font-style: italic; }

        .scroll-subtext {
          font-family: 'Gilroy', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          margin: 0;
          max-width: 600px;
        }

        .scroll-body {
          width: 1204px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 80px;
          padding-top: 60px;      /* ← gap between text and phone fan */
          padding-bottom: 80px;
          box-sizing: border-box;
        }

        

        .scroll-left {
          width: 460px;
          flex-shrink: 0;
          position: sticky;
          top: 220px;             /* ← pushed down from navbar (was 180px) */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phone-fan {
          position: relative;
          height: ${CENTER_H}px;
          width: ${FAN_W}px;
        }

        .phone-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          inset: 0;
          transition: opacity 0.5s ease;
        }

        .scroll-right {
          flex: 1;
          position: relative;
          margin-left: 80px;
        }

        .scroll-carousel {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          pointer-events: none;
        }

        .scroll-carousel-inner {
          position: relative;
          width: 100%;
          height: 0;
        }

        .scroll-triggers {
          position: absolute;
          top: 0; left: 0;
          width: 1px;
          height: 100%;
        }

        .scroll-trigger { height: 100vh; }

        .scroll-step {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
        }

        .scroll-step-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.2);
          flex-shrink: 0;
          margin-top: 6px;
          transition: background-color 0.4s ease, border-color 0.4s ease;
        }

        .scroll-step.active .scroll-step-dot {
          background-color: #ffffff;
          border-color: #ffffff;
        }

        .scroll-step-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .scroll-mobile {
  display: none;
}

@media (max-width: 1023px) {
  .scroll-body {
    display: none;
  }

  .scroll-text {
    width: 100%;
    min-height: auto;
    padding: 56px 20px 0;
    gap: 16px;
    box-sizing: border-box;
  }

  .scroll-heading {
    font-size: 38px;
    line-height: 1.12;
  }

  .scroll-subtext {
    font-size: 14px;
  }

  .scroll-mobile {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    padding: 40px 20px 56px;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x proximity;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .scroll-mobile::-webkit-scrollbar {
    display: none;
  }

  .sm-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    width: calc(100vw - 80px);
    max-width: 320px;
    min-width: calc(100vw - 80px);
    flex-shrink: 0;
    scroll-snap-align: center;
  }

  .sm-phone {
    width: min(68%, 260px);
    aspect-ratio: 260 / 500;
    overflow: hidden;
  }

  .sm-phone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .sm-number {
    font-family: "Denton";
    font-size: 14px;
    font-weight: 500;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.08em;
  }

  .sm-title {
    font-family: "Denton";
    font-weight: 700;
    font-size: 22px;
    color: #fff;
    margin: 0;
    line-height: 1.15;
  }

  .sm-desc {
    font-family: "Gilroy";
    font-size: 14px;
    color: rgba(255,255,255,0.45);
    line-height: 1.7;
    margin: 0;
    max-width: 340px;
  }
}
      `}</style>

      <section className="scroll-section" ref={sectionRef}>
        <StarField />
        <div className="scroll-text">
          <h2 className="scroll-heading">
            your growth,
            <br />
            <em style={{fontWeight: '200'}}>on your terms</em>
          </h2>
          <p className="scroll-subtext">
            The internet has become a place where we spend hours but gain
            nothing. At Zaplrn, we've traded the "Endless Scroll" for the
            "Growth Scroll." We believe that being busy shouldn't stop you from
            being brilliant.
          </p>
        </div>

        <div className="scroll-body">
          {/* LEFT — sticky 3-phone fan, all bottom-aligned */}
          <div className="scroll-left">
            <div className="phone-fan">
              {/* BACK LEFT PHONE */}
              <div
                style={{
                  position: "absolute",
                  width: `${SIDE_W}px`,
                  height: `${SIDE_H}px`,
                  bottom: 0,
                  left: 0,
                  overflow: "hidden",
                  transformOrigin: "bottom right",
                  zIndex: 1,
                  opacity: 0.7,
                }}
              >
                {steps.map((step, i) => (
                  <img
                    key={i}
                    src={step.imgs[0]}
                    alt=""
                    style={{
                      opacity: activeStep === i ? 1 : 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />
                ))}
              </div>

              {/* CENTER PHONE */}
              <div
                style={{
                  position: "absolute",
                  width: `${CENTER_W}px`,
                  height: `${CENTER_H}px`,
                  bottom: 0,
                  left: `${CENTER_LEFT}px`,
                  overflow: "hidden",
                  transform: "rotate(0deg)",
                  zIndex: 3,
                }}
              >
                {steps.map((step, i) => (
                  <img
                    key={i}
                    src={step.imgs[1]}
                    alt=""
                    style={{
                      opacity: activeStep === i ? 1 : 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />
                ))}
              </div>

              {/* BACK RIGHT PHONE */}
              <div
                style={{
                  position: "absolute",
                  width: `${SIDE_W}px`,
                  height: `${SIDE_H}px`,
                  bottom: 0,
                  left: `${CENTER_LEFT + CENTER_W + -35}px`,
                  overflow: "hidden",
                  transformOrigin: "bottom left",
                  zIndex: 2,
                  opacity: 0.7,
                }}
              >
                {steps.map((step, i) => (
                  <img
                    key={i}
                    src={step.imgs[2]}
                    alt=""
                    style={{
                      opacity: activeStep === i ? 1 : 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      inset: 0,
                      transition: "opacity 0.5s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="scroll-right"
            style={{ height: `${steps.length * 100}vh` }}
          >
            <div className="scroll-carousel">
              <div className="scroll-carousel-inner">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`scroll-step ${activeStep === i ? "active" : ""}`}
                    style={getStepStyle(i)}
                  >
                    <div className="scroll-step-dot" />
                    <div className="scroll-step-content">
                      <span
                        style={{
                          fontFamily: "Denton",
                          fontSize: `${getNumberSize(i)}px`,
                          fontWeight: 500,
                          color: "rgba(255,255,255,0.35)",
                          letterSpacing: "0.08em",
                          transition: "font-size 0.4s ease",
                        }}
                      >
                        {step.number}
                      </span>
                      <h3
                        style={{
                          fontFamily: "Denton",
                          fontWeight: 700,
                          fontSize: `${getTitleSize(i)}px`,
                          color: "#ffffff",
                          margin: 0,
                          lineHeight: 1.15,
                          transition: "font-size 0.4s ease",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Denton",
                          fontSize: `${getDescSize(i)}px`,
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.75,
                          margin: "4px 0 0 0",
                          maxWidth: "440px",
                          transition: "font-size 0.4s ease",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-triggers">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className="scroll-trigger"
                  ref={(el) => (triggerRefs.current[i] = el)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="scroll-mobile" ref={mobileTrackRef}>
          {steps.map((step, i) => (
            <div className="sm-step" key={i}>
              <div className="sm-phone">
                <img src={step.imgs[1]} alt="" />
              </div>

              <span className="sm-number">{step.number}</span>

              <h3 className="sm-title">{step.title}</h3>

              <p className="sm-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
