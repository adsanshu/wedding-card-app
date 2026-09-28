export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-cream border-2 border-gold rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-600 hover:text-maroon font-bold"
        >
          ✕
        </button>

        <div className="text-4xl mb-2">🌼</div>
        <h3 className="text-2xl font-bold text-maroon uppercase tracking-wider">{event.title}</h3>
        <p className="text-lg font-semibold text-gray-700 mb-4">{event.hindiTitle}</p>

        <div className="bg-white p-4 rounded-xl border border-gold/30 space-y-2 text-sm text-gray-700 text-left mb-6">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          {event.description && (
            <p className="pt-2 border-t border-gray-100 text-xs text-gray-600">{event.description}</p>
          )}
        </div>

        <a
          href="#venue"
          onClick={onClose}
          className="inline-block w-full bg-maroon text-gold font-bold py-2.5 rounded-lg border border-gold/40 shadow hover:bg-maroon/90 transition text-sm"
        >
          📍 View Location
        </a>
      </div>
    </div>
  );
}
