import React from "react";
import heroVideo from "../assets/intro-hero-video.mp4";

export default function HeroSection({ onLetsFix }) {
  return (
    <>
      <style>{`
        .hero-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 36px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.8);
          background-color: transparent;
          color: #ffffff;
          font-family: 'Gilroy', sans-serif;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .hero-cta-btn:hover {
          border-color: #ffffff;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }

        .hero-cta-tick {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-cta-row:hover .hero-cta-tick {
          transform: translateX(160px);
        }

        .hero-cta-btn-wrap {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-cta-row:hover .hero-cta-btn-wrap {
          transform: translateX(-60px);
        }
      `}</style>

      <section
        className="w-full bg-[#0d0e0c] flex items-center justify-center box-border
          pt-[100px] md:pt-[164px] pb-20 md:pb-0 min-h-screen md:min-h-[760px]"
      >
        <div className="w-full max-w-[1204px] px-6 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-[609px] flex flex-col justify-center gap-6 md:gap-[36px] text-center md:text-left">
            <h1
              className="font-[Denton] font-bold text-white leading-[1.1] tracking-tight m-0
              text-[42px] md:text-[72px]"
            >
              you scrolled <br className="hidden md:block" />
              something today <br className="hidden md:block" />
              that felt like <br className="hidden md:block" />
              <span>a waste, isn't it?</span>
            </h1>

            {/* CTA Row */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="hero-cta-row">
                {/* Tick circle */}
                <div className="hero-cta-tick w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0">
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

                {/* Let's Fix It button — triggers reveal */}
                <div className="hero-cta-btn-wrap">
                  <button
                    className="hero-cta-btn text-sm md:text-base"
                    onClick={onLetsFix}
                  >
                    Let's Fix It
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[280px] h-[280px] md:w-[464px] md:h-[464px] shrink-0 overflow-hidden rounded-2xl md:rounded-none">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
