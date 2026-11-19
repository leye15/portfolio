// Types partagés par toutes les données du portfolio.

export type ThemeId = 'neutral' | 'isis' | 'but' | 'bac'
export type ParcoursId = 'bac' | 'but' | 'isis'
/** Origine d'un projet / d'une compétence : un parcours ou "perso" */
export type Origine = ParcoursId | 'perso'

export interface Profil {
  prenom: string
  nom: string
  titre: string
  accroche: string
  presentation: string
  /** Chemin vers la photo dans /public (ex : "images/photo.jpg"). Vide = placeholder. */
  photo?: string
  email: string
  linkedin?: string
  github?: string
  /** Chemin vers le CV dans /public (ex : "cv/CV.pdf") */
  cv?: string
  localisation: string
  situation: {
    titre: string
    description: string
    disponibilite: string
    mobilite: string
  }
  valeurs: { titre: string; texte: string }[]
  langues: { langue: string; niveau: string }[]
  /** Lien YouTube de la vidéo de présentation */
  video?: string
  /** Identifiant Formspree (optionnel) pour recevoir les messages du formulaire */
  formspreeId?: string
}

export interface EtapeApprentissage {
  periode: string
  titre: string
  contenu: string[]
}

export interface Parcours {
  id: ParcoursId
  theme: ThemeId
  diplome: string
  etablissement: string
  etablissementDetail?: string
  ville: string
  annees: string
  statut: 'termine' | 'en-cours'
  mention?: string
  /** Logo dans /public/logos (optionnel) */
  logo?: string
  /** Photo du campus dans /public/images (optionnel) */
  image?: string
  tags: string[]
  resume: string
  pourquoi: string[]
  apprentissages: EtapeApprentissage[]
  competences: { categorie: string; items: string[] }[]
  /** Logos des établissements de rattachement / partenaires */
  partenaires?: { nom: string; logo: string }[]
}

export interface Experience {
  id: string
  parcours: ParcoursId
  type: 'Stage' | 'Alternance' | 'Job étudiant' | 'Mobilité internationale'
  poste: string
  structure: string
  ville: string
  debut: string
  fin: string
  duree: string
  logo?: string
  image?: string
  contexte: string
  missions: string[]
  apprentissages: string[]
  competences: string[]
  resultats: { valeur: string; label: string }[]
  stack: string[]
  liens?: { label: string; url: string }[]
  /** Difficultés rencontrées et comment je les ai surmontées (prise de recul) */
  difficultes?: { probleme: string; solution: string }[]
}

export type CategorieProjet = 'Machine learning & IA' | 'Statistiques & enquêtes' | 'Bases de données' | 'Applications & dataviz' | 'Santé numérique'

export interface Projet {
  id: string
  titre: string
  origine: Origine
  categories: CategorieProjet[]
  annee: string
  resume: string
  description: string
  role: string
  stack: string[]
  resultats?: string[]
  image?: string
  github?: string
  demo?: string
  /** Lien YouTube d'une vidéo du projet */
  video?: string
  /** Vidéo hébergée sur le site (dans public/videos) */
  videoFichier?: string
  /** Documents téléchargeables (rapports, notebooks…) dans public/docs */
  documents?: { label: string; url: string }[]
  /** Ce que j'en retiens / ce que je ferais autrement */
  recul?: string
  /** Affiché sur la page d'accueil */
  aLaUne?: boolean
}

export type SourceCompetence = ParcoursId | 'stage' | 'projet' | 'mobilite'

export interface Competence {
  nom: string
  /** 1 à 5 */
  niveau: 1 | 2 | 3 | 4 | 5
  sources: SourceCompetence[]
}

export interface GroupeCompetences {
  id: string
  titre: string
  description: string
  icone: 'brain' | 'code' | 'wrench' | 'stethoscope'
  competences: Competence[]
}

export interface CentreInteret {
  id: string
  titre: string
  description: string
  apport: string
  softSkills: string[]
  icone: 'hand-heart' | 'dumbbell' | 'cpu' | 'plane' | 'camera' | 'book' | 'film' | 'calculator'
  image?: string
}
