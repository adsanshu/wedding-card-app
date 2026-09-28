import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import EventGrid from "./components/sections/EventGrid";
import FamilySection from "./components/sections/FamilySection";
import LockModal from "./components/diary/LockModal";

export default function App() {
  const handleExploreClick = () => {
    const eventSection = document.getElementById("events");
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#FAF6F0] text-gray-800 font-sans">
        <Navbar />
        
        <main>
          <HeroSection onExploreClick={handleExploreClick} />
          <EventGrid />
          <FamilySection />
        </main>

        <Footer />
        <LockModal />
      </div>
    </AuthProvider>
  );
}

