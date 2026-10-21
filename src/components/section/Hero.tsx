import React from 'react';
import { ShieldCheck} from 'lucide-react';
import heroImg from '../../assets/img1.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="accueil" className="relative bg-neutral-950 py-16 lg:py-24 border-b border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} /> Garage Automobile Professionnel
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Votre voiture, <br />
              <span className="text-yellow-500">entre de bonnes mains</span>
            </h1>
            
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Entretien, réparation et diagnostic toutes marques. Qualité, rapidité et satisfaction garanties par des techniciens qualifiés.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={onOpenReservation}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-xl shadow-yellow-500/10 cursor-pointer"
              >
                Prendre Rendez-vous
              </button>
              <a 
                href="#services"
                className="bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
              >
                Voir nos services
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-neutral-900">
              <div className="space-y-1">
                <div className="text-yellow-500 font-black text-lg">10+</div>
                <div className="text-neutral-400 text-xs">Ans d'expérience</div>
              </div>
              <div className="space-y-1">
                <div className="text-yellow-500 font-black text-lg">2000+</div>
                <div className="text-neutral-400 text-xs">Clients satisfaits</div>
              </div>
              <div className="space-y-1">
                <div className="text-yellow-500 font-black text-lg">15+</div>
                <div className="text-neutral-400 text-xs">Experts qualifiés</div>
              </div>
              <div className="space-y-1">
                <div className="text-yellow-500 font-black text-lg">98%</div>
                <div className="text-neutral-400 text-xs">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-yellow-500 to-amber-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img 
                src={heroImg} 
                alt="Garage Autocare" 
                className="w-full h-100 sm:h-120 object-cover hover:scale-105 transition duration-500" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};