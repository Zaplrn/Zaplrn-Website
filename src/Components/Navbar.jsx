import React, { useState, useEffect } from "react";
import ZaplrnLogo from "../assets/Zaplrn_logo.png";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-syne
        ${scrolled ? "bg-black/90 backdrop-blur-md h-20 md:h-24" : "bg-[#0d0e0c] h-24 md:h-[164px]"}`}
    >
      <div className="max-w-[1440px] h-full mx-auto px-6 md:px-10 flex items-center justify-between relative">
        {/* Logo - Scales down on mobile */}
        <img
          src={ZaplrnLogo}
          alt="Zaplrn"
          className="w-[140px] md:w-[224.8px] h-auto object-contain transition-all"
        />

        {/* Desktop Buttons - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-2 px-7 py-3 rounded-full border-[1.5px] border-white/80 text-white text-[15px] font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
            <PlayStoreIcon />
            Play Store
          </button>
          <button className="flex items-center gap-2 px-7 py-3 rounded-full border-[1.5px] border-white/80 text-white text-[15px] font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
            <AppleIcon />
            App Store
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0d0e0c] border-t border-white/10 p-6 flex flex-col gap-4 lg:hidden shadow-2xl animate-in slide-in-from-top duration-300">
            <button className="flex items-center justify-center gap-2 w-full px-7 py-4 rounded-full border-[1.5px] border-white text-white font-medium">
              <PlayStoreIcon /> Play Store
            </button>
            <button className="flex items-center justify-center gap-2 w-full px-7 py-4 rounded-full border-[1.5px] border-white text-white font-medium">
              <AppleIcon /> App Store
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
