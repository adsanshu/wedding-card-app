import PhotoVideoGallery from './PhotoVideoGallery';
import FutureStories from './FutureStories';

export default function DiaryHome() {
  return (
    <section className="bg-white border-2 border-gold/40 rounded-3xl p-6 md:p-10 shadow-xl space-y-12">
      <div className="text-center border-b border-gold/20 pb-6">
        <div className="text-4xl mb-2">📖</div>
        <h2 className="text-3xl font-bold text-maroon font-serifCustom">OUR WEDDING DIARY</h2>
        <p className="text-sm text-gray-600">Our Story • Our Moments</p>
      </div>

      {/* Screen 11: Photo & Video Gallery */}
      <PhotoVideoGallery />

      {/* Screen 12: Future Stories */}
      <FutureStories />
    </section>
  );
}

