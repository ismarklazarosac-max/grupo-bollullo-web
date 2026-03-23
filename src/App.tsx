import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { Footer } from './sections/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { LocalPage } from './pages/locales/LocalPage';
import { CartaPage } from './pages/cartas/CartaPage';
import { BrunchPage } from './pages/brunch/BrunchPage';
import { EventosPage } from './pages/EventosPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <HashRouter>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage isLoading={isLoading} />} />
          <Route path="/locales/:localId" element={<LocalPage />} />
          <Route path="/cartas/:cartaId" element={<CartaPage />} />
          <Route path="/brunch/:brunchId" element={<BrunchPage />} />
          <Route path="/eventos" element={<EventosPage />} />
        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </HashRouter>
  );
}

export default App;
