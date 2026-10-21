// Expériences et formation, affichées dans la timeline (du plus récent au plus ancien).

export interface TimelineItem {
  kind: 'experience' | 'education';
  title: string;
  place: string;
  period: string;
  points: string[];
}

export const TIMELINE: TimelineItem[] = [
  {
    kind: 'experience',
    title: 'Stagiaire Business Intelligence',
    place: 'Amen Bank',
    period: '2026',
    points: [
      'Data warehouse en étoile sur SQL Server (9 dimensions, 6 tables de faits) alimenté par des flux Talend.',
      'Rapport Power BI à 4 niveaux (direction, zone, agence, chargé de clientèle) avec sécurité par ligne (RLS).',
      'Application Streamlit avec connexion par rôle et assistant IA 100 % local (Ollama, Llama 3.1 8B).',
      'Supervision du DWH et de la fraîcheur des données avec Grafana et un moniteur Python.',
    ],
  },
  {
    kind: 'experience',
    title: 'Stagiaire Développeur ERP Odoo',
    place: 'Exploit Consult Tunisie',
    period: 'Juil. – août 2025',
    points: [
      'Module Odoo 12 livré en production pour automatiser le timbre fiscal sur tout le cycle commercial.',
      'Héritage Python de sale.order, purchase.order et account.invoice ; vues XML et rapports QWeb personnalisés.',
    ],
  },
  {
    kind: 'education',
    title: "Cycle ingénieur en informatique – option ERP-BI",
    place: 'ESPRIT School of Engineering, Ariana',
    period: '2024 – 2027',
    points: ['Data warehousing, ETL, Power BI, machine learning, ERP.'],
  },
  {
    kind: 'experience',
    title: 'Stagiaire PFE – Développement web',
    place: "Automatisation et Solution d'Entreprise (ASE)",
    period: '2024',
    points: ["Site e-commerce de prêt-à-porter sous WordPress, de l'analyse du besoin à la mise en ligne."],
  },
  {
    kind: 'education',
    title: 'Licence en Gestion des TIC (GTIC)',
    place: "ISET'Com Tunis",
    period: '2021 – 2024',
    points: [],
  },
  {
    kind: 'experience',
    title: 'Stagiaire Développeur logiciel',
    place: 'Smart Tunisian Technoparks (S2T)',
    period: 'Août 2023',
    points: ["Portail du centre d'innovation : gestion des utilisateurs, contrôle d'accès et réservation des espaces."],
  },
  {
    kind: 'experience',
    title: 'Stagiaire Finance',
    place: 'Office de la Marine Marchande et des Ports (OMMP)',
    period: 'Janv. – févr. 2023',
    points: ['Appui au service financier : opérations comptables courantes et reporting.'],
  },
];
