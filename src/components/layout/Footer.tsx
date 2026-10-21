import React from 'react';
import { MapPin, Phone, Mail, Clock, Wrench, Globe, Share2 } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer id="contact" className="bg-neutral-950 text-white border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 text-black p-2 rounded-xl font-black">
                <Wrench size={20} />
              </div>
              <span className="text-lg font-black tracking-wider">AUTOCARE <span className="text-yellow-500">GARAGE</span></span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Votre partenaire auto de confiance pour l'entretien et la réparation de tous types de véhicules.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-500 transition"><Globe size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-yellow-500 transition"><Share2 size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-yellow-500">Liens rapides</h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-400">
              <li><a href="#accueil" className="hover:text-white transition">Accueil</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#apropos" className="hover:text-white transition">À propos</a></li>
              <li><a href="#realisations" className="hover:text-white transition">Nos réalisations</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-yellow-500">Nos Services</h4>
            <ul className="space-y-2 text-xs font-semibold text-neutral-400">
              <li><a href="#services" className="hover:text-white transition">Diagnostic</a></li>
              <li><a href="#services" className="hover:text-white transition">Entretien</a></li>
              <li><a href="#services" className="hover:text-white transition">Pneumatiques</a></li>
              <li><a href="#services" className="hover:text-white transition">Freinage</a></li>
              <li><a href="#services" className="hover:text-white transition">Carrosserie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-yellow-500">Contactez-nous</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                <span>Route de Rufisque, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-500 shrink-0" />
                <span>+221 77 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-500 shrink-0" />
                <span>contact@autocare.sn</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-yellow-500 shrink-0" />
                <span>Lun - Sam : 08h00 - 19h00</span>
              </li>
            </ul>
            <button 
              onClick={onOpenReservation}
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-2.5 rounded-lg text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Prendre Rendez-vous
            </button>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Autocare Garage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};