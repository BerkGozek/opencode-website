# AGENTS.md

Project constraints for coding agents working in this repository.

## Scope

- This is a one-page static website about Fullmetal Alchemist.
- The site uses only `index.html`, `style.css`, and `script.js`.
- Do not add dependencies, package managers, build tools, or CDN links.
- Do not install packages or create `node_modules/`.

## Rules

- Keep all work inside this project directory.
- Serve only on localhost (`127.0.0.1` or `localhost`). Never bind to `0.0.0.0`.
- Do not deploy, create accounts, or publish anything.
- Do not commit or push unless the user explicitly asks.
- Do not start a server unless the user explicitly asks.
- Do not add secrets or `.env` files. `.env` is git-ignored, but keep it empty of real values anyway.

## Quality bar

- Use semantic HTML (`header`, `main`, `section`, `footer`, real `button` elements).
- The page must work at narrow (about 360px) and wide (1280px+) widths.
- Every control must work with the keyboard and show a visible focus outline.
- Respect `prefers-reduced-motion`. Do not add autoplay audio or flashing content.
- Keep JavaScript small and readable. Prefer plain DOM APIs.
- Keep facts about the series accurate, and keep the fan-site disclaimer in the footer.

## Checks

- Validate JavaScript syntax with `node --check script.js` when Node.js is available.
- Confirm that every file referenced in `index.html` exists.
- Browser behavior (layout, keyboard, focus) needs a human check in a real browser.
