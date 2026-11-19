import type { Profil } from './types'

/* =====================================================================
   ✏️  TES INFORMATIONS PERSONNELLES
   ===================================================================== */

export const profil: Profil = {
  prenom: 'Mariama',
  nom: 'Leye',
  titre: 'Élève-ingénieure Data & IA appliquées à la santé',
  accroche: 'Transformer les données de santé en décisions utiles pour les patients et les soignants.',
  presentation:
    "Passionnée de mathématiques depuis le collège, j'ai suivi un BUT Science des Données avant de rejoindre l'école d'ingénieurs ISIS. Mon stage sur un assistant d'aide à la décision clinique m'a convaincue : c'est à la rencontre de la data et de la santé que je veux travailler.",
  photo: 'images/photo.jpg',
  email: 'mariamaleye49@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mariama-leye/',
  github: 'https://github.com/leye15',
  cv: 'cv/CV_stage_Mariama_LEYE.pdf',
  video: '', // lien YouTube d'une vidéo de présentation (optionnel)
  localisation: 'Castres (81)',
  situation: {
    titre: 'Cycle ingénieur ISIS (FIE3) — Systèmes d’information pour la santé',
    description:
      "Je recherche un stage de 1re année du cycle ingénieur, de 2 mois minimum, pour mettre la donnée et les systèmes d'information au service des équipes de soins.",
    disponibilite: 'Dès le 24 mai 2027',
    mobilite: 'Mobilité : France entière',
  },
  valeurs: [
    {
      titre: 'Humanisme',
      texte: 'Garder le patient et le soignant au centre de chaque solution technique.',
    },
    {
      titre: 'Fiabilité des données',
      texte: 'Vérifier chaque traitement et dire clairement ce que mes résultats ne prouvent pas.',
    },
    {
      titre: 'Ouverture',
      texte: 'Travailler entre la France, le Sénégal et des équipes européennes, en tenant compte du contexte local.',
    },
  ],
  langues: [
    { langue: 'Français', niveau: 'Courant' },
    { langue: 'Anglais', niveau: 'Intermédiaire' },
    { langue: 'Espagnol', niveau: 'Débutant' },
  ],
  formspreeId: '', // optionnel : voir README pour recevoir les messages du formulaire
}
