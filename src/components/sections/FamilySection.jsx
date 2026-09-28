import React from "react";
import { familyData } from "../../data/familyData";

export default function FamilySection() {
  return (
    <section className="py-16 px-4 bg-white border-t border-amber-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#800020] font-serif mb-2">
          स्नेह एवं आशीर्वाद
        </h2>
        <p className="text-xs text-amber-800 uppercase tracking-widest mb-10">
          With Best Compliments & Blessings
        </p>

        <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-amber-200/80 shadow-sm max-w-md mx-auto space-y-6">
          <div>
            <p className="text-xs uppercase text-amber-800 font-bold tracking-wider mb-1">
              Grandparents
            </p>
            <p className="text-base font-semibold text-gray-800">
              {familyData.grandParents.grandmother}
            </p>
            <p className="text-sm text-gray-600">
              & {familyData.grandParents.grandfather}
            </p>
          </div>

          <hr className="border-amber-200/60 w-1/2 mx-auto" />

          <div>
            <p className="text-xs uppercase text-amber-800 font-bold tracking-wider mb-1">
              Parents
            </p>
            <p className="text-base font-semibold text-gray-800">
              Smt. {familyData.parents.mother}
            </p>
            <p className="text-sm text-gray-600">
              & Shri {familyData.parents.father}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

