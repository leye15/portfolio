import type { Parcours } from './types'

/* =====================================================================
   ✏️  TON PARCOURS (du plus ancien au plus récent)
   ===================================================================== */

export const parcours: Parcours[] = [
  {
    id: 'bac',
    theme: 'bac',
    diplome: 'Baccalauréat scientifique (S2)',
    etablissement: 'Lycée de Ndoffane',
    ville: 'Ndoffane, Sénégal',
    annees: '2020 – 2023',
    statut: 'termine',
    mention: 'Mention Bien',
    logo: '',
    image: '',
    tags: ['Mathématiques', 'Physique-chimie', 'SVT'],
    resume:
      "Un bac scientifique S2 obtenu avec la mention Bien au Sénégal : les bases solides qui m'ont permis de poursuivre mes études en France.",
    pourquoi: [
      "Les mathématiques sont une passion que j'ai développée très tôt, notamment grâce à mon oncle, professeur de mathématiques.",
      "La série S2 (mathématiques, physique-chimie, SVT) me permettait de garder des portes ouvertes vers les sciences et la santé.",
    ],
    apprentissages: [
      {
        periode: '2020 – 2023',
        titre: 'Série scientifique S2',
        contenu: ['Mathématiques', 'Physique-chimie', 'Sciences de la vie et de la Terre'],
      },
    ],
    competences: [
      { categorie: 'Fondamentaux', items: ['Mathématiques', 'Raisonnement scientifique'] },
      { categorie: 'Savoir-être', items: ['Rigueur', 'Persévérance'] },
    ],
  },
  {
    id: 'but',
    theme: 'but',
    diplome: 'BUT Science des Données',
    etablissement: 'IUT de Villetaneuse',
    etablissementDetail: 'Université Sorbonne Paris Nord',
    ville: 'Villetaneuse',
    annees: '2023 – 2026',
    statut: 'termine',
    logo: 'logos/iut-villetaneuse-symbole.png',
    image: 'images/but-banniere.jpg',
    tags: ['Statistiques', 'Machine learning', 'R & Python', 'Bases de données'],
    resume:
      "Trois ans de formation entre statistiques, informatique et visualisation, avec de nombreux projets (SAÉ), deux stages et deux programmes Erasmus+.",
    pourquoi: [
      "Passionnée par les mathématiques, je voulais un domaine à la fois scientifique, concret et utile à la société.",
      "Le BUT Science des Données met l'accent sur la pratique, les projets réels et l'insertion professionnelle : il correspondait parfaitement à mon profil.",
    ],
    apprentissages: [
      {
        periode: 'BUT 1 · 2023 – 2024',
        titre: 'Les fondamentaux',
        contenu: [
          'Statistiques descriptives et inférentielles',
          'Programmation en R et Python',
          'Bases de données SQL',
          "Méthodologie d'enquête",
        ],
      },
      {
        periode: 'BUT 2 · 2024 – 2025',
        titre: 'Approfondissement',
        contenu: [
          'Échantillonnage stratifié et redressement',
          'ACP et régression linéaire multiple',
          'Applications interactives (R Shiny)',
          'Stage data analyst à l’USPN',
          'Erasmus+ BIP à Louvain (Belgique)',
        ],
      },
      {
        periode: 'BUT 3 · 2025 – 2026',
        titre: 'Modélisation & IA',
        contenu: [
          'Data mining et machine learning (gradient boosting)',
          'NLP : TF-IDF, SBERT, Word2Vec',
          'Migration de données SQL ↔ NoSQL',
          'Erasmus+ BIP à Saragosse (Espagne)',
          'Stage IA en santé chez FENKU-IT (Sénégal)',
        ],
      },
    ],
    competences: [
      { categorie: 'Traiter', items: ['Python', 'R', 'SQL', 'PostgreSQL', 'MongoDB'] },
      { categorie: 'Analyser & modéliser', items: ['Statistiques', 'Machine learning', 'NLP', 'Sondages'] },
      { categorie: 'Valoriser', items: ['Shiny', 'Power BI', 'ggplot2', 'Plotly'] },
    ],
    partenaires: [
      { nom: 'IUT de Villetaneuse', logo: 'logos/iut-villetaneuse.png' },
      { nom: 'Université Sorbonne Paris Nord', logo: 'logos/uspn.png' },
    ],
  },
  {
    id: 'isis',
    theme: 'isis',
    diplome: 'Cycle ingénieur — Systèmes d’information pour la santé',
    etablissement: "École d'ingénieurs ISIS",
    etablissementDetail: 'INU Champollion — partenaire du Groupe INSA',
    ville: 'Castres',
    annees: '2026 – 2029',
    statut: 'en-cours',
    logo: 'logos/isis-symbole.png',
    image: 'images/isis-banniere.png',
    tags: ['Data & IA en santé', "Systèmes d'information de santé", 'Interopérabilité'],
    resume:
      "Une école d'ingénieurs pionnière en e-santé, pour acquérir un niveau technique plus élevé tout en approfondissant ma connaissance du domaine médical.",
    pourquoi: [
      "Pendant mon stage chez FENKU-IT, j'ai travaillé trois mois sur des données de santé. J'ai compris que la science des données et la santé ne sont pas deux voies entre lesquelles choisir : elles se rejoignent.",
      "ISIS est l'une des rares écoles d'ingénieurs entièrement dédiées au numérique en santé : la formation idéale pour relier ces deux compétences.",
    ],
    apprentissages: [
      {
        periode: 'Spécialité',
        titre: 'Data & IA en santé',
        contenu: ['Machine learning appliqué à la santé', 'Analyse de données de santé', 'Éthique et IA de confiance'],
      },
      {
        periode: 'Spécialité',
        titre: "Systèmes d'information de santé",
        contenu: ['Interopérabilité (HL7 FHIR)', 'Dossier patient informatisé', 'Sécurité et RGPD santé'],
      },
      {
        periode: 'FIE3 · 2026 – 2027',
        titre: 'Première année du cycle',
        contenu: ['Anglais professionnel', "Projets avec des acteurs de santé", 'Stage de 1re année (à partir de mai 2027)'],
      },
    ],
    competences: [
      { categorie: 'Data & IA', items: ['Python', 'Machine learning', 'LLM & RAG'] },
      { categorie: 'Santé numérique', items: ['HL7 FHIR', 'RGPD santé', 'SI hospitaliers'] },
      { categorie: 'Ingénierie', items: ['Gestion de projet', 'Travail en équipe pluridisciplinaire', 'Anglais'] },
    ],
    partenaires: [
      { nom: 'INU Champollion', logo: 'logos/inu-champollion.png' },
      { nom: 'INSA Partenaire', logo: 'logos/insa-partenaire.png' },
    ],
  },
]

export const getParcours = (id: string) => parcours.find((p) => p.id === id)
