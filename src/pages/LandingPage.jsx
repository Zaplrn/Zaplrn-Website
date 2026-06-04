import { useState, useRef } from "react";
import Preloader from "../Components/Preloader";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Microlearning from "../Components/Microlearning";
import FeatureSection from "../Components/FeatureSection";
import FeaturesSection from "../Components/FeaturesSection";
import Scrollsection from "../Components/ScrollSection";
import GrowthSection from "../Components/GrowthSection";
import WhySection from "../Components/WhySection";
import DownloadCTA from "../Components/DownloadCTA";
import Footer from "../Components/Footer";

export default function LandingPage() {
  const [appReady, setAppReady] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [view, setView] = useState(null);
  const selectedSectionRef = useRef(null);

  const handleHeroClick = () => {
    setRevealed(true);

    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleSelection = (selectedRole) => {
    setView(selectedRole);

    // Wait for the selected section to mount before scrolling to it.
    setTimeout(() => {
      selectedSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#0d0e0c]">
      {!appReady && <Preloader onComplete={() => setAppReady(true)} />}

      <Navbar />

      <HeroSection onLetsFix={handleHeroClick} />

      {revealed && (
        <>
          <Microlearning />
          <FeatureSection onSelect={handleSelection} />

          {view === "creator" && (
            <div ref={selectedSectionRef}>
              <FeaturesSection />
              <GrowthSection />
              <WhySection />
              <DownloadCTA />
            </div>
          )}

          {view === "learner" && (
            <div ref={selectedSectionRef}>
              <Scrollsection />
              <GrowthSection />
              <WhySection />
              <DownloadCTA />
            </div>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}
