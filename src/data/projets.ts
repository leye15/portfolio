import type { CategorieProjet, Origine, Projet } from './types'

/* =====================================================================
   ✏️  TES PROJETS
   origine : 'bac' | 'but' | 'isis' | 'perso'
   Images : dépose-les dans public/images/ puis indique 'images/nom.png'
   ===================================================================== */

export const projets: Projet[] = [
  // ---------------- BUT 3 ----------------
  {
    id: 'recidive',
    titre: 'Data mining — prédiction du risque de récidive',
    origine: 'but',
    categories: ['Machine learning & IA'],
    annee: 'BUT 3 · 2025 – 2026',
    resume: "Prédire le risque de récidive sur 1,47 million d'observations, en mesurant les biais du modèle.",
    description:
      "Projet complet de data mining sur des données judiciaires : nettoyage, exploration, imputation puis modélisation. Une attention particulière a été portée à l'équité : identification des biais structurels, analyse contrefactuelle et réduction des faux positifs.",
    role: 'Préparation des données, modélisation et analyse des biais',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'HistGradientBoosting', 'LightGBM', 'CatBoost'],
    resultats: ["1,47 M d'observations, 54 variables", '≈ 64 % d’accuracy avec un modèle orienté équité', 'Compromis performance / équité documenté'],
    recul: "Ce projet m'a appris qu'un modèle « performant » peut être injuste : une compétence essentielle pour l'IA en santé.",
    image: 'images/projets/recidive.jpg',
    documents: [{ label: 'Rapport final (PDF)', url: 'docs/rapport-recidive.pdf' }],
    github: 'https://github.com/leye15/Projet_data_mining_prediction_de_recidive-',
    aLaUne: true,
  },
  {
    id: 'kaggle-avis',
    titre: 'Prédire une note à partir d’avis clients (Kaggle)',
    origine: 'but',
    categories: ['Machine learning & IA'],
    annee: 'BUT 3 · 2025 – 2026',
    resume: 'Compétition Kaggle de NLP : prédire une note de 1 à 5 à partir du texte des avis.',
    description:
      "Exploration de plus de 15 approches de vectorisation et de modélisation (TF-IDF mots et caractères, SBERT, Word2Vec) sur 80 000 avis d'entraînement. La meilleure approche combine un modèle Ridge et un LightGBM entraîné sur les résidus.",
    role: 'Prétraitement du texte, feature engineering et modélisation',
    stack: ['Python', 'Scikit-learn', 'LightGBM', 'XGBoost', 'SBERT', 'TF-IDF'],
    resultats: ['MSE de 0,6157 (+60 % par rapport à la baseline)', '15+ approches comparées'],
    image: 'images/projets/kaggle.jpg',
    documents: [{ label: 'Notebook', url: 'docs/kaggle-notebook.html' }],
    github: 'https://github.com/leye15/Projet-Pr-diction-de-note-partir-des-avis-clients-',
    aLaUne: true,
  },
  {
    id: 'migration-nosql',
    titre: 'Migration de données SQL ↔ NoSQL',
    origine: 'but',
    categories: ['Bases de données'],
    annee: 'BUT 3 · 2025 – 2026',
    resume: 'Représentation abstraite des données et migration bidirectionnelle entre bases SQL et NoSQL.',
    description:
      "Conception d'une représentation abstraite des données, puis migration dans les deux sens entre PostgreSQL et plusieurs bases NoSQL (MongoDB, Redis, Neo4j), avec un ORM et des DAO pour gérer l'accès aux données.",
    role: 'Conception et développement',
    stack: ['Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Neo4j', 'ORM'],
    resultats: ['4 cas de dénormalisation selon la base cible'],
    image: 'images/projets/nosql.jpg',
    documents: [{ label: 'Notebook', url: 'docs/migration-nosql-notebook.html' }],
    github: 'https://github.com/leye15/Projet-Repr-sentation-abstraite-de-donn-es-et-Migration-de-SQL-vers-NoSQL-et-vise-versa-',
  },
  {
    id: 'eau-potable',
    titre: 'Aura-t-on toujours de l’eau potable partout ?',
    origine: 'but',
    categories: ['Applications & dataviz'],
    annee: 'BUT 3 · 2025 – 2026',
    resume: "Exposé et site de podcasts sur la crise de l'eau potable, ses solutions et leurs limites.",
    description:
      "Projet de recherche et de communication : analyse critique des solutions technologiques (dessalement, réutilisation des eaux), de leurs limites environnementales et sociales, et propositions d'actions individuelles.",
    role: 'Recherche documentaire, rédaction et podcasts',
    stack: ['Recherche documentaire', 'Podcast', 'Site web'],
    image: 'images/projets/eau-potable.jpg',
    documents: [{ label: 'Exposé (PDF)', url: 'docs/eau-potable-expose.pdf' }],
    github: 'https://github.com/marie-smk/podcast-site',
    demo: 'https://marie-smk.github.io/podcast-site/',
  },
  // ---------------- BUT 2 ----------------
  {
    id: 'shiny-energie',
    titre: 'Application Shiny — consommation énergétique en France',
    origine: 'but',
    categories: ['Applications & dataviz'],
    annee: 'BUT 2 · 2024 – 2025',
    resume: "Application interactive pour explorer les consommations d'électricité et de gaz par département.",
    description:
      "Application R Shiny avec carte choroplèthe (métropole et outre-mer), filtres dynamiques par année, secteur et département, graphiques de tendance et tableaux interactifs.",
    role: 'Développement de l’application en équipe',
    stack: ['R', 'Shiny', 'Leaflet', 'ggplot2', 'dplyr', 'sf'],
    resultats: ['Carte interactive avec frontières départementales (GeoJSON)'],
    image: 'images/projets/shiny.jpg',
    documents: [{ label: 'Code R', url: 'docs/application-shiny.R' }],
    videoFichier: 'videos/shiny-demo.mp4',
    github: 'https://github.com/leye15/projet_BUT',
  },
  {
    id: 'sae401-energie',
    titre: 'Prédire la consommation énergétique des logements',
    origine: 'but',
    categories: ['Machine learning & IA', 'Statistiques & enquêtes'],
    annee: 'BUT 2 · 2024 – 2025',
    resume: 'Le diagnostic de performance énergétique (DPE) prédit-il la consommation réelle ?',
    description:
      "SAÉ 401 : analyse des corrélations entre variables DPE, ACP, puis régression linéaire multiple. Résultat clé : le modèle prédit très bien la consommation théorique du DPE, mais mal la consommation réelle mesurée par Enedis.",
    role: 'Analyse statistique et modélisation',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'ACP', 'Régression linéaire'],
    resultats: ['ACP : 72 % de variance expliquée par 2 axes', 'R² = 0,9985 sur le DPE contre 0,0689 sur la consommation réelle'],
    recul: "L'écart entre théorie et réalité m'a appris à toujours confronter un modèle aux données de terrain.",
    image: 'images/projets/sae401.jpg',
    documents: [{ label: 'Notebook', url: 'docs/sae401-notebook.html' }],
  },
  {
    id: 'crous',
    titre: 'Enquête stratifiée sur les habitudes alimentaires (CROUS)',
    origine: 'but',
    categories: ['Statistiques & enquêtes'],
    annee: 'BUT 2 · 2024 – 2025',
    resume: "Impact des régimes alimentaires sur la fréquentation du CROUS du campus de Villetaneuse.",
    description:
      "Plan d'échantillonnage stratifié avec allocation optimale, collecte auprès des étudiants et du personnel, post-stratification et redressement, puis analyse comparative.",
    role: "Plan de sondage, traitement et analyse",
    stack: ['R', 'Échantillonnage', 'Statistiques inférentielles', 'Excel'],
    resultats: ['1 097 répondants', 'Variance réduite de 33 % par rapport à un plan simple'],
    image: 'images/projets/crous.jpg',
    documents: [{ label: 'Compte rendu', url: 'docs/crous-echantillonnage.html' }],
  },
  // ---------------- BUT 1 ----------------
  {
    id: 'statelite',
    titre: 'StatElite — étude de marché pour une implantation d’entreprise',
    origine: 'but',
    categories: ['Statistiques & enquêtes'],
    annee: 'BUT 1 · 2023 – 2024',
    resume: "Analyse de données INSEE et DARES pour recommander le lieu d'implantation d'une entreprise.",
    description:
      "Étude de marché à partir de plus de 1 900 indicateurs socio-économiques : nettoyage automatisé de jeux de données volumineux, analyse démographique, professionnelle et financière des populations cibles, puis recommandation d'implantation.",
    role: 'Nettoyage et analyse des données',
    stack: ['Python', 'Pandas', 'INSEE / DARES'],
    resultats: ['35 000+ lignes et 1 883 colonnes traitées', "Recommandation : Île-de-France"],
    image: 'images/projets/statelite.jpg',
    documents: [
      { label: 'Livrable 2 (PDF)', url: 'docs/statelite-livrable-2.pdf' },
      { label: 'Étape 1 (PDF)', url: 'docs/statelite-etape-1.pdf' },
    ],
    video: 'https://www.youtube.com/watch?v=VFdaT4UG7pw',
    aLaUne: true,
  },
  {
    id: 'sondages-simples',
    titre: 'Sondages simples — statistique inférentielle avec R',
    origine: 'but',
    categories: ['Statistiques & enquêtes'],
    annee: 'BUT 1 · 2023 – 2024',
    resume: "Estimer l'âge moyen des parents à partir des naissances 2019 (INSEE) et évaluer la qualité des sondages.",
    description:
      "SAÉ 202 : fonctions d'échantillonnage aléatoire simple, intervalles de confiance pour moyennes et proportions, et simulation de 1 000 sondages pour vérifier leur qualité.",
    role: 'Programmation R et analyse',
    stack: ['R', 'R Markdown', 'dplyr'],
    resultats: ['≈ 95 % des intervalles contiennent la vraie moyenne, comme attendu'],
    image: 'images/projets/sondages.jpg',
    documents: [{ label: 'Code R Markdown', url: 'docs/sondages-sae202.Rmd' }],
  },
  {
    id: 'enquete-musique',
    titre: 'Les pratiques d’écoute de la musique — enquête',
    origine: 'but',
    categories: ['Statistiques & enquêtes'],
    annee: 'BUT 1 · 2023 – 2024',
    resume: 'Concevoir une enquête pour tester deux hypothèses sociologiques.',
    description:
      "Première SAÉ : conception d'un questionnaire sur l'influence de la classe sociale et de la solitude sur les pratiques musicales, collecte, nettoyage, visualisation et interprétation.",
    role: 'Questionnaire, collecte et analyse',
    stack: ['Méthodologie d’enquête', 'Analyse quantitative'],
    recul: "Cette SAÉ a révélé mes difficultés initiales avec les outils de programmation, que j'ai travaillées ensuite.",
    image: 'images/projets/enquete-musique.jpg',
    documents: [{ label: 'Analyse des questionnaires (PDF)', url: 'docs/enquete-musique-questionnaires.pdf' }],
  },
  // ---------------- Perso ----------------
  {
    id: 'portfolio',
    titre: 'Ce portfolio',
    origine: 'perso',
    categories: ['Applications & dataviz'],
    annee: '2026',
    resume: 'Portfolio responsive dont le thème change selon le parcours consulté.',
    description:
      "Site conçu à partir d'une maquette Google Stitch puis développé en React 19, TypeScript et Tailwind CSS, avec des animations Framer Motion et les chartes graphiques ISIS et USPN.",
    role: 'Conception et développement',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '',
  },
]

export const categoriesProjet: CategorieProjet[] = [
  'Machine learning & IA',
  'Statistiques & enquêtes',
  'Bases de données',
  'Applications & dataviz',
  'Santé numérique',
]

export const projetsDuParcours = (id: Origine) => projets.filter((p) => p.origine === id)
