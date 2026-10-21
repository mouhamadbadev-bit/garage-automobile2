import React from 'react';
import { Wrench, Shield, Zap, Disc, BatteryCharging, Car, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

interface ServicesProps {
  onSelectService: (service: { title: string; description: string; details: string[] }) => void;
}

const SERVICES_DATA: Service[] = [
  {
    id: 'diagnostic',
    title: 'Diagnostic Électronique',
    description: 'Recherche de pannes avancée avec valise de diagnostic multimarque de dernière génération.',
    icon: <Zap size={24} className="text-yellow-500" />,
    details: [
      'Lecture et effacement des codes défauts',
      'Contrôle des capteurs et calculateurs',
      'Analyse du système d’injection et d’allumage',
      'Rapport complet d’état du véhicule'
    ]
  },
  {
    id: 'entretien',
    title: 'Vidange & Entretien',
    description: 'Changement d’huile de qualité supérieure, remplacement des filtres et contrôles constructeur.',
    icon: <Wrench size={24} className="text-yellow-500" />,
    details: [
      'Vidange complète avec huile homologuée',
      'Remplacement filtre à huile, air et habitacle',
      'Remise à zéro de l’indicateur de maintenance',
      'Niveau des liquides (frein, refroidissement, lave-glace)'
    ]
  },
  {
    id: 'freinage',
    title: 'Système de Freinage',
    description: 'Contrôle et remplacement sécurisé des plaquettes, disques et liquide de frein.',
    icon: <Disc size={24} className="text-yellow-500" />,
    details: [
      'Contrôle d’usure des disques et plaquettes',
      'Purge et remplacement du liquide de frein',
      'Vérification des durites et étriers',
      'Test d’efficacité sur banc de freinage'
    ]
  },
  {
    id: 'pneumatiques',
    title: 'Pneumatiques & Géométrie',
    description: 'Montage, équilibrage, réparation de pneus et réglage précis du parallélisme.',
    icon: <Car size={24} className="text-yellow-500" />,
    details: [
      'Vente et montage de pneus toutes marques',
      'Équilibrage dynamique des roues',
      'Réparation de crevaisons (mèche ou champignon)',
      'Géométrie et parallélisme 3D'
    ]
  },
  {
    id: 'batterie',
    title: 'Batterie & Démarrage',
    description: 'Test de charge, remplacement de batterie et vérification du circuit de démarrage.',
    icon: <BatteryCharging size={24} className="text-yellow-500" />,
    details: [
      'Test électronique de l’état de la batterie',
      'Remplacement avec batterie garantie',
      'Contrôle de l’alternateur et du démarreur',
      'Vérification des cosses et faisceaux'
    ]
  },
  {
    id: 'carrosserie',
    title: 'Carrosserie & Peinture',
    description: 'Débosselage, remise en état et peinture professionnelle pour redonner vie à votre véhicule.',
    icon: <Shield size={24} className="text-yellow-500" />,
    details: [
      'Redressage et débosselage sans peinture',
      'Peinture au four avec teintes d’origine',
      'Remplacement de pare-brise et vitrages',
      'Polissage et rénovation des optiques de phares'
    ]
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">Nos Prestations</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Des services complets pour votre véhicule</h2>
          <p className="text-neutral-400 text-sm">Faites confiance à notre équipe d'experts pour entretenir votre voiture dans les règles de l'art.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/50 transition group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-xs font-semibold text-yellow-500">Garantie incluse</span>
                <button 
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-yellow-500 transition cursor-pointer"
                >
                  <span>Voir les détails</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};