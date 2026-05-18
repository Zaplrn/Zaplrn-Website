import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

export default function FeatureSection() {
  return (
    <>
      <section
        className="w-full bg-[#0d0e0c] flex flex-col items-center justify-start overflow-hidden relative box-border
          /* Desktop height is 614px, mobile is auto to allow content to breathe */
          min-h-[700px] md:h-[614px] pt-12 md:pt-[48px]"
      >
        {/* TEXT BLOCK — centered */}
        <div className="w-full max-w-[966px] px-6 flex flex-col items-center text-center gap-4 md:gap-[14px] relative z-10">
          <p className="font-syne text-[12px] md:text-[14px] font-normal text-white/45 tracking-[0.06em] uppercase">
            welcome
          </p>

          <h2
            className="font-['Playfair_Display'] font-bold text-white leading-[1.1] tracking-tight m-0
            /* Scales from 48px on mobile to 88px on desktop */
            text-[48px] md:text-[88px]"
          >
            to the future of
            <br />
            <span>micro–learning</span>
          </h2>

          <p className="font-syne text-[14px] md:text-[15px] font-normal text-white/50 leading-[1.65] max-w-[520px]">
            Wasting hours on entertainment with zero ROI? Reclaim your time and
            your focus by switching to a feed designed for growth, not
            distraction.
          </p>
        </div>

        {/* LEFT CARDS — Adjusted for mobile */}
        <div className="absolute bottom-[-20px] left-[-60px] md:left-[-40px] w-[300px] md:w-[460px] h-[250px] md:h-[360px] z-0 opacity-40 md:opacity-100">
          {/* Back card */}
          <div className="absolute w-[180px] md:w-[260px] h-[220px] md:h-[320px] rounded-[20px] overflow-hidden rotate-[15deg] origin-bottom-left left-[60px] md:left-[100px] bottom-[40px] z-[1]">
            <img
              src={card2}
              alt="App screen 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Front card */}
          <div className="absolute w-[180px] md:w-[260px] h-[220px] md:h-[320px] rounded-[20px] overflow-hidden rotate-[-20deg] origin-bottom-left left-[60px] md:left-[100px] bottom-0 z-[2]">
            <img
              src={card1}
              alt="App screen 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CARDS — Adjusted for mobile */}
        <div className="absolute bottom-[-20px] right-[-60px] md:right-[-40px] w-[300px] md:w-[460px] h-[250px] md:h-[360px] z-0 opacity-40 md:opacity-100">
          {/* Front card */}
          <div className="absolute w-[180px] md:w-[260px] h-[220px] md:h-[320px] rounded-[20px] overflow-hidden rotate-[-18deg] origin-bottom-right right-[30px] md:right-[40px] bottom-[50px] z-[2]">
            <img
              src={card3}
              alt="App screen 3"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Back card */}
          <div className="absolute w-[180px] md:w-[260px] h-[220px] md:h-[320px] rounded-[20px] overflow-hidden rotate-[-18deg] origin-bottom-right right-[180px] md:right-[250px] top-[80px] md:top-[120px] z-[1]">
            <img
              src={card4}
              alt="App screen 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* FIXED BOTTOM ALIGNED BADGE */}
        <div
          className="absolute bottom-6 md:bottom-[40px] left-1/2 -translate-x-1/2 z-20 
                     inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white 
                     text-[#0d0e0c] font-syne text-[12px] md:text-[13px] font-medium shadow-2xl whitespace-nowrap"
        >
          ⭐ Loved by 1M+ users worldwide
        </div>
      </section>
    </>
  );
}
