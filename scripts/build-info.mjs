// Écrit la date du build dans src/app/data/build-info.ts (lancé avant `ng build` et `ng serve`).
import { writeFileSync } from 'node:fs';

const iso = new Date().toISOString();
writeFileSync(
  new URL('../src/app/data/build-info.ts', import.meta.url),
  `// Fichier généré automatiquement par scripts/build-info.mjs : ne pas modifier.\nexport const BUILD_DATE = '${iso}';\n`,
);
console.log(`build-info: ${iso}`);
