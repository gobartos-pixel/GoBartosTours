interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-0">
        <div className="absolute inset-0">
          <img
            src="/bern-landing.JPG"
            alt="Historic Bern street with Zytglogge clock tower"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 sm:mb-8 leading-[1.15] animate-fade-in drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Discover Bern. Understand Switzerland.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white mb-5 sm:mb-6 max-w-2xl leading-relaxed font-light animate-fade-in animate-delay-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              See beyond the monuments — and discover how this country really works.
            </p>

            <p className="text-base sm:text-lg text-white/90 mb-3 sm:mb-4 max-w-2xl leading-relaxed font-light animate-fade-in animate-delay-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Free & Private Walking Tours with honest local insight.
            </p>

            <p className="text-sm sm:text-base text-white/80 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light animate-fade-in animate-delay-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              History. Legends. Local stories. The Swiss mindset. Real-life facts.
              <br />
              All explained in a simple, engaging way — with a touch of humor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-400">
              <button
                onClick={() => onNavigate('tours')}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white/95 backdrop-blur-sm text-gray-900 text-base sm:text-lg font-medium hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Book Your Tour
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/80 text-white text-base sm:text-lg font-light hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                About Me
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="relative py-20 sm:py-32 md:py-40">
        <div className="absolute inset-0">
          <img
            src="/sunsets/AF74FF43-1FE7-4FA9-8628-91EDF8B27FDE.JPG"
            alt="Swiss landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-stone-50/90 to-stone-50/95" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display italic text-gray-900 mb-4 sm:mb-6 leading-snug">
              This isn't just sightseeing.
              <br />
              It's understanding a place.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              After living in seven countries, I've seen what makes Switzerland different — and why so many people find it fascinating.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-display text-gray-900">Surprising Facts</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                Discover insights about Switzerland that might change the way you see the country.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-display text-gray-900">Real Stories</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                Not just dates and facts. You'll hear what life here actually feels like — from someone who chose to call Switzerland home.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-display text-gray-900">Engaging Experience</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                An interactive and relaxed tour where questions, discussions and curiosity are always welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center py-20 sm:py-0">
        <div className="absolute inset-0">
          <img
            src="/844A69BF-B89A-4550-BF71-1F65FE169B5F.JPG"
            alt="Bern cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32 w-full">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-10 sm:mb-12 leading-tight">
              Choose your
              <br />
              <span className="italic">chapter</span>
            </h2>

            <div className="space-y-8 sm:space-y-10">
              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 sm:gap-6 transition-all duration-300 group-hover:translate-x-2">
                  <div className="text-4xl sm:text-5xl font-display text-white/40 group-hover:text-white/70 transition-colors">01</div>
                  <div className="flex-1 border-l border-white/30 pl-4 sm:pl-6 group-hover:border-white/60 transition-colors">
                    <h4 className="text-xl sm:text-2xl font-display text-white mb-1 sm:mb-2">Free Walking Tour</h4>
                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">Join the group. Daily at 11 AM. Tip-based.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 sm:gap-6 transition-all duration-300 group-hover:translate-x-2">
                  <div className="text-4xl sm:text-5xl font-display text-white/40 group-hover:text-white/70 transition-colors">02</div>
                  <div className="flex-1 border-l border-white/30 pl-4 sm:pl-6 group-hover:border-white/60 transition-colors">
                    <h4 className="text-xl sm:text-2xl font-display text-white mb-1 sm:mb-2">Private Experience</h4>
                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">Your pace. Your questions. CHF 50 per person.</p>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="flex items-start gap-4 sm:gap-6 transition-all duration-300 group-hover:translate-x-2">
                  <div className="text-4xl sm:text-5xl font-display text-white/40 group-hover:text-white/70 transition-colors">03</div>
                  <div className="flex-1 border-l border-white/30 pl-4 sm:pl-6 group-hover:border-white/60 transition-colors">
                    <h4 className="text-xl sm:text-2xl font-display text-white mb-1 sm:mb-2">Alpine Day Trip</h4>
                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                      Mountains, lakes, and stories.
                      <span className="italic ml-1">Coming soon.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('tours')}
              className="mt-12 sm:mt-16 px-8 sm:px-10 py-3 sm:py-4 bg-white/95 backdrop-blur-sm text-gray-900 text-base sm:text-lg font-medium hover:bg-white transition-all duration-300 hover:scale-105"
            >
              Explore all tours
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
