import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Photography from './pages/Photography';
import Booking from './pages/Booking';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'tours':
        return <Tours onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'photography':
        return <Photography />;
      case 'booking':
        return <Booking />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      {currentPage !== 'booking' && <FloatingCTA onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
