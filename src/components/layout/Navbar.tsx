import React, { useState } from 'react';
import { Wrench, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <div className="bg-yellow-500 text-black p-2.5 rounded-xl font-black group-hover:scale-105 transition">
            <Wrench size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white">AUTOCARE</span>
            <span className="text-xs font-bold text-yellow-500 tracking-widest uppercase">Garage</span>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-neutral-300">
          <a href="#accueil" className="hover:text-yellow-500 transition">Accueil</a>
          <a href="#services" className="hover:text-yellow-500 transition">Services</a>
          <a href="#apropos" className="hover:text-yellow-500 transition">À propos</a>
          <a href="#realisations" className="hover:text-yellow-500 transition">Réalisations</a>
          <a href="#avis" className="hover:text-yellow-500 transition">Avis</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </nav>

        {/* Bouton Action */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+221771234567" className="flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-white transition">
            <PhoneCall size={16} className="text-yellow-500" />
            <span>+221 77 123 45 67</span>
          </a>
          <button 
            onClick={onOpenReservation}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-yellow-500/10 cursor-pointer"
          >
            Prendre Rendez-vous
          </button>
        </div>

        {/* Menu Burger Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-neutral-300 hover:text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-4 pb-6 space-y-3">
          <a href="#accueil" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-neutral-300 hover:text-yellow-500 py-1">Accueil</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-neutral-300 hover:text-yellow-500 py-1">Services</a>
          <a href="#apropos" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-neutral-300 hover:text-yellow-500 py-1">À propos</a>
          <a href="#realisations" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-neutral-300 hover:text-yellow-500 py-1">Réalisations</a>
          <a href="#avis" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-neutral-300 hover:text-yellow-500 py-1">Avis</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-neutral-300 hover:text-yellow-500 py-1">Contact</a>
          <button 
            onClick={() => { setIsOpen(false); onOpenReservation(); }}
            className="w-full mt-2 bg-yellow-500 text-black font-black py-3 rounded-xl text-xs uppercase tracking-wider"
          >
            Prendre Rendez-vous
          </button>
        </div>
      )}
    </header>
  );
};