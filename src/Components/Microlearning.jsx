import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

export default function FeatureSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Syne:wght@400;500&display=swap');
      `}</style>

      <section
        style={{
          width: "100%",
          height: "614px",
          backgroundColor: "#0d0e0c",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "48px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* TEXT BLOCK — centered */}
        <div
          style={{
            width: "966px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "14px",
            position: "relative",
            zIndex: 5,
          }}
        >
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            welcome
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "88px",
              lineHeight: 1.0,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            to the future of
            <br />
            <em>micro–learning</em>
          </h2>

          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: "520px",
            }}
          >
            Wasting hours on entertainment with zero ROI? Reclaim your time and
            your focus by switching to a feed designed for growth, not
            distraction.
          </p>
        </div>

        {/* BADGE */}
        <div
          style={{
            marginTop: "28px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            borderRadius: "999px",
            backgroundColor: "#ffffff",
            color: "#0d0e0c",
            fontFamily: "'Syne', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            position: "relative",
            zIndex: 5,
          }}
        >
          ⭐ Loved by 1M+ users worldwide
        </div>

        {/* LEFT CARDS — bottom left corner, 2 overlapping, tilted */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-40px",
            width: "460px",
            height: "360px",
            zIndex: 3,
          }}
        >
          {/* Back card — more rotated */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              transform: "rotate(15deg)",
              transformOrigin: "bottom left",
              left: "100px",
              bottom: "40px",
              zIndex: 2,
            }}
          >
            <img
              src={card2}
              alt="App screen 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Front card — less rotated, more visible */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              transform: "rotate(-20deg)",
              transformOrigin: "bottom left",
              left: "100px",
              bottom: "0px",
              zIndex: 2,
            }}
          >
            <img
              src={card1}
              alt="App screen 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* RIGHT CARDS — bottom right corner, 2 overlapping, tilted */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            right: "-40px",
            width: "460px",
            height: "360px",
            zIndex: 3,
          }}
        >
          {/* Front card — less rotated, more visible */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              transform: "rotate(-18deg)",
              transformOrigin: "bottom right",
              right: "40px",
              bottom: "50px",
              zIndex: 2,
            }}
          >
            <img
              src={card3}
              alt="App screen 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Back card — more rotated */}
          <div
            style={{
              position: "absolute",
              width: "260px",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              transform: "rotate(-18deg)",
              transformOrigin: "bottom right",
              right: "250px",
              top: "120px",
              zIndex: 1,
            }}
          >
            <img
              src={card4}
              alt="App screen 4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
