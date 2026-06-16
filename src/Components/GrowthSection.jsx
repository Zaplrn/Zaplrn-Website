import React, { useEffect, useRef, useState } from "react";

import card1Video from "../assets/growth-card1.mp4";
import card2Video from "../assets/growth-card2.mp4";
import card3Video from "../assets/growth-card3.mp4";
import card4Img from "../assets/growth-card4.png";
import card5Img from "../assets/growth-card5.png";

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

export default function GrowthSection() {
  return (
    <>
      <style>{`
        .growth-section {
        position: relative;
          width: 100%;
          background-color: #010101;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 24px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .growth-text {
          width: 100%;
          max-width: 920px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          margin-bottom: 48px;
        }

        .growth-heading {
          font-family: 'Denton';
          font-weight: 700;
          font-size: 48px;
          line-height: 1.1;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0;
        }

        .growth-heading em { font-style: italic; }

        .growth-subtext {
          font-family: 'Gilroy';
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0;
          max-width: 560px;
        }

        .growth-grid {
          width: 100%;
          max-width: 1313px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .growth-card {
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          background: #0d0e0c;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          box-sizing: border-box;
        }

        /* Image top-aligned, exact dimensions */
        .growth-card-img {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          object-fit: cover;
          z-index: 0;
        }

        .growth-card-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          background: rgba(255,255,255,0.02);
          z-index: 1;
        }

        .growth-card-placeholder span {
          font-family: 'Gilroy';
          font-size: 10px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .growth-card-content {
          position: relative;
          z-index: 3;
        }

        .growth-card-title {
          font-family: 'Denton';
          font-weight: 700;
          font-size: 22px;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .growth-card-desc {
          font-family: 'Gilroy';
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
          margin: 0;
        }

        .growth-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
          z-index: 2;
        }

        /* ── MOBILE: consistent fonts + media fills card (no text overlap) ── */
        @media (max-width: 767px) {
          .growth-section {
            padding: 56px 16px;
          }
          .growth-text {
            gap: 16px;
            margin-bottom: 32px;
          }
          .growth-heading {
            font-size: 38px;
            line-height: 1.12;
          }
          .growth-subtext {
            font-size: 14px;
          }

          /* Stacked card: image on top, text below — no overlap */
          .growth-card {
            height: auto;
            justify-content: flex-start;
            padding: 0 0 22px;
            gap: 18px;
          }

          /* Image/video becomes a normal top block (not an overlay) */
          .growth-card-img {
            position: relative !important;
            width: 100% !important;
            height: 200px !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            object-fit: cover !important;
            border-radius: 20px 20px 0 0;
          }

          /* No gradient / empty overlay in the stacked layout */
          .growth-card::after { display: none; }
          .growth-card-placeholder { display: none; }

          /* Text sits in its own padded area below the image */
          .growth-card-content {
            padding: 0 20px;
          }

          .growth-card-title {
            font-size: 20px;
          }
          .growth-card-desc {
            font-size: 13px;
          }
        }

        @media (min-width: 1024px) {
          .growth-section {
            padding-top: 128px;
            height: auto;
            min-height: 1358px;
          }
          .growth-heading { font-size: 96px; }
          .growth-grid {
            grid-template-columns: repeat(12, 1fr);
            gap: 25px;
          }
          .card-1, .card-2, .card-3 { grid-column: span 4; }
          .card-4 { grid-column: span 7; }
          .card-5 { grid-column: span 5; }
        }
          .growth-text,
.growth-grid {
  position: relative;
  z-index: 2;
}
      `}</style>

      <section className="growth-section">
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
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div className="growth-text">
          <h2 className="growth-heading">
            one app.
            <br />
            <span>
              <i style={{fontWeight: '200'}}>unlimited growth.</i>
            </span>
          </h2>
          <p className="growth-subtext">
            Whether you want to master a new coding language, understand
            personal finance, or scale your business, Zaplrn gives it to you in
            60-second "Zaps."
          </p>
        </div>

        <div className="growth-grid">
          {/* Card 1 — image: 414×288 */}
          {/* Card 1 — Video */}
          <div className="growth-card card-1">
            <video
              src={card1Video}
              className="growth-card-img"
              autoPlay
              muted
              loop
              playsInline
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div className="growth-card-content">
              <h3 className="growth-card-title">Industry-Expert Creators</h3>
              <p className="growth-card-desc">
                We aren't a platform for "influencers"— <br />
                we’re a home for practitioners.
              </p>
            </div>
          </div>

          {/* Card 2 — image: 384×326 */}
          <div className="growth-card card-2">
            <video
              src={card2Video}
              className="growth-card-img"
              autoPlay
              muted
              loop
              playsInline
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div className="growth-card-content mb-5">
              <h3 className="growth-card-title">Dual-Mode Versatility</h3>
              <p className="growth-card-desc">
                On Zaplrn you don't need two accounts. We believe <br></br>{" "}
                everyone has something to learn and something to teach.
              </p>
            </div>
          </div>

          {/* Card 3 — image: 414×326 */}
          <div className="growth-card card-3">
            <video
              src={card3Video}
              className="growth-card-img"
              autoPlay
              muted
              loop
              playsInline
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div className="growth-card-content">
              <h3 className="growth-card-title">Smart Notifications</h3>
              <p className="growth-card-desc">
                We don't nag you with random pings. Receive notifications only
                when a Series you follow is updated or when a creator you trust
                drops a new "Zap."
              </p>
            </div>
          </div>

          {/* Card 4 — image: 465×277 */}
          <div className="growth-card card-4">
            <img
              src={card4Img}
              alt=""
              className="growth-card-img"
              style={{
                height: "277px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <div className="growth-card-placeholder"></div>
            <div className="growth-card-content">
              <h3 className="growth-card-title">Discovery Ecosystems</h3>
              <p className="growth-card-desc">
                Browse dedicated categories like Tech , Business, or Art.{" "}
                <br></br>Your feed isa reflection of your goals, nota
                distraction.
              </p>
            </div>
          </div>

          {/* Card 5 — image: 505×282 */}
          <div className="growth-card card-5">
            <img
              src={card5Img}
              alt=""
              className="growth-card-img"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                objectFit: "contain",
              }}
            />
            <div className="growth-card-content">
              <h3 className="growth-card-title">Transparent Metrics</h3>
              <p className="growth-card-desc">
                For Creators, See completion rates and student progress. For
                Learners, it’s showing exactly what skills you've mastered
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
