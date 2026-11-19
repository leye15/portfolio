import type { CentreInteret } from './types'

/* =====================================================================
   ✏️  TES CENTRES D'INTÉRÊT
   ===================================================================== */

export const centresInteret: CentreInteret[] = [
  {
    id: 'photographie',
    titre: 'Photographie',
    description:
      "J'adore la photographie : les couchers de soleil, les reflets, les ambiances néon et l'art graphique. Composer une image, c'est choisir ce qu'on montre, un peu comme une bonne visualisation de données.",
    apport: 'Le sens du détail et de la composition visuelle.',
    softSkills: ['Créativité', 'Sens de l’esthétique'],
    icone: 'camera',
    image: 'images/interets/coucher-mer.jpg',
  },
  {
    id: 'voyage',
    titre: 'Voyages & cultures',
    description:
      "Du Sénégal à la France, de Louvain à Saragosse : chaque voyage est une occasion de rencontrer d'autres façons de penser et de travailler.",
    apport: "M'adapter vite à un nouvel environnement et travailler avec des profils variés.",
    softSkills: ['Adaptabilité', 'Ouverture d’esprit'],
    icone: 'plane',
    image: 'images/interets/plage-palmiers.jpg',
  },
  {
    id: 'basket',
    titre: 'Basket',
    description: '[Depuis quand, en club ou en loisir…]',
    apport: "L'esprit d'équipe et la réactivité.",
    softSkills: ['Esprit d’équipe', 'Persévérance'],
    icone: 'dumbbell',
    image: '',
  },
  {
    id: 'lecture',
    titre: 'Lecture',
    description:
      "J'aime les livres de psychologie et ceux qui stimulent l'ouverture d'esprit : comprendre comment les gens pensent, décident et réagissent.",
    apport: 'Mieux comprendre les autres, utile pour travailler avec des patients et des soignants.',
    softSkills: ['Curiosité', 'Empathie', 'Ouverture d’esprit'],
    icone: 'book',
    image: 'images/interets/visage-lignes.jpg',
  },
  {
    id: 'cinema',
    titre: 'Cinéma',
    description: '[Tes genres ou films préférés]',
    apport: 'Un regard attentif aux histoires et aux émotions.',
    softSkills: ['Sens de l’observation'],
    icone: 'film',
    image: 'images/interets/neon.jpg',
  },
  {
    id: 'maths',
    titre: 'Mathématiques',
    description:
      "Ma passion depuis le collège, transmise par mon oncle professeur de mathématiques : comprendre les concepts qui permettent de modéliser le monde.",
    apport: 'La rigueur et le goût des problèmes bien posés.',
    softSkills: ['Rigueur', 'Esprit d’analyse'],
    icone: 'calculator',
    image: '',
  },
]

/** Galerie « Inspirations » (images dans public/images/interets) */
export const galerie = [
  { src: 'images/interets/reflet-automne.jpg', alt: 'Reflet d’un coucher de soleil sur un lac en automne' },
  { src: 'images/interets/loup-neon.jpg', alt: 'Illustration néon d’un loup lumineux' },
  { src: 'images/interets/bateau.jpg', alt: 'Bateau et promeneur au coucher du soleil' },
  { src: 'images/interets/portrait-art.jpg', alt: 'Portrait graphique aux tons chauds' },
  { src: 'images/interets/coucher-mer.jpg', alt: 'Coucher de soleil sur la mer' },
  { src: 'images/interets/visage-lignes.jpg', alt: 'Visage dessiné en lignes fluides' },
]

/** Bandeau « En ce moment » */
export const enCeMoment = [
  { type: 'Je lis', titre: 'Psychologie & développement personnel' },
  { type: "J'apprends", titre: 'Les SI de santé à ISIS' },
  { type: 'Je cherche', titre: 'Un stage dès le 24 mai 2027' },
]
