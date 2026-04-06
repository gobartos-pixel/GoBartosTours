import { Clock, Users, MapPin, Calendar, Camera } from 'lucide-react';

interface ToursProps {
  onNavigate: (page: string) => void;
}

export default function Tours({ onNavigate }: ToursProps) {
  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/image.png"
            alt="Bern cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-stone-50" />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl sm:text-6xl font-display text-white mb-4 leading-tight">
            Choose your experience
          </h1>
        </div>
      </section>

      <section className="relative py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">

          <div className="relative">
            <div className="absolute -left-6 top-0 text-8xl font-display text-stone-200 select-none pointer-events-none">01</div>
            <div className="relative pl-20 z-10">
              <div className="mb-6">
                <h2 className="text-4xl font-display text-gray-900 mb-2">
                  Free Walking Tour – Bern (English)
                </h2>
              </div>

              <div className="relative mb-8">
                <img
                  src="/image.png"
                  alt="Bern streets"
                  className="w-full h-80 object-cover mb-6"
                />
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light max-w-2xl">
                This isn't a dry history walk. It's a journey through time in Bern's Old Town — a UNESCO World Heritage Site where history, politics, legends and real Swiss life come together.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed font-light max-w-2xl">
                Along the way, you'll explore some of Bern's most iconic landmarks, including the Zytglogge Clock Tower, the Federal Palace, Bern Cathedral and the Bear Park.
              </p>

              <p className="text-base text-gray-700 mb-6 leading-relaxed font-light max-w-2xl">
                The route also takes you through one of the city's oldest neighbourhoods, the Matte Quarter, and continues along the Aare River, where beautiful views open up over the Old Town.
              </p>

              <p className="text-lg text-gray-900 mb-4 font-medium max-w-2xl">
                But this tour goes beyond monuments.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-8 text-sm">
                <div className="flex items-start gap-3 text-gray-700">
                  <Calendar size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Schedule</p>
                    <p className="font-light">Monday – Sunday at 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Duration</p>
                    <p className="font-light">~2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700 sm:col-span-2">
                  <MapPin size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Meeting point</p>
                    <p className="font-light">Bernabrunnen Fountain, next to the Federal Palace</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700 sm:col-span-2">
                  <Users size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Price</p>
                    <p className="font-light">Tip-based tour (pay what you feel it was worth)</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 max-w-2xl">
                <h3 className="font-display text-xl text-gray-900 mb-4">You'll learn:</h3>
                <div className="space-y-2 text-gray-700 font-light">
                  {[
                    'Why quality of life in Switzerland comes at a price',
                    'How Switzerland works: politics, direct democracy and some of the most surprising votes',
                    'How strict rules shape everyday life',
                    'The legends behind Bern\'s fountains, bears and historic figures',
                    'What truly makes this country so fascinating',
                    'How Napoleon influenced Bern\'s streets and city layout',
                    'How Switzerland\'s unique military system plays a role in everyday life',
                    'Funny anecdotes, local legends and insights into daily life that you won\'t find in a guidebook'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-gray-400">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-100 border border-stone-300 p-5 mb-10 text-sm max-w-2xl font-light">
                <p className="text-gray-800">At the end of the tour, you'll receive personal recommendations on what to do next — from local food spots and viewpoints to evening activities, small excursions near Bern and authentic experiences.</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-5 mb-10 text-sm max-w-2xl font-light">
                <p className="text-amber-900 font-medium">Please book only if you are sure you can attend, as spots are limited.</p>
              </div>

              <button
                onClick={() => onNavigate('booking')}
                className="px-10 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300"
              >
                Reserve your spot
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-0 text-8xl font-display text-stone-200 select-none pointer-events-none">02</div>
            <div className="relative pl-20 z-10">
              <div className="mb-6">
                <h2 className="text-4xl font-display text-gray-900 mb-2">
                  Private Walking Tour – Bern Old Town (English & Spanish)
                </h2>
                <p className="text-sm text-gray-600 font-light italic">Available after 02PM. Flexible time.</p>
              </div>

              <div className="relative mb-8">
                <img
                  src="/E81CF059-9ED8-400A-A537-7C66359AA182.JPG"
                  alt="Private tour"
                  className="w-full h-80 object-cover mb-6"
                />
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light max-w-2xl">
                This private walking tour offers a more relaxed and personalized experience through Bern's Old Town. With more time, a flexible rhythm and space for conversation, you'll discover not only the city's landmarks but also the stories, ideas and everyday details that help explain how Switzerland really works — and why it fascinates so many people.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 mb-8 text-sm">
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Duration</p>
                    <p className="font-light">~2h 30 min</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Users size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Price</p>
                    <p className="font-light">CHF 50 per person</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Calendar size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Schedule</p>
                    <p className="font-light">Afternoons with flexible start times upon request</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Meeting point</p>
                    <p className="font-light">Flexible – hotel pickup within Bern possible</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 max-w-2xl">
                <h3 className="font-display text-xl text-gray-900 mb-4">During this tour you will enjoy:</h3>
                <div className="space-y-2 text-gray-700 font-light">
                  {[
                    'A relaxed and unhurried experience tailored to your interests',
                    'Hidden alleys and quiet spots most visitors miss',
                    'Deeper conversations and authentic local insights',
                    'Fascinating stories about Swiss politics, direct democracy and daily life',
                    'Surprising historical facts that shaped Bern and Switzerland'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-gray-400">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-100 border border-stone-300 p-5 mb-8 text-sm max-w-2xl font-light">
                <p className="text-gray-800">At the end of the tour you will also receive personal recommendations for restaurants, viewpoints, local experiences and day trips around Bern.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-5 mb-10 text-sm max-w-2xl font-light">
                <p className="text-blue-900 font-medium">A small surprise awaits you at the end of the tour.</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-stone-200 p-6 mb-10 max-w-2xl">
                <div className="flex items-start gap-3 mb-2">
                  <Camera size={20} className="text-gray-700 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg text-gray-900">Optional Photo Add-On</h3>
                    <p className="text-gray-600 text-sm font-light">45 CHF</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3 font-light">Capture your time in Bern with a short photo session during the tour.</p>
                <div className="space-y-1 text-sm text-gray-600 pl-8 font-light">
                  <p>• 6–8 professionally edited photos</p>
                  <p>• Taken at iconic locations in Bern's Old Town</p>
                  <p>• Delivered within 3 days</p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('booking')}
                className="px-10 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300"
              >
                Reserve Your Private Experience
              </button>
            </div>
          </div>

        </div>
      </section>

      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display text-gray-900 mb-4">Where we meet</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group overflow-hidden shadow-lg">
              <img
                src="/image.png"
                alt="Bernabrunnen fountain at Federal Palace"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gray-900 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-2xl font-display text-gray-900 mb-3">Bernabrunnen Fountain</h3>
                  <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                    I'll be waiting for you at the Bernabrunnen fountain, next to the Federal Palace. I'll be wearing a backpack and most likely a hat.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/uqpKEJRzCdYwtcrK6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors duration-300 group"
                  >
                    <span>Open in Google Maps</span>
                    <MapPin size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 p-6 mt-8">
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  The fountain is located right in front of the Federal Palace (Swiss Parliament), in the city center. It's an easy spot to find and a beautiful place to start our journey through Bern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
