// Projets affichés dans la section « Projets ».
// `tags` = technologies affichées sur la carte. `github` et `demo` sont optionnels.

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'GenZ Financial Profile Analyzer',
    description:
      "Machine learning sur les finances de 6 000 jeunes de la génération Z : ACP, K-Means, DBSCAN, classification (SVM 95,9 %) et régression (R² 0,89), avec une application Streamlit dockerisée.",
    image: 'assets/projects/genz.svg',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'Docker'],
    github: 'https://github.com/jamoussiamine/genz-spending-analysis',
  },
  {
    title: 'EventZella – Projet BI intégré',
    description:
      "Solution décisionnelle complète pour une plateforme d'événementiel : data warehouse, ETL Talend multi-sources, tableaux de bord Power BI et modèles de prévision de la demande.",
    image: 'assets/projects/eventzella.svg',
    tags: ['Power BI', 'Talend', 'SQL Server', 'Machine Learning'],
    note: "Projet d'équipe (ctrlAltWin)",
  },
  {
    title: 'Data Warehouse médical – MIMIC-III',
    description:
      'Entrepôt de données de santé construit sur MIMIC-III : modélisation sous SQL Server, flux ETL SSIS et tableaux de bord Power BI sur les indicateurs hospitaliers.',
    image: 'assets/projects/mimic.svg',
    tags: ['Power BI', 'SSIS', 'SQL Server'],
  },
  {
    title: 'Token Hedera – démo testnet',
    description:
      "Création et gestion d'un token avec le Hedera Token Service sur le testnet, en complément des certifications HCF, HCDA et HBF.",
    image: 'assets/projects/hedera.svg',
    tags: ['Blockchain', 'JavaScript'],
    demo: 'https://hashscan.io/testnet/token/0.0.11066987',
  },
  {
    title: 'WorldCultura – Réservation de vols',
    description:
      'Système de réservation full-stack : application desktop JavaFX et application web Symfony synchronisées sur une même base de données, en méthode agile.',
    image: 'assets/projects/worldcultura.svg',
    tags: ['Java', 'Symfony', 'JavaScript'],
  },
];
