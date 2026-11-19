import type { GroupeCompetences } from './types'

/* =====================================================================
   ✏️  TES COMPÉTENCES
   niveau : 1 (notions) → 5 (expert)
   sources : 'bac' | 'but' | 'isis' | 'stage' | 'projet' | 'mobilite'
   ===================================================================== */

export const groupesCompetences: GroupeCompetences[] = [
  {
    id: 'data',
    titre: 'Data science & IA',
    description: 'Traiter, analyser et modéliser des données.',
    icone: 'brain',
    competences: [
      { nom: 'Python (Pandas, NumPy)', niveau: 4, sources: ['but', 'stage', 'projet'] },
      { nom: 'R', niveau: 4, sources: ['but', 'stage', 'projet'] },
      { nom: 'Machine learning (Scikit-learn, LightGBM…)', niveau: 3, sources: ['but', 'projet'] },
      { nom: 'NLP (TF-IDF, SBERT)', niveau: 3, sources: ['projet', 'stage'] },
      { nom: 'IA générative : LLM, RAG, agents', niveau: 3, sources: ['stage'] },
      { nom: 'Statistiques & sondages', niveau: 4, sources: ['but', 'projet'] },
    ],
  },
  {
    id: 'bdd',
    titre: 'Bases de données & visualisation',
    description: 'Stocker, migrer et rendre les données lisibles.',
    icone: 'code',
    competences: [
      { nom: 'SQL / PostgreSQL', niveau: 4, sources: ['but', 'stage'] },
      { nom: 'NoSQL (MongoDB, Redis, Neo4j)', niveau: 3, sources: ['projet'] },
      { nom: 'Bases vectorielles (Qdrant)', niveau: 2, sources: ['stage'] },
      { nom: 'R Shiny', niveau: 4, sources: ['stage', 'projet'] },
      { nom: 'Power BI, Tableau, Excel', niveau: 3, sources: ['but'] },
    ],
  },
  {
    id: 'outils',
    titre: 'Outils & méthodes',
    description: 'Travailler proprement, en équipe et de façon reproductible.',
    icone: 'wrench',
    competences: [
      { nom: 'Git / GitHub', niveau: 3, sources: ['but', 'projet'] },
      { nom: 'Jupyter, Google Colab, RStudio', niveau: 4, sources: ['but', 'stage'] },
      { nom: 'Simulation à événements discrets (JaamSim)', niveau: 2, sources: ['mobilite'] },
      { nom: 'Gestion de projet & agilité', niveau: 3, sources: ['stage', 'projet'] },
    ],
  },
  {
    id: 'sante',
    titre: 'Santé numérique & savoir-être',
    description: 'Comprendre l’environnement de santé et travailler avec les équipes.',
    icone: 'stethoscope',
    competences: [
      { nom: 'Données médicales & aide à la décision', niveau: 3, sources: ['stage'] },
      { nom: 'Systèmes d’information de santé', niveau: 1, sources: ['isis'] },
      { nom: 'Communication & vulgarisation', niveau: 4, sources: ['stage', 'projet'] },
      { nom: 'Travail en équipe multiculturelle', niveau: 4, sources: ['mobilite', 'projet'] },
      { nom: 'Anglais (intermédiaire)', niveau: 3, sources: ['mobilite', 'isis'] },
    ],
  },
]

export const nombreTechnologies = groupesCompetences
  .filter((g) => g.id !== 'sante')
  .reduce((n, g) => n + g.competences.length, 0)
