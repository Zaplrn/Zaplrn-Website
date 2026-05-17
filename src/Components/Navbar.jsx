import React, { useState, useEffect } from "react";
import ZaplrnLogo from "../assets/Zaplrn_logo.png";
import PlayStoreImg from "../assets/playstore-icon.png"; // ← add your image here
import AppStoreImg from "../assets/appstore-icon.png"; // ← add your image here

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
        {/* Logo */}
        <img
          src={ZaplrnLogo}
          alt="Zaplrn"
          className="w-[140px] md:w-[224.8px] h-auto object-contain transition-all"
        />

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-2 px-7 py-3 rounded-full border-[1.5px] border-white/80 text-white text-[15px] font-medium transition-colors whitespace-nowrap">
            {/* Play Store icon image — 20×20 same as before */}
            <img
              src={PlayStoreImg}
              alt="Play Store"
              width={25}
              height={20}
              style={{ objectFit: "contain" }}
            />
            Play Store
          </button>
          <button className="flex items-center gap-2 px-7 py-3 rounded-full border-[1.5px] border-white/80 text-white text-[15px] font-medium transition-colors whitespace-nowrap">
            {/* App Store icon image — 18×18 same as before */}
            <img
              src={AppStoreImg}
              alt="App Store"
              width={25}
              height={20}
              style={{ objectFit: "contain" }}
            />
            App Store
          </button>
        </div>

        {/* Mobile Menu Toggle */}
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
              <img
                src={PlayStoreImg}
                alt="Play Store"
                width={20}
                height={20}
                style={{ objectFit: "contain" }}
              />
              Play Store
            </button>
            <button className="flex items-center justify-center gap-2 w-full px-7 py-4 rounded-full border-[1.5px] border-white text-white font-medium">
              <img
                src={AppStoreImg}
                alt="App Store"
                width={18}
                height={18}
                style={{ objectFit: "contain" }}
              />
              App Store
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
