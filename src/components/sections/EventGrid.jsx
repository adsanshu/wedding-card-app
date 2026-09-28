import { useState } from 'react';
import { eventsData } from '../../data/eventsData';
import EventModal from './EventModal';

export default function EventGrid() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon font-serifCustom">विवाह-महोत्सव</h2>
        <p className="text-sm text-gray-600">Wedding Functions & Events</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gold/30 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all flex flex-col justify-between text-center relative"
          >
            <div>
              <div className="text-3xl mb-2">✨</div>
              <h3 className="text-xl font-bold text-maroon">{event.title}</h3>
              <p className="text-sm text-gray-600 font-semibold mb-3">{event.hindiTitle}</p>
              
              <div className="text-xs text-gray-500 space-y-1 bg-cream p-3 rounded-lg border border-gold/20">
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.venue}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedEvent(event)}
              className="mt-4 w-full bg-maroon text-gold text-xs font-bold py-2 rounded-lg border border-gold/30 hover:bg-maroon/90 transition"
            >
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
