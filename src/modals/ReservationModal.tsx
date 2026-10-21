import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/ton_code_formspree', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-800 p-2 rounded-xl"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">Demande envoyée !</h3>
            <p className="text-neutral-400 text-xs">Nous avons bien reçu votre demande de rendez-vous. Nous vous contacterons très rapidement pour confirmer.</p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 bg-yellow-500 text-black font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">Réservation en ligne</span>
              <h3 className="text-xl font-black text-white">Prendre un Rendez-vous</h3>
              <p className="text-neutral-400 text-xs mt-1">Remplissez ce formulaire pour planifier l'entretien de votre véhicule.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Nom complet</label>
                <input required type="text" name="name" placeholder="Mamadou Ba" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-500 outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Téléphone</label>
                  <input required type="tel" name="phone" placeholder="+221 77 123 45 67" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Véhicule</label>
                  <input required type="text" name="vehicle" placeholder="Toyota Corolla" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Service souhaité</label>
                <select name="service" className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-500 outline-none">
                  <option value="Diagnostic">Diagnostic Électronique</option>
                  <option value="Vidange">Vidange & Entretien</option>
                  <option value="Freinage">Système de Freinage</option>
                  <option value="Pneumatiques">Pneumatiques & Géométrie</option>
                  <option value="Batterie">Batterie & Démarrage</option>
                  <option value="Carrosserie">Carrosserie & Peinture</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Message (optionnel)</label>
                <textarea name="message" rows={3} placeholder="Précisez votre besoin..." className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:border-yellow-500 outline-none resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3.5 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer">
                Confirmer la demande
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};