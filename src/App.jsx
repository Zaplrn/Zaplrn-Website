import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Microlearning from "./Components/Microlearning";
import FeatureSection from "./Components/FeatureSection";
import FeaturesSection from "./Components/FeaturesSection";
import Scrollsection from "./Components/ScrollSection";
import GrowthSection from "./Components/GrowthSection";
import WhySection from "./Components/WhySection";
import DownloadCTA from "./Components/DownloadCTA";

function App() {
  const [revealed, setRevealed] = useState(false); // hero clicked or not
  const [view, setView] = useState(null);           // creator or learner

  const handleHeroClick = () => {
    setRevealed(true);
    // scroll to next section smoothly
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }, 100);
  };

  const handleSelection = (selectedRole) => {
    setView(selectedRole);
    window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0d0e0c]">
      <Navbar />

      {/* Always visible */}
      <HeroSection onLetsFix={handleHeroClick} />

      {/* Only shown after "Let's Fix It" is clicked */}
      {revealed && (
        <>
          <Microlearning />
          <FeatureSection onSelect={handleSelection} />

          {/* Creator flow */}
          {view === "creator" && (
            <>
              <FeaturesSection />
              <GrowthSection />
              <WhySection />
              <DownloadCTA />
            </>
          )}

          {/* Learner flow */}
          {view === "learner" && (
            <>
              <Scrollsection />
              <GrowthSection />
              <WhySection />
              <DownloadCTA />
            </>
          )}

          {/* Waiting for selection */}
          {!view && (
            <div className="py-20 text-center text-gray-500 font-syne">
              Please select an option above to continue your journey.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
