import React from "react";
import { Lock, Unlock } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { isUnlocked, setIsLockModalOpen } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-amber-200/50 px-6 py-3 flex justify-between items-center shadow-sm">
      <div className="font-serif font-bold text-[#800020] text-lg">
        P & G
      </div>
      <button
        onClick={() => setIsLockModalOpen(true)}
        className="flex items-center gap-2 bg-[#800020] text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#600018] transition-all"
      >
        {isUnlocked ? <Unlock size={14} /> : <Lock size={14} />}
        {isUnlocked ? "Diary Unlocked" : "Diary Lock"}
      </button>
    </nav>
  );
}

