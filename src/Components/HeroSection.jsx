import React from "react";
import heroImage from "../assets/hero-image.png";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500&display=swap');

        .hero-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 36px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.8);
          background-color: transparent;
          color: #ffffff;
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .hero-cta-btn:hover {
          background-color: rgba(255,255,255,0.08);
          border-color: #ffffff;
        }
      `}</style>

      {/* 
        Section total height = 164px (navbar) + 596px (hero) = 760px
        paddingTop pushes content below navbar
        inner content sits within remaining 596px
      */}
      <section
        style={{
          width: "100%",
          minHeight: "760px" /* 164 navbar + 596 hero */,
          backgroundColor: "#0d0e0c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "164px" /* exactly navbar height */,
          boxSizing: "border-box",
        }}
      >
        {/* Inner container — 1204 × 468 */}
        <div
          style={{
            width: "1204px",
            maxWidth: "100%",
            height: "468px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT — 609 × 464 */}
          <div
            style={{
              width: "609px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "36px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "72px",
                lineHeight: 1.08,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              you scrolled
              <br />
              something today
              <br />
              that felt like
              <br />a waste, isn't it?
            </h1>

            {/* CTA Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="22"
                  height="22"
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
              <button className="hero-cta-btn">Let's Fix It</button>
            </div>
          </div>

          {/* RIGHT — 468 × 468, flexShrink:0 prevents squishing */}
          <div
            style={{
              width: "464px",
              height: "464px",
              flexShrink: 0 /* KEY FIX: don't let flex squish this */,
              overflow: "hidden",
            }}
          >
            <img
              src={heroImage}
              alt="Hero visual"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
