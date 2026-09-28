import React from "react";
import { motion } from "framer-motion";
import { familyData } from "../../data/familyData";

export default function HeroSection({ onExploreClick }) {
  return (
    <section className="min-h-screen bg-[#FAF6F0] flex flex-col items-center justify-center p-4 text-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-amber-200/80 shadow-xl"
      >
        <p className="text-lg font-serif text-amber-800 tracking-widest mb-2">
          ॥ ॐ श्री गणेशाय नमः ॥
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#800020] my-3 font-serif">
          शुभ विवाह
        </h1>

        <p className="text-xs text-amber-900 tracking-wider uppercase my-2 font-medium">
          Sneha Evam Aashirwad Sahit
        </p>

        <div className="text-2xl md:text-3xl font-semibold text-gray-800 my-4">
          <span className="text-[#800020] font-bold">{familyData.brideName}</span>
          <br />
          <span className="text-amber-600 text-xl font-normal">संग</span>
          <br />
          <span className="text-[#800020] font-bold">{familyData.groomName}</span>
        </div>

        <div className="my-4 py-2 px-6 bg-amber-100/60 rounded-full inline-block border border-amber-200">
          <p className="text-sm font-semibold text-amber-900">{familyData.weddingMonthYear}</p>
        </div>

        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExploreClick}
            className="bg-[#800020] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:bg-[#600018] transition-all"
          >
            View Event Details ↓
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

