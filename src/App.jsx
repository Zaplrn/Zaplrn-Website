import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Microlearning from "./Components/Microlearning";
import FeatureSection from "./Components/FeatureSection"; // This is your selection section
import FeaturesSection from "./Components/FeaturesSection"; // Creator content
import Scrollsection from "./Components/ScrollSection"; // Learner content
import GrowthSection from "./Components/GrowthSection";
import WhySection from "./Components/WhySection";
import DownloadCTA from "./Components/DownloadCTA";

function App() {
  // view can be: null (initial), 'creator', or 'learner'
  const [view, setView] = useState(null);

  const handleSelection = (selectedRole) => {
    setView(selectedRole);
    // Optional: Auto-scroll to the next section after selection
    window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0d0e0c]">
      <Navbar />
      <HeroSection />
      <Microlearning />

      {/* The Selection Section */}
      <FeatureSection onSelect={handleSelection} />

      {/* Case 1: For Creators */}
      {view === "creator" && (
        <>
          <FeaturesSection />
          <GrowthSection />
          <WhySection />
          <DownloadCTA />
        </>
      )}

      {/* Case 2: For Learners */}
      {view === "learner" && (
        <>
          <Scrollsection />
          <GrowthSection />
          <WhySection />
          <DownloadCTA />
        </>
      )}

      {/* Case 3: Initial State (Optional) */}
      {/* If you want them to see nothing until they pick, leave this empty. 
          If you want a default view, put it here. */}
      {!view && (
        <div className="py-20 text-center text-gray-500 font-syne">
          Please select an option above to continue your journey.
        </div>
      )}
    </div>
  );
}

export default App;
