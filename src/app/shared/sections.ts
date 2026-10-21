export interface NavSection {
  id: string;
  label: string;
}

export const SECTIONS: NavSection[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'a-propos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
