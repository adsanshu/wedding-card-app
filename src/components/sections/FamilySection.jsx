import { familyData } from '../../data/familyData';

export default function FamilySection() {
  return (
    <section id="family" className="bg-[#FAF6F0] border border-gold/30 rounded-2xl p-6 md:p-8 shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-maroon font-serifCustom">स्नेह एवं आशीर्वाद सहित</h2>
        <p className="text-sm text-gray-600">Our Beloved Family</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* વહૂ पक्ष / Bride Side */}
        <div className="bg-white p-6 rounded-xl border border-gold/30 text-center space-y-3">
          <h3 className="text-xl font-bold text-maroon border-b border-gold/20 pb-2">वधू पक्ष</h3>
          <div className="space-y-1 text-sm text-gray-700">
            {familyData.brideSide.map((member, idx) => (
              <p key={idx}>{member}</p>
            ))}
          </div>
        </div>

        {/* वर पक्ष / Groom Side */}
        <div className="bg-white p-6 rounded-xl border border-gold/30 text-center space-y-3">
          <h3 className="text-xl font-bold text-maroon border-b border-gold/20 pb-2">वर पक्ष</h3>
          <div className="space-y-1 text-sm text-gray-700">
            {familyData.groomSide.map((member, idx) => (
              <p key={idx}>{member}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
