export default function VenueMap() {
  return (
    <section id="venue" className="bg-white border border-gold/30 rounded-2xl p-6 md:p-8 shadow-md text-center">
      <h2 className="text-3xl font-bold text-maroon font-serifCustom mb-1">विवाह स्थल</h2>
      <p className="text-sm text-gray-600 mb-6">Venue & Location Details</p>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-cream p-4 rounded-xl border border-gold/30 inline-block">
          <h3 className="text-lg font-bold text-maroon">Hotel Rajwada Palace</h3>
          <p className="text-xs text-gray-600">Main Road, City Center, India</p>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-gold/30 shadow-inner">
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.222222222222!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjhCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

