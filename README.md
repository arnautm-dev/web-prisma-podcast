# PRISMA — lloc web del podcast

## Estructura
- `index.html`: pàgina principal, presentació, catàleg i categories.
- `episode.html`: plantilla de pàgina individual d'episodi.
- `styles.css`: disseny responsive, animacions i estils.
- `script.js`: filtres, menú mòbil i càrrega de les pàgines d'episodi.
- `episodes.js`: dades editables dels episodis.
- `assets/prisma-logo.png`: imatge d'identitat del projecte.

## Afegir un episodi
Edita `episodes.js` i afegeix un objecte a l'array `episodes`. Utilitza:
- `number`, `slug`, `title`, `category`, `description`
- `cover`: ruta a la portada quadrada de l'episodi
- `spotifyUrl`: enllaç directe de Spotify
- `sources`: array d'objectes `{ title, url, note }`
- `transcript`: transcripció en text
- `featured`: `true` per destacar-lo a la pàgina inicial

Desa les portades a `assets/` i actualitza el camp `cover`. Els camps de Spotify, fonts i transcripció dels episodis actuals queden preparats per completar quan tinguis els enllaços i materials definitius.

## Publicar
Puja tota la carpeta a qualsevol allotjament estàtic (GitHub Pages, Netlify, Cloudflare Pages, etc.). No cal cap procés de compilació ni dependències.
