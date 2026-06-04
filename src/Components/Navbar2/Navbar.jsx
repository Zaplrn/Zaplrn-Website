import { useState, useEffect } from "react";

import ZaplrnLogo   from "../assets/Zaplrn_logo.png";
import PlayStoreImg from "../assets/playstore-icon.png";
import AppStoreImg  from "../assets/appstore-icon.png";

import StoreButton   from "./StoreButton";
import HamburgerIcon from "./HamburgerIcon";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky blur effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when viewport widens to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : "top"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        {/* Logo */}
        <img src={ZaplrnLogo} alt="Zaplrn" className="navbar-logo" />

        {/* Desktop store buttons */}
        <div className="navbar-actions">
          <StoreButton icon={PlayStoreImg} alt="Play Store" label="Play Store" />
          <StoreButton icon={AppStoreImg}  alt="App Store"  label="App Store"  />
        </div>

        {/* Mobile hamburger toggle */}
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
            <StoreButton icon={PlayStoreImg} alt="Play Store" label="Play Store" />
            <StoreButton icon={AppStoreImg}  alt="App Store"  label="App Store"  />
          </div>
        )}
      </div>
    </nav>
  );
}