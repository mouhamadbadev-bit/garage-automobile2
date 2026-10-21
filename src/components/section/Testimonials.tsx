import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mamadou L.",
      text: "Service rapide et professionnel. Je recommande vivement pour le diagnostic électronique !",
      role: "Client fidèle"
    },
    {
      name: "Aissatou D.",
      text: "Équipe à l'écoute, travail soigné et prix justes. Mon véhicule roule parfaitement.",
      role: "Propriétaire de berline"
    },
    {
      name: "Cheikh T.",
      text: "Mon garage de confiance depuis plus de 3 ans. Jamais déçu par les prestations.",
      role: "Chauffeur professionnel"
    }
  ];

  return (
    <section id="avis" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">Avis Clients</span>
Ce que disent nos clients satisfaits        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-neutral-300 text-xs leading-relaxed">"{review.text}"</p>
              <div className="pt-4 border-t border-neutral-800">
                <div className="font-bold text-white text-xs">{review.name}</div>
                <div className="text-neutral-500 text-[10px]">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};