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
import BackToTop from "../Components/BackToTop";

export default function LandingPage() {
  const [appReady, setAppReady] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [view, setView] = useState(null);
  const selectedSectionRef = useRef(null);
  const microlearningRef = useRef(null);

  const handleHeroClick = () => {
    setRevealed(true);

    setTimeout(() => {
      microlearningRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  };

  const handleSelection = (selectedRole) => {
    setView(selectedRole);

    // Wait for the selected section to mount before scrolling to it.
    setTimeout(() => {
      selectedSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  };

  return (
    /* role="main" rather than swapping the tag for <main>: it gives the page
       its required main landmark without adding or changing a single DOM node,
       so layout and styling are provably untouched. */
    <div className="min-h-screen bg-[#0d0e0c]" role="main">
      {!appReady && <Preloader onComplete={() => setAppReady(true)} />}

      <Navbar />

      <HeroSection onLetsFix={handleHeroClick} />

      {revealed && (
        <>
          <div ref={microlearningRef}>
            <Microlearning />
          </div>
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

      <BackToTop />
    </div>
  );
}
