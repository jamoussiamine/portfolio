// Certifications affichées dans la section « Certifications ».
// `url` = lien de vérification (PDF officiel, badge Credly, page Coursera...).

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Hedera Business Foundation (HBF)',
    issuer: 'The Hashgraph Association',
    date: 'Oct. 2026',
    url: 'https://certs.hashgraphdev.com/8c5da779-8450-4f8b-a5f1-a5f15c00689a.pdf',
    credentialId: '8c5da779-8450-4f8b-a5f1-a5f15c00689a',
  },
  {
    name: 'Hedera Certified Developer Associate (HCDA)',
    issuer: 'The Hashgraph Association',
    date: 'Oct. 2026',
    url: 'https://certs.hashgraphdev.com/774a9eba-4d88-4c4b-94fb-4bb2195d17ee.pdf',
    credentialId: '774a9eba-4d88-4c4b-94fb-4bb2195d17ee',
  },
  {
    name: 'Hedera Certified Foundation (HCF)',
    issuer: 'The Hashgraph Association',
    date: 'Oct. 2026',
    url: 'https://certs.hashgraphdev.com/ae27b879-0b61-4895-a7d6-cbf6824ff36c.pdf',
    credentialId: 'ae27b879-0b61-4895-a7d6-cbf6824ff36c',
  },
  {
    name: 'Introduction to CRM with HubSpot',
    issuer: 'Coursera',
    date: 'Févr. 2026',
    url: 'https://www.coursera.org/account/accomplishments/verify/QMIW1O1KXWEL',
    credentialId: 'QMIW1O1KXWEL',
  },
  {
    name: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Juil. 2025',
    url: 'https://www.credly.com/badges/e1708ed1-777f-408c-8251-a4eab63f1730',
  },
];
