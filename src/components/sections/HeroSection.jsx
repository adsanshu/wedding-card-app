export default function HeroSection() {
  return (
    <section id="hero" className="space-y-12 pt-4">
      {/* Screen 1: Cover Page */}
      <div className="relative bg-white border-2 border-gold/40 rounded-3xl p-8 md:p-14 text-center shadow-xl overflow-hidden">
        {/* Corner Floral Design Accents */}
        <div className="absolute -top-6 -left-6 text-5xl opacity-40 select-none">🌺</div>
        <div className="absolute -top-6 -right-6 text-5xl opacity-40 select-none">🌺</div>
        <div className="absolute -bottom-6 -left-6 text-5xl opacity-40 select-none">🌺</div>
        <div className="absolute -bottom-6 -right-6 text-5xl opacity-40 select-none">🌺</div>

        <div className="text-maroon font-bold text-xl md:text-2xl mb-2">ॐ श्री गणेशाय नमः</div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-maroon font-serifCustom my-4 tracking-wide">
          शुभ विवाह
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-800 font-bold my-3">
          [ वर का नाम ] <span className="text-gold font-normal">&</span> [ वधू का नाम ]
        </p>
        
        <p className="text-sm md:text-base text-gray-600 font-semibold mb-6">
          दो हृदय, एक जीवन | Wedding Invitation & Memories
        </p>

        <a
          href="#invite"
          className="inline-block bg-maroon text-gold border border-gold font-bold px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform text-sm"
        >
          📜 View Invitation
        </a>
      </div>

      {/* Screen 2: Public Invitation Text */}
      <div id="invite" className="bg-[#FAF6F0] border border-gold/30 rounded-2xl p-6 md:p-10 text-center shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-maroon mb-4">सादर आमंत्रण</h2>
        
        <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
          परमपिता परमेश्वर की असीम अनुकंपा से हमारे सुपुत्र एवं सुपुत्री का शुभ विवाह संपन्न होने जा रहा है। 
          इस मांगलिक अवसर पर आप सहपरिवार आमंत्रित हैं।
        </p>

        <div className="inline-block bg-white border-2 border-gold/40 rounded-xl p-4 shadow-inner text-center">
          <p className="text-maroon font-bold text-lg">[ वर का नाम ] & [ वधू का नाम ]</p>
          <p className="text-gray-600 text-sm font-semibold mt-1">Wedding Date: 11 December 2026</p>
          <p className="text-xs text-gray-500 mt-2 font-semibold">आप सादर आमंत्रित हैं।</p>
        </div>
      </div>
    </section>
  );
}
