import React from "react";
import { familyData } from "../../data/familyData";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-gray-500 border-t border-amber-200/50 bg-[#FAF6F0]">
      <p>{familyData.brideName} & {familyData.groomName} Wedding • {familyData.weddingMonthYear}</p>
    </footer>
  );
}

