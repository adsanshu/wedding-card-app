
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#FAF6F0] p-6 rounded-2xl max-w-sm w-full border border-amber-300 relative text-center shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            <X size={20} />
          </button>

          <h3 className="text-2xl font-bold text-[#800020] mt-2">
            {event.hindiTitle}
          </h3>
          <p className="text-sm font-semibold text-gray-700 mb-4">{event.title}</p>

          <p className="text-xs text-gray-600 bg-white p-3 rounded-xl border border-amber-200 mb-4">
            {event.description}
          </p>

          <div className="text-xs text-gray-700 space-y-2 mb-6 text-left bg-amber-50/50 p-4 rounded-xl border border-amber-100">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-[#800020] text-white py-2 rounded-xl text-xs font-semibold"
          >
            Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
