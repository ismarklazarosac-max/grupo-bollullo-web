import { useEffect } from 'react';
import { Hero } from '../sections/Hero';
import { WineShowcase } from '../sections/WineShowcase';
import { WineryCarousel } from '../sections/WineryCarousel';
import { Museum } from '../sections/Museum';
import { News } from '../sections/News';
import { ContactForm } from '../sections/ContactForm';

interface HomePageProps {
  isLoading: boolean;
}

export function HomePage({ isLoading }: HomePageProps) {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero isReady={!isLoading} />
      <WineShowcase />
      <WineryCarousel />
      <Museum />
      <News />
      <ContactForm />
    </main>
  );
}
