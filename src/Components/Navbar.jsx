import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ZaplrnLogo from "../assets/Zaplrn_logo.png";
import PlayStoreImg from "../assets/playstore-icon.png";
import AppStoreImg from "../assets/appstore-icon.png";
import ComingSoonModal from "./modelComponent/CommingSoonModel";

// ─── Sub-components ──────────────────────────────────────────────────────────
function StoreButton({ icon, alt, label, iconSize = 22, onClick }) {
  return (
    <button className="store-btn" onClick={onClick}>
      <img src={icon} alt={alt} width={iconSize} height={iconSize} />
      {label}
    </button>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 48 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <rect x="12" y="4" width="36" height="6" rx="4" />

      <rect x="0" y="20" width="48" height="6" rx="4" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Track scroll position for the sticky blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{`
        /* ── Navbar shell ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 999;
          width: 100%;
          font-family: 'Gilroy';
          transition: height 0.3s ease, background 0.3s ease, backdrop-filter 0.3s ease;
        }

        /* Transparent when hero is visible */
.navbar.top {
  height: 96px;
  background: transparent;
  backdrop-filter: none;
}

/* Black + blur after scrolling */
.navbar.scrolled {
  height: 80px;
  background: rgba(1, 1, 1, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

        @media (min-width: 768px) {
          .navbar.scrolled  { height: 96px;  }
          .navbar.top       { height: 164px; }
        }

        /* ── Inner layout ── */
        .navbar-inner {
          max-width: 1440px;
          height: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        @media (min-width: 768px) { .navbar-inner { padding: 0 40px; } }

        /* ── Logo ── */
        .navbar-logo {
          width: 140px;
          height: auto;
          object-fit: contain;
          transition: width 0.3s ease;
        }
        @media (min-width: 768px) { .navbar-logo { width: 200px; } }

        /* ── Store buttons (desktop) ── */
        .navbar-actions { display: none; align-items: center; gap: 10px; }
        @media (min-width: 1024px) { .navbar-actions { display: flex; } }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.75);
          background: transparent;
          color: #fff;
          font-family: 'Gilroy';
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .store-btn:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.06);
        }
        .store-btn img { flex-shrink: 0; object-fit: contain; }

        /* ── Hamburger (mobile) ── */
        .navbar-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 6px;
        }
        @media (min-width: 1024px) { .navbar-hamburger { display: none; } }

        /* ── Mobile dropdown ── */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #010101;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);

          /* Slide-in animation */
          animation: menuSlideIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes menuSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        .mobile-menu .store-btn {
          width: 100%;
          justify-content: center;
          padding: 14px 24px;
          font-size: 15px;
        }
      `}</style>

      <nav
        className={`navbar ${scrolled ? "scrolled" : "top"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Go to home">
            <img
              src={ZaplrnLogo}
              alt="Zaplrn"
              className="navbar-logo cursor-pointer"
            />
          </Link>

          {/* Desktop store buttons */}
          <div className="navbar-actions">
            <StoreButton
              icon={PlayStoreImg}
              alt="Play Store"
              label="Play Store"
              onClick={() => setShowComingSoon(true)}
            />

            <StoreButton
              icon={AppStoreImg}
              alt="App Store"
              label="App Store"
              onClick={() => setShowComingSoon(true)}
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={menuOpen} />
          </button>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="mobile-menu">
              <StoreButton
                icon={PlayStoreImg}
                alt="Play Store"
                label="Play Store"
                onClick={() => {
                  setShowComingSoon(true);
                  setMenuOpen(false);
                }}
              />

              <StoreButton
                icon={AppStoreImg}
                alt="App Store"
                label="App Store"
                onClick={() => {
                  setShowComingSoon(true);
                  setMenuOpen(false);
                }}
              />
            </div>
          )}
        </div>
      </nav>
      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </>
  );
}
