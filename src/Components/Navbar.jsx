import React, { useState, useEffect } from "react";
import ZaplrnLogo from "../assets/Zaplrn_logo.png"; // place the logo in src/assets/

const PlayStoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83 1.01-1.3 1.66-.78l14 8.5c.58.35.58 1.21 0 1.56l-14 8.5C4.01 21.8 3 21.33 3 20.5z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500&display=swap');

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          background-color: transparent;
          color: #ffffff;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease, border-color 0.2s ease;
          letter-spacing: 0.01em;
        }

        .nav-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          width: "100%",
          height: "164px",
          backgroundColor: scrolled ? "rgba(10,10,10,0.9)" : "#0d0e0c",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            height: "100%",
            margin: "0 auto",
            paddingLeft: "40px",
            paddingRight: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo image — same width as before (224.8px from Figma) */}
          <img
            src={ZaplrnLogo}
            alt="Zaplrn — better than mindless scrolling"
            style={{
              width: "224.8px" /* Figma logo group width */,
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button className="nav-btn">
              <PlayStoreIcon />
              Play Store
            </button>
            <button className="nav-btn">
              <AppleIcon />
              App Store
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
