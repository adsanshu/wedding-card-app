import { memoriesData } from '../../data/memoriesData';

export default function FutureStories() {
  return (
    <div className="space-y-6 pt-6 border-t border-gold/20">
      <h3 className="text-xl font-bold text-maroon flex items-center gap-2">
        ❤️ Our Story Continues...
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {memoriesData.futureCards.map((card, idx) => (
          <div key={idx} className="bg-cream border border-gold/30 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">🎁</div>
            <h4 className="font-bold text-gray-800 text-sm mb-1">{card.title}</h4>
            <p className="text-xs text-gray-500 font-semibold">{card.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

