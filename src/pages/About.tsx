export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src="/E81CF059-9ED8-400A-A537-7C66359AA182.JPG"
            alt="Bartos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 w-full">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
            From traveling the world
            <br />
            <span className="italic text-white/90">to finding home in Bern</span>
          </h1>
        </div>
      </section>

      <section className="relative bg-stone-50 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-8 text-lg leading-relaxed text-gray-700 font-light">
            <p className="text-3xl font-display text-gray-900">
              Hi, I'm Bartos.
            </p>

            <p className="text-xl italic font-display text-gray-600 my-12">
              "To travel is to live."
            </p>

            <p>
              I've taken that idea seriously — living in seven different countries across Europe, Asia and Latin America, from Romania and Spain to Mexico, Scotland, England and the Philippines. Each place taught me something, but Switzerland felt different — maybe because of the way everything simply works. Five years ago, it stole my heart — and Bern became my home.
            </p>

            <p>
              I studied law and explored different career paths, but what I enjoy most is connecting with people and sharing stories, perspectives and the little details that make a place truly memorable. I also have a passion for photography, which helps me notice light, atmosphere and the moments most people walk past.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src="/image.png"
            alt="Bern streets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-2xl sm:text-3xl font-display italic text-gray-900 leading-relaxed mb-16">
            I didn't just fall in love with the landscapes, but with the system behind them — the way everything works.
          </p>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700 font-light">
            <p>
              After years of exploring Switzerland, I realized something: most visitors never get past the surface. They see the Zytglogge, take a photo, and move on — without really understanding why Switzerland is the way it is.
            </p>

            <p>
              And I wanted to change that.
            </p>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/E81CF059-9ED8-400A-A537-7C66359AA182.JPG"
            alt="Tour moment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <p className="text-3xl sm:text-4xl font-display text-white leading-relaxed mb-12">
            <span className="italic">That's why I started these tours.</span>
          </p>

          <div className="space-y-8 text-lg leading-relaxed text-white/90 font-light">
            <p>
              This isn't just about showing you beautiful buildings. It's about helping you understand the Swiss mindset — why rules matter, how the system works and what it's really like to live in one of the most fascinating countries in the world.
            </p>

            <p>
              I share the history, yes — but also the legends, the humor, the contradictions and the honest realities of everyday life. The things you won't find in guidebooks.
            </p>

            <p>
              Whether you're here for a day or planning to stay longer, I want you to leave with a real understanding of Switzerland — not just having seen it.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-3xl sm:text-4xl font-display text-gray-900 leading-relaxed mb-6">
            Because Switzerland isn't just a place you visit.
          </p>
          <p className="text-3xl sm:text-4xl font-display italic text-gray-700 leading-relaxed">
            It's a place you feel.
          </p>
        </div>
      </section>
    </div>
  );
}
