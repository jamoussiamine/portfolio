# Portfolio – Med Amine Jamoussi

Portfolio personnel d'un élève ingénieur ERP-BI à ESPRIT : Business Intelligence, data, IA et certifications.

**Site en ligne : https://amine-jamoussi.vercel.app**

## Technologies

- Angular 21 (composants standalone, signals) + TypeScript
- SCSS, thème noir et rouge défini par variables CSS (`src/styles/_tokens.scss`)
- Reactive Forms + [Formspree](https://formspree.io) pour le formulaire de contact (sans backend)
- Hébergement Vercel, déploiement automatique à chaque push sur `main`

## Lancer le projet

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build de production dans dist/portfolio/browser
```

## Modifier le contenu

Tout le contenu est dans `src/app/data/`, sans toucher aux composants :

| Fichier | Contenu |
|---|---|
| `profile.ts` | nom, titre, phrase d'accroche, à propos, liens, identifiant Formspree |
| `skills.ts` | compétences par catégorie |
| `projects.ts` | projets (description, technologies, liens) |
| `timeline.ts` | expériences et formation |
| `certifications.ts` | certifications et liens de vérification |

Les fichiers statiques sont dans `public/` : `assets/cv.pdf` (CV en français), `assets/cv-en.pdf`, `assets/photo.jpg`, `assets/projects/*.svg`, `og-image.png`.

Pour publier une modification : `git add . && git commit -m "..." && git push`. Vercel redéploie le site automatiquement.
