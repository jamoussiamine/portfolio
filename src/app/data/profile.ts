// Informations personnelles affichées sur le site.
// Modifie ce fichier pour mettre à jour ton nom, tes liens ou tes textes.

export interface Profile {
  firstName: string;
  lastName: string;
  /** Début du titre, suivi d'un mot tapé (effet machine à écrire) en rouge */
  titlePrefix: string;
  /** Mots qui défilent en rouge dans le titre du hero */
  titleWords: string[];
  tagline: string;
  about: string[];
  location: string;
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  photoUrl: string;
  /** Identifiant Formspree (la partie après https://formspree.io/f/). Voir README. */
  formspreeId: string;
}

export const PROFILE: Profile = {
  firstName: 'Med Amine',
  lastName: 'Jamoussi',
  titlePrefix: 'Élève ingénieur',
  titleWords: ['Business Intelligence'],
  tagline:
    "Je transforme des données brutes en entrepôts fiables, en tableaux de bord clairs et en modèles d'IA utiles à la décision.",
  about: [
    'Élève ingénieur en informatique à ESPRIT, spécialité ERP-BI (diplôme prévu en 2027).',
    "Passionné par la transformation digitale et l'IA, j'aime explorer des domaines variés : BI, data engineering, machine learning, cloud, ERP, blockchain. Chaque projet est pour moi l'occasion d'apprendre une nouvelle compétence et de la mettre au service de décisions concrètes. Je suis aujourd'hui à la recherche d'un stage PFE où relever de nouveaux défis, en Tunisie ou à Paris.",
  ],
  location: 'Ariana, Tunisie',
  email: 'medamine.jamoussi@esprit.tn',
  linkedin: 'https://www.linkedin.com/in/jamoussi-amine',
  github: 'https://github.com/jamoussiamine',
  cvUrl: 'assets/cv.pdf',
  photoUrl: 'assets/photo.jpg',
  formspreeId: 'xkjodvvo',
};
