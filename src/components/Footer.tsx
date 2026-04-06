import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-display mb-4">GoBartos Tours</h3>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Discover Bern and understand Switzerland through authentic experiences
              and honest insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-display mb-4">Get in touch</h3>
            <div className="space-y-3 text-sm font-light">
              <p className="flex items-center gap-2 text-stone-300">
                <Mail size={16} className="text-stone-500" />
                info@gobartostours.com
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-sm text-stone-500 font-light">
          <p>&copy; {new Date().getFullYear()} GoBartos Tours</p>
        </div>
      </div>
    </footer>
  );
}
