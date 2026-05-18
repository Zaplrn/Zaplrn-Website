import React from "react";
import PlayStoreImg from "../assets/footer-PlayStore-Icon.png";
import AppStoreImg from "../assets/footer-AppStore-Icon.png";

export default function DownloadCTA() {
  return (
    <section className="w-full bg-[#0d0e0c] pt-2 pb-50 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl">
        <h2 className="text-white text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[1.1] mb-8">
          ready to turn your scroll <br className="hidden md:block" />
          into a superpower?
        </h2>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Play Store Button */}
          <button className="flex items-center justify-center cursor-pointer gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <img
              src={PlayStoreImg}
              alt="Play Store"
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-lg">Play Store</span>
          </button>

          {/* App Store Button */}
          <button className="flex items-center justify-center cursor-pointer gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <img
              src={AppStoreImg}
              alt="App Store"
              className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-lg">App Store</span>
          </button>
        </div>
      </div>
    </section>
  );
}
