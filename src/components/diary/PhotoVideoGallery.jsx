import { memoriesData } from '../../data/memoriesData';

export default function PhotoVideoGallery() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-maroon flex items-center gap-2">
        📷 Photo & Video Memories
      </h3>

      {/* Photos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {memoriesData.photos.map((item, idx) => (
          <div key={idx} className="group relative rounded-xl overflow-hidden border border-gold/30 shadow-sm aspect-square bg-cream">
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-2 text-white text-xs font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

