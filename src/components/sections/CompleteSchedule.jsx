import { eventsData } from '../../data/eventsData';

export default function CompleteSchedule() {
  return (
    <section id="schedule" className="bg-white border border-gold/30 rounded-2xl p-6 md:p-8 shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-maroon font-serifCustom">विवाह कार्यक्रम</h2>
        <p className="text-sm text-gray-600">Complete Event Timeline</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {eventsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-cream rounded-xl border border-gold/20 shadow-sm"
          >
            <div className="text-maroon font-bold text-sm md:text-base w-24">
              {item.date}
            </div>
            <div className="flex-1 px-4 text-center border-x border-gold/30">
              <p className="font-bold text-gray-800 text-base">{item.title}</p>
              <p className="text-xs text-gray-600">{item.hindiTitle}</p>
            </div>
            <div className="text-xs text-gray-500 font-semibold w-24 text-right">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

