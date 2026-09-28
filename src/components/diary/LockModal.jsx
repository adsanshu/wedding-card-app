import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function LockModal() {
  const { isLockModalOpen, setIsLockModalOpen, unlockDiary } = useAuth();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    const success = unlockDiary(pin);
    if (!success) {
      setError(true);
    } else {
      setError(false);
      setPin("");
    }
  };

  if (!isLockModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-[#FAF6F0] p-6 rounded-2xl max-w-sm w-full border border-amber-300 relative text-center shadow-2xl"
        >
          <button
            onClick={() => setIsLockModalOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>

          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-[#800020]">
            <Lock size={24} />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-1">Private Wedding Diary</h3>
          <p className="text-xs text-gray-600 mb-5">Enter Passcode to view memories</p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••"
              className="w-full text-center text-2xl tracking-widest py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />

            {error && (
              <p className="text-red-500 text-xs font-semibold">
                Galat Passcode! Phir se try karein.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#800020] text-white py-2.5 rounded-lg font-medium hover:bg-[#600018] transition-all"
            >
              Unlock Memories →
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

