import { Calendar } from 'lucide-react';

interface FloatingCTAProps {
  onNavigate: (page: string) => void;
}

export default function FloatingCTA({ onNavigate }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <button
        onClick={() => onNavigate('booking')}
        className="flex items-center gap-2 px-6 py-4 bg-gray-900 text-white font-light shadow-2xl hover:bg-gray-800 transition-all duration-300 active:scale-95"
      >
        <Calendar size={20} />
        <span>Plan your trip</span>
      </button>
    </div>
  );
}
