import React from "react";

function HeroSection() {
  return (
    <div className="h-screen w-full bg-[url('/Hero-Section.png')] bg-cover max-lg:bg-center lg:bg-[center_10%] flex flex-col items-center justify-center gap-4">
      <div className="font-bold text-5xl mb-2 text-teal-400 sm:absolute sm:left-40 sm:top-50">
        Music Twins
      </div>
      <div className="font-semibold  text-teal-400 mb-8 sm:absolute sm:left-35 sm:top-68">
        Find your music twins based on your vibes
      </div>
      <div className="text-white gap-8 flex font-bold sm:absolute sm:left-48 sm:top-85">
        <button className="bg-blue-500 p-4 rounded-full cursor-pointer hover:bg-secondary">
          Sign In
        </button>
        <button className="bg-red-500 p-4 rounded-full cursor-pointer hover:bg-secondary">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
