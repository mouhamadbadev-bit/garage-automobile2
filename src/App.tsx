import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/section/Hero';
import { Services } from './components/section/Services';
import { About } from './components/section/About';
import { PromoBanner } from './components/section/PromoBanner';
import { Testimonials } from './components/section/Testimonials';
import { ReservationModal } from './modals/ReservationModal';
import { ServiceDetailModal } from './modals/ServiceDetailModal';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{ title: string; description: string; details: string[] } | null>(null);

  const handleOpenServiceDetail = (service: { title: string; description: string; details: string[] }) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />
      
      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <Services onSelectService={handleOpenServiceDetail} />
        <About />
        <PromoBanner onOpenReservation={() => setIsReservationOpen(true)} />
        <Testimonials />
      </main>

      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Modale de Réservation Formspree */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

      {/* Modale de Détails des Services */}
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)}
        onOpenReservation={() => {
          setSelectedService(null);
          setIsReservationOpen(true);
        }}
      />
    </div>
  );
}

export default App;