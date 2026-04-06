export default function Photography() {
  const photos = [
    { id: 1, title: 'Historic Bern', image: '/image.png' },
    { id: 2, title: 'Swiss Landscape', image: '/E81CF059-9ED8-400A-A537-7C66359AA182.JPG' },
  ];

  return (
    <div className="pt-20 min-h-screen bg-stone-50">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/E81CF059-9ED8-400A-A537-7C66359AA182.JPG"
            alt="Swiss Alps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-stone-50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-display text-white mb-4 leading-tight">
            <span className="italic">We don't remember days.</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-4 leading-tight">
            <span className="italic">We remember moments.</span>
          </h2>
          <p className="text-xl text-white/90 font-light">
            Because in the end - IT'S ALL ABOUT THE VIBE
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-4"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl font-display text-gray-900 mb-4">
            Capture your own story
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Add the Photo Package to your private tour for 6–8 professionally edited photos delivered within 3 days.
          </p>
        </div>
      </section>
    </div>
  );
}
