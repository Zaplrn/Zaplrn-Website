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

      <section
        className="w-full bg-[#0d0e0c] flex items-center justify-center box-border
          /* Desktop padding-top matches navbar height, mobile is smaller */
          pt-[100px] md:pt-[164px] pb-20 md:pb-0 min-h-screen md:min-h-[760px]"
      >
        {/* Inner container — Maintains 1204px on desktop, becomes full width on mobile */}
        <div className="w-full max-w-[1204px] px-6 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* LEFT CONTENT — 609px on desktop */}
          <div className="w-full md:w-[609px] flex flex-col justify-center gap-6 md:gap-[36px] text-center md:text-left">
            <h1
              className="font-['Playfair_Display'] font-bold text-white leading-[1.1] tracking-tight m-0
              /* Fluid font size: 42px on mobile, 72px on desktop */
              text-[42px] md:text-[72px]"
            >
              you scrolled <br className="hidden md:block" />
              something today <br className="hidden md:block" />
              that felt like <br className="hidden md:block" />
              <span className="italic">a waste, isn't it?</span>
            </h1>

            {/* CTA Row */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  className="md:w-[22px] md:h-[22px]"
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
              <button className="hero-cta-btn text-sm md:text-base">
                Let's Fix It
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE — 464px on desktop, scales on mobile */}
          <div className="w-[280px] h-[280px] md:w-[464px] md:h-[464px] shrink-0 overflow-hidden rounded-2xl md:rounded-none">
            <img
              src={heroImage}
              alt="Hero visual"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
