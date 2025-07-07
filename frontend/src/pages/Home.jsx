import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default Home;
