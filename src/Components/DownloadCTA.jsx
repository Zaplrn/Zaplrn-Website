import PlayStoreImg from "../assets/footer-PlayStore-Icon.png";
import AppStoreImg from "../assets/footer-AppStore-Icon.png";
import { useState } from "react";
import ComingSoonModal from "./modelComponent/CommingSoonModel";

export default function DownloadCTA() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="w-full bg-[#010101] px-5 sm:px-6">
      <div className="max-w-4xl mx-auto text-center pb-16 sm:pb-20">
        <h2
          className="text-white text-[38px] sm:text-5xl md:text-7xl font-serif font-bold tracking-tight sm:tracking-tighter leading-[1.12] sm:leading-[1.1] mb-6 sm:mb-8"
          style={{ fontFamily: "Denton" }}
        >
          ready to turn your scroll <br className="hidden md:block" />
          <em>into a superpower?</em>
        </h2>

        <p
          className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12"
          style={{ fontFamily: "Gilroy" }}
        >
          We built Zaplrn because we got tired of losing hours to mindless
          feeds. We took the vertical, fast-paced video format everyone loves
          and re-engineered it to respect your time. By connecting real industry
          practitioners with ambitious minds, we’re turning daily screen time
          into a structured professional asset—one 60-second Zap at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          {/* Play Store Button */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex items-center justify-center cursor-pointer gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full max-w-70 sm:w-auto sm:max-w-none"
          >
            <img
              src={PlayStoreImg}
              alt="Play Store"
              className="w-6 h-6 object-contain"
            />
            <span
              className="font-semibold text-base"
              style={{ fontFamily: "Gilroy" }}
            >
              Play Store
            </span>
          </button>

          {/* App Store Button */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex items-center justify-center cursor-pointer gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full max-w-70 sm:w-auto sm:max-w-none"
          >
            <img
              src={AppStoreImg}
              alt="App Store"
              className="w-6 h-6 object-contain"
            />
            <span
              className="font-semibold text-base"
              style={{ fontFamily: "Gilroy" }}
            >
              App Store
            </span>
          </button>
        </div>

        <ComingSoonModal
          isOpen={showComingSoon}
          onClose={() => setShowComingSoon(false)}
        />
      </div>
    </section>
  );
}
