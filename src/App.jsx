import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import EventGrid from './components/sections/EventGrid';
import CompleteSchedule from './components/sections/CompleteSchedule';
import VenueMap from './components/sections/VenueMap';
import FamilySection from './components/sections/FamilySection';
import LockModal from './components/diary/LockModal';
import DiaryHome from './components/diary/DiaryHome';
import Footer from './components/layout/Footer';

function MainContent() {
  const [isLockOpen, setIsLockOpen] = useState(false);
  const { isUnlocked } = useAuth();

  return (
    <div className="min-h-screen bg-cream text-gray-800">
      <Navbar onOpenDiary={() => setIsLockOpen(true)} />
      
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-16">
        {/* Public Sections */}
        <HeroSection />
        <EventGrid />
        <CompleteSchedule />
        <VenueMap />
        <FamilySection />

        {/* Locked / Unlocked Diary Section */}
        {isUnlocked ? (
          <DiaryHome />
        ) : (
          <div className="text-center bg-white p-10 rounded-2xl shadow-md border border-gold/30 my-8">
            <h2 className="text-2xl font-bold text-maroon mb-2">Our Wedding Diary 📖</h2>
            <p className="text-gray-600 mb-4">विशेष क्षणों की झलकियाँ देखने के लिए लॉक खोलें</p>
            <button
              onClick={() => setIsLockOpen(true)}
              className="bg-maroon text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-maroon/90"
            >
              Enter Passcode 🔒
            </button>
          </div>
        )}
      </main>

      <Footer />
      <LockModal isOpen={isLockOpen} onClose={() => setIsLockOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
}
