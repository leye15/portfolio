# Portfolio — Data & IA en santé

Site portfolio en **React 19 + TypeScript + Tailwind CSS 4 + Framer Motion**, construit à partir de la maquette Google Stitch.

## Lancer le site sur ton ordinateur

Il faut [Node.js](https://nodejs.org) (version 20 ou plus).

```bash
npm install      # une seule fois
npm run dev      # puis ouvre http://localhost:5173
```

## Personnaliser le contenu

**Tout le contenu est dans `src/data/`** : tu n'as pas besoin de toucher aux composants.

| Fichier | Contenu |
|---|---|
| `profil.ts` | Nom, accroche, présentation, liens, situation actuelle, valeurs |
| `parcours.ts` | Bac, BUT, ISIS : pourquoi, apprentissages, compétences |
| `experiences.ts` | Stages et expériences (missions, apprentissages, résultats) |
| `projets.ts` | Projets (avec `origine` : bac / but / isis / perso) |
| `competences.ts` | Compétences, niveau (1 à 5) et où tu les as acquises |
| `interets.ts` | Centres d'intérêt et bandeau « En ce moment » |

Remplace tout ce qui est entre `[crochets]` ou marqué `EXEMPLE`.
Les statistiques de l'accueil (nombre de projets, stages, technos) se calculent **automatiquement**.

### Images, logos et CV

- Photos → `public/images/` (ex : `public/images/photo.jpg`, puis `photo: 'images/photo.jpg'` dans `profil.ts`)
- Logos → `public/logos/` (ex : `logo: 'logos/isis.png'` dans `parcours.ts`)
- CV → `public/cv/CV.pdf`

Tant qu'une image est vide ou introuvable, un dégradé aux couleurs du thème s'affiche à la place.

## Couleurs et thèmes

Les couleurs sont dans `src/index.css`. Chaque parcours a son thème (`data-theme`) :
- `neutral` : accueil et pages générales
- `isis` : charte ISIS (#2F0D73, #7C50DE, #AC54C7, #F56960, #FFB43C, #3CBEBE)
- `but` : bleu marine #23336E + or #C9A34E
- `bac` : bleu #2B4C9B

## Formulaire de contact

Par défaut, le bouton « Envoyer » ouvre l'application mail avec le message prérempli.
Pour recevoir les messages directement : crée un formulaire gratuit sur [formspree.io](https://formspree.io), puis colle son identifiant dans `formspreeId` (`profil.ts`).

## Mettre en ligne

Le site est déployé automatiquement sur **GitHub Pages** à chaque `git push` sur la branche `main`
(workflow `.github/workflows/deploy.yml`).

Première fois uniquement : dans le dépôt GitHub, **Settings → Pages → Source : GitHub Actions**.

Pour tester la version de production en local :

```bash
npm run build && npm run preview
```
