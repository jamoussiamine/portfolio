// Compétences groupées par catégorie.
// `icon` = classe Devicon (https://devicon.dev). Laisse vide pour une icône générique.

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Data & BI',
    skills: [
      { name: 'Data Warehousing' },
      { name: 'Power BI (DAX, RLS)' },
      { name: 'Talend' },
      { name: 'SSIS' },
      { name: 'Tableau' },
      { name: 'Apache Spark', icon: 'devicon-apachespark-original' },
      { name: 'Pandas', icon: 'devicon-pandas-plain' },
      { name: 'NumPy', icon: 'devicon-numpy-plain' },
    ],
  },
  {
    category: 'IA & Machine Learning',
    skills: [
      { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain' },
      { name: 'Classification & régression' },
      { name: 'Clustering (K-Means)' },
      { name: 'LLM locaux (Ollama)' },
      { name: 'Streamlit', icon: 'devicon-streamlit-plain' },
      { name: 'MLOps' },
    ],
  },
  {
    category: 'Développement',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'PHP', icon: 'devicon-php-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain' },
      { name: 'Symfony', icon: 'devicon-symfony-original' },
    ],
  },
  {
    category: 'Bases de données',
    skills: [
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
      { name: 'Oracle (PL/SQL)', icon: 'devicon-oracle-original' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
    ],
  },
  {
    category: 'DevOps & Outils',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'Airflow', icon: 'devicon-apacheairflow-plain' },
      { name: 'Grafana', icon: 'devicon-grafana-plain' },
      { name: 'n8n' },
      { name: 'CI/CD' },
    ],
  },
  {
    category: 'ERP & Blockchain',
    skills: [
      { name: 'Odoo' },
      { name: 'Hedera Hashgraph' },
    ],
  },
];
