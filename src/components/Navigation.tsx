import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Tours' },
    { id: 'about', label: 'About' },
    { id: 'photography', label: 'Photography' },
    { id: 'booking', label: 'Booking' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavigate('home')}
            className="text-xl font-display text-gray-900 hover:text-gray-700 transition-colors"
          >
            GoBartos Tours
          </button>

          <div className="hidden md:flex items-center space-x-10">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-light transition-colors ${
                  currentPage === item.id
                    ? 'text-gray-900 border-b border-gray-900 pb-0.5'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('booking')}
              className="px-6 py-2.5 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-all duration-300"
            >
              Plan your trip
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-light transition-colors ${
                  currentPage === item.id
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('booking')}
              className="w-full px-6 py-3 bg-gray-900 text-white text-base font-light hover:bg-gray-800 transition-colors mt-2"
            >
              Plan your trip
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
