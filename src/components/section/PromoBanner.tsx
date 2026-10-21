import React from 'react';

interface PromoBannerProps {
  onOpenReservation: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenReservation }) => {
  return (
    <section id="realisations" className="py-16 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-yellow-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-black flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="bg-black/10 text-black font-extrabold px-3 py-1 rounded-full text-xs uppercase tracking-widest">Offre Spéciale</span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Besoin d'un contrôle complet avant voyage ?</h3>
            <p className="text-black/80 text-xs sm:text-sm">Bénéficiez de 15% de réduction sur votre première révision complète dans notre atelier.</p>
          </div>
          <button 
            onClick={onOpenReservation}
            className="bg-black hover:bg-neutral-900 text-white font-black px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-lg cursor-pointer shrink-0"
          >
            Réserver mon créneau
          </button>
        </div>
      </div>
    </section>
  );
};