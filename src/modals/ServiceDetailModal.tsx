import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ServiceDetailModalProps {
  service: {
    title: string;
    description: string;
    details: string[];
  } | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenReservation }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-800 p-2 rounded-xl"
        >
          <X size={18} />
        </button>

        <div>
          <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">Détails de la prestation</span>
          <h3 className="text-2xl font-black text-white mt-1">{service.title}</h3>
          <p className="text-neutral-400 text-xs mt-2 leading-relaxed">{service.description}</p>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-500">Ce qui est inclus :</h4>
          <ul className="space-y-2.5">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-center gap-3 text-xs text-neutral-300">
                <CheckCircle2 size={16} className="text-yellow-500 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 flex gap-4">
          <button 
            onClick={onOpenReservation}
            className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
          >
            Réserver ce service
          </button>
          <button 
            onClick={onClose}
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};