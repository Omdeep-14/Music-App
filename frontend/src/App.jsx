import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import LandingForm from "./pages/LandingForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingPage" element={<LandingForm />} />
      </Routes>
    </>
  );
}

export default App;
