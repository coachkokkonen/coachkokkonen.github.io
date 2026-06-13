# coachkokkonen.fi — Claude-ohjeet

## Sivuston rakenne

Tämä on staattinen HTML/CSS/JS-sivusto ilman buildityökaluja tai frameworkeja.

- `index.html` — etusivu
- `assets/ck.css` — kaikki tyylit
- `assets/ck.js` — kaikki JavaScript
- `samikokkonen/`, `uravalmennus/`, `yksilovalmennus/`, `yksitysille/`, `referenssit/`, `varaus/` — alasivut, joissa jokaisessa oma `index.html`
- `CNAME` — GitHub Pages custom domain (`uusi.coachkokkonen.fi`)

## GitHub-repositorio

- Repo: `coachkokkonen/coachkokkonen.github.io`
- Branch: `main`
- Remote: `git@github.com:coachkokkonen/coachkokkonen.github.io.git`

## Deployaus

Sivusto julkaistaan automaattisesti **GitHub Pagesiin** kun pushataan `main`-branchiin. Ei tarvita erillistä build-vaihetta.

Osoitteet:
- `https://uusi.coachkokkonen.fi` — uusi sivusto (GitHub Pages)
- `https://www.coachkokkonen.fi` — vanha sivusto (Webnode, A/B-vertailua varten)

## GitHub CLI -tunnistautuminen

GitHub-token on tallennettu tiedostoon `/Users/samikokkonen/Desktop/coachkokkonen.fi/.env`:

```
GH_TOKEN=<token>
```

Käytä tokenia näin:

```bash
export GH_TOKEN=$(grep GH_TOKEN /Users/samikokkonen/Desktop/coachkokkonen.fi/.env | cut -d= -f2)
gh auth status
```

`.env`-tiedostoa ei commitoida GitHubiin (`.gitignore` estää tämän).

## SSH-avain

GitHub-yhteys käyttää SSH-avainta `~/.ssh/id_ed25519` (ed25519, lisätty GitHubiin nimellä "Samin Macci").

## DNS

Domain `coachkokkonen.fi` on rekisteröity Webnodella, joka käyttää taustajärjestelmänä `register.it`:n nimipalvelimia (`ns1.register.it`, `ns2.register.it`). DNS-muutokset tehdään Webnode-hallintapaneelissa.

## Analytics

Molemmilla sivuilla (vanha ja uusi) on sama Google Analytics -tunnus: `G-5MKNSXK6ZG`. A/B-vertailu tehdään GA:ssa suodattamalla hostnaimen mukaan.
