import React from "react";

export default function DownloadCTA() {
  return (
    /* Changed py-10 to pt-4 (top) and pb-32 (bottom) */
    <section className="w-full bg-[#0d0e0c] pt-2 pb-50 px-6 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl">
        {/* Main Heading - Using a bold serif and tight tracking */}
        <h2 className="text-white text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[1.1] mb-8">
          ready to turn your scroll <br className="hidden md:block" />
          into a superpower?
        </h2>

        {/* Subtext - Balanced for readability */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Store Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Play Store Button */}
          <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.67,14L5.25,22.42L15.1,12.57L16.81,15.12M15.1,11.43L5.25,1.58L18.67,10L16.81,10.88L15.1,11.43M14.39,12.71L4.54,22.56C4.78,22.68 5.06,22.75 5.35,22.75C5.73,22.75 6.1,22.65 6.42,22.47L17.75,15.71L14.39,12.71Z" />
            </svg>
            <span className="font-semibold text-lg">Play Store</span>
          </button>

          {/* App Store Button */}
          <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <span className="font-semibold text-lg">App Store</span>
          </button>
        </div>
      </div>
    </section>
  );
}
