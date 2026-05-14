import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Microlearning from "./Components/Microlearning";
import FeatureSection from "./Components/FeatureSection";
import FeaturesSection from "./Components/FeaturesSection";
import Scrollsection from "./Components/ScrollSection";
import "./App.css";
import { Features } from "tailwindcss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Microlearning />
      <FeatureSection />
      <FeaturesSection />
      <Scrollsection />
    </div>
  );
}

export default App;
