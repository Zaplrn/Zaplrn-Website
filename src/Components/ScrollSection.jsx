import React, { useState, useEffect, useRef } from "react";

import step1Img from "../assets/step1.png";
import step2Img from "../assets/step2.png";
import step3Img from "../assets/step3.png";
import step4Img from "../assets/step4.png";
import step5Img from "../assets/step5.png";

const steps = [
  {
    number: "01",
    title: "Download the app",
    desc: "From the App Store or Google Play and create your account. You can sign up with your email, Google, Facebook, or Apple ID.",
    imgs: [step1Img, step1Img, step1Img],
  },
  {
    number: "02",
    title: "Mentorship in Your Pocket",
    desc: "Use the Integrated Chat to talk to the experts behind the Zaps. Ask questions, get clarity, and connect with the people who are actually doing the work you want to do.",
    imgs: [step2Img, step2Img, step2Img],
  },
  {
    number: "03",
    title: 'The 60-Second "Knowledge Bomb"',
    desc: "Master one concept at a time. Every Zap is a high-impact lesson that fits into the gaps of your day.",
    imgs: [step3Img, step3Img, step3Img],
  },
  {
    number: "04",
    title: "Structured Learning Series",
    desc: "No more jumping between random videos. Follow curated Series that take you from 'Day 1' to 'Done'.",
    imgs: [step4Img, step4Img, step4Img],
  },
  {
    number: "05",
    title: "Track Your Growth",
    desc: "See your progress across every Series. Know exactly how far you've come and what's next on your journey.",
    imgs: [step5Img, step5Img, step5Img],
  },
];

export default function ScrollSection() {
  const [activeStep, setActiveStep] = useState(0);
  const triggerRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
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
  const SIDE_W = 210;
  const SIDE_H = 420;
  const LEFT_OFFSET_X = -130;
  const RIGHT_OFFSET_X = CENTER_W + 20;
  const FAN_W = CENTER_W + Math.abs(LEFT_OFFSET_X) + SIDE_W + 20;
  const CENTER_LEFT = Math.abs(LEFT_OFFSET_X) + 10;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500;600&display=swap');

        .scroll-section {
          width: 100%;
          background-color: #0d0e0c;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
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
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 88px;
          line-height: 1.0;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .scroll-heading em { font-style: italic; }

        .scroll-subtext {
          font-family: 'Syne', sans-serif;
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
      `}</style>

      <section className="scroll-section" ref={sectionRef}>
        <div className="scroll-text">
          <h2 className="scroll-heading">
            Your Growth,
            <br />
            <em>On Your Terms</em>
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
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#111",
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
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "#111",
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
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#111",
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
                          fontFamily: "'Syne',sans-serif",
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
                          fontFamily: "'Playfair Display',serif",
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
                          fontFamily: "'Syne',sans-serif",
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
      </section>
    </>
  );
}
