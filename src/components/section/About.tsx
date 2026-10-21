import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../../assets/img2.jpg';

export const About: React.FC = () => {
  return (
    <section id="apropos" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">
            <img 
              src={aboutImg} 
              alt="Atelier Autocare" 
              className="w-full h-100 sm:h-112.5 object-cover" 
            />
          </div>

          <div className="space-y-6">
            <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">À Propos de Nous</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Pourquoi choisir notre garage ?</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Nous mettons tout en oeuvre pour vous offrir un service de qualité, avec des pièces d'origine et un suivi personnalisé pour assurer la longévité de votre véhicule.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Expérience et savoir-faire reconnu",
                "Service honnête, transparent et devis clair",
                "Tarifs compétitifs sans surprise",
                "Pièces de qualité supérieure garanties"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-yellow-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-neutral-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition"
              >
                En savoir plus
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};