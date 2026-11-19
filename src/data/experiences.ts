import type { Experience } from './types'

/* =====================================================================
   ✏️  TES STAGES & EXPÉRIENCES (du plus récent au plus ancien)
   ===================================================================== */

export const experiences: Experience[] = [
  {
    id: 'stage-fenku-it',
    parcours: 'but',
    type: 'Stage',
    poste: 'Stage IA en santé — assistant d’aide à la décision clinique',
    structure: 'FENKU-IT — division Données & IA',
    ville: 'Saly Portudal, Sénégal',
    debut: 'Mai 2026',
    fin: 'Août 2026',
    duree: '3 mois',
    logo: 'logos/fenku-it-symbole.png',
    image: '',
    contexte:
      "Stage de fin de BUT dans une jeune entreprise sénégalaise qui développe une plateforme de santé numérique, avec un assistant destiné aux professionnels de santé. Ma problématique : comment préparer des données médicales fiables quand les sources sont rares, dispersées et dans des formats différents ?",
    missions: [
      'Rechercher, extraire et nettoyer des documents médicaux de formats variés (PDF, tableaux…)',
      'Construire une base documentaire interrogeable par l’assistant (recherche par similarité)',
      'Concevoir le découpage des textes et un schéma d’étiquettes pour rendre la recherche précise',
      'Produire des données d’entraînement pour adapter un modèle au contexte médical sénégalais',
      "Construire une méthode d'évaluation et analyser les cas d'échec",
    ],
    apprentissages: [
      'La qualité des données est déterminante : je vérifie ce que produit chaque traitement',
      'Savoir dire qu’un résultat ne peut pas encore servir, et l’argumenter',
      'Expliquer mon travail à des développeurs et des responsables non spécialistes',
      'Un outil ne vaut que s’il correspond à la réalité du terrain',
    ],
    competences: ['Préparation de données', 'Recherche sémantique', 'Évaluation', 'Autonomie', 'Communication'],
    resultats: [
      { valeur: '25', label: 'sources de formats différents traitées' },
      { valeur: '50 000', label: 'passages interrogeables dans la base' },
      { valeur: '8', label: 'ensembles thématiques organisés' },
    ],
    stack: ['Python', 'pandas', 'FastEmbed', 'Qdrant', 'ONNX Runtime', 'GPT-4o API', 'Google Colab', 'Notion'],
    difficultes: [
      {
        probleme: 'Un traitement qui générait des exemples erronés sans le signaler.',
        solution: "J'ai mis en place des vérifications systématiques des sorties, au lieu de seulement contrôler que le programme ne plante pas.",
      },
      {
        probleme: 'Des contraintes matérielles fortes (mémoire, connexion, coût).',
        solution: 'Lecture en flux, traitement par lots et reprise sans tout recommencer grâce à des empreintes de fichiers.',
      },
    ],
  },
  {
    id: 'bip-saragosse',
    parcours: 'but',
    type: 'Mobilité internationale',
    poste: 'Erasmus+ BIP — Simulation d’un système de surveillance aéroportuaire',
    structure: 'Blended Intensive Programme — équipe internationale (team 4)',
    ville: 'Saragosse, Espagne',
    debut: '[Mois] 2026',
    fin: '[Mois] 2026',
    duree: '1 semaine',
    logo: '',
    image: '',
    contexte:
      "Programme intensif Erasmus+ avec des étudiants européens : modéliser par simulation à événements discrets un système de surveillance d'aéroport par reconnaissance faciale (caméras, nœuds edge, cloud) pour en planifier la capacité et estimer les coûts.",
    missions: [
      'Modéliser les flux de passagers (hall, corridors, vols) et les zones de caméras',
      'Simuler le traitement des visages entre nœuds edge et services cloud',
      'Faire évoluer le modèle par versions successives et analyser les statistiques',
      'Présenter les résultats en anglais',
    ],
    apprentissages: [
      'La simulation à événements discrets pour dimensionner un système',
      'Travailler en anglais au sein d’une équipe multiculturelle',
    ],
    competences: ['Modélisation', 'Simulation', 'Travail en équipe', 'Anglais'],
    resultats: [{ valeur: '1', label: 'modèle complet : 3 zones caméras, 3 nœuds edge' }],
    stack: ['JaamSim', 'Simulation à événements discrets', 'Lois de probabilité'],
  },
  {
    id: 'bip-louvain',
    parcours: 'but',
    type: 'Mobilité internationale',
    poste: 'Erasmus+ BIP BusIT Week — Analyse de données de football',
    structure: 'UCLL — University College Leuven-Limburg',
    ville: 'Louvain, Belgique',
    debut: 'Avril 2025',
    fin: 'Avril 2025',
    duree: '1 semaine',
    logo: '',
    image: 'images/projets/leuven.jpg',
    contexte:
      "Programme intensif Erasmus+ avec l'équipe de football OH Leuven : étudier la transition attaque-défense, c'est-à-dire les 10 secondes qui suivent la perte du ballon (pressing, repli, positionnement).",
    missions: [
      'Analyser les données de position des joueurs après la perte du ballon',
      'Étudier les stratégies de récupération défensive',
      'Présenter les résultats devant un jury international',
    ],
    apprentissages: ['Appliquer la data à un domaine nouveau', 'Collaborer avec une équipe de 7 étudiants européens'],
    competences: ['Analyse de données', 'Travail en équipe multiculturelle', 'Présentation en anglais'],
    resultats: [{ valeur: '7', label: 'étudiants de plusieurs pays dans l’équipe' }],
    stack: ['Python', 'Pandas', 'Jupyter Notebook'],
    liens: [
      { label: 'Présentation (PDF)', url: 'docs/bip-louvain-team10.pdf' },
      { label: 'Voir le code', url: 'https://github.com/CedricLacleUCLL/Team10_BIP-BusIT-Week' },
    ],
  },
  {
    id: 'stage-uspn',
    parcours: 'but',
    type: 'Stage',
    poste: 'Stage data analyst — gestion de bases de données',
    structure: 'Département Science des Données — IUT de Villetaneuse',
    ville: 'Villetaneuse',
    debut: 'Avril 2025',
    fin: 'Juin 2025',
    duree: '2 mois',
    logo: 'logos/iut-villetaneuse-symbole.png',
    image: 'images/stage-uspn-schema.jpg',
    contexte:
      "Au sein du département Science des Données, en lien avec le responsable des systèmes d'information de l'université, j'ai créé une base dédiée au suivi des stages étudiants et une application pour en visualiser les statistiques. En hybride : 3 jours sur site, 2 jours en télétravail.",
    missions: [
      'Analyser la base PostgreSQL existante de l’université',
      'Concevoir une nouvelle base dédiée aux stages et y migrer les données',
      'Développer une application R Shiny : nombre de stages, étudiants avec ou sans stage, entreprises, carte',
      'Rédiger la documentation technique et utilisateur',
    ],
    apprentissages: [
      'Comprendre un schéma de base de données complexe avant d’agir',
      'Écrire des requêtes efficaces sans impacter la base de production',
      'Itérer sur une interface avec les retours des utilisateurs',
    ],
    competences: ['Modélisation de données', 'Migration de données', 'R Shiny', 'Autonomie'],
    resultats: [
      { valeur: '1', label: 'base de suivi des stages opérationnelle' },
      { valeur: '1', label: 'application Shiny de statistiques' },
    ],
    stack: ['PostgreSQL', 'SQL', 'R', 'RStudio', 'Shiny'],
    difficultes: [
      {
        probleme: 'Un schéma de base de données au départ très difficile à lire.',
        solution: 'Des séances avec le responsable SI, mes propres diagrammes simplifiés et une documentation de chaque table importante.',
      },
    ],
  },
  {
    id: 'job-leclerc',
    parcours: 'but',
    type: 'Job étudiant',
    poste: 'Caissière',
    structure: 'E.Leclerc',
    ville: 'Le Kremlin-Bicêtre',
    debut: 'Sept. 2024',
    fin: 'Août 2026',
    duree: '2 ans',
    logo: '',
    image: '',
    contexte: 'Emploi étudiant mené en parallèle de mon BUT.',
    missions: ['Encaissement et gestion des opérations de caisse', 'Accueil client et résolution des problèmes'],
    apprentissages: ['Concilier études et travail', 'Garder son calme face au public'],
    competences: ['Organisation', 'Relation client', 'Fiabilité'],
    resultats: [],
    stack: [],
  },
]

export const experiencesDuParcours = (id: string) => experiences.filter((e) => e.parcours === id)
