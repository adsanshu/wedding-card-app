import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { eventsData } from "../../data/eventsData";
import EventModal from "./EventModal";

export default function EventGrid() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section id="events" className="py-16 px-4 bg-[#FAF6F0]">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#800020] font-serif mb-2">
          विवाह कार्यक्रम
        </h2>
        <p className="text-xs text-amber-800 uppercase tracking-widest">
          Wedding Functions & Schedule
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventsData.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#800020]">{event.hindiTitle}</h3>
              <p className="text-sm font-semibold text-gray-700 mb-4">{event.title}</p>
              
              <div className="space-y-2 text-xs text-gray-600 mb-6">
                <p className="flex items-center gap-2">
                  <Calendar size={14} className="text-amber-700" />
                  <span>{event.date}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-amber-700" />
                  <span>{event.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-amber-700" />
                  <span>{event.venue}</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedEvent(event)}
              className="w-full py-2 bg-amber-50 text-[#800020] rounded-xl text-xs font-semibold border border-amber-200 hover:bg-amber-100 transition-all"
            >
              View Invitation →
            </button>
          </motion.div>
        ))}
      </div>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}

