# Fullmetal Alchemist: Alchemy Basics

A one-page fan site that explains the basic rules of alchemy in *Fullmetal Alchemist*. It is plain HTML, CSS, and JavaScript with no dependencies.

## Files

- `index.html`: page content and structure
- `style.css`: dark, muted emo look and responsive layout
- `script.js`: category filter for the example cards
- `AGENTS.md`: project constraints for coding agents
- `LICENSE`: project license

## Run locally

You need Python 3 (included with macOS developer tools). No packages are installed.

1. Open a terminal in the project folder:

   ```sh
   cd /Users/berkgozek/Documents/GitHub/opencode-website
   ```

2. Start a static server that listens only on this machine:

   ```sh
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

3. Open the page in your browser:

   ```
   http://127.0.0.1:8000/index.html
   ```

4. Stop the server with `Control + C` in the terminal.

Opening `index.html` directly from the file system also works, but the local server is the recommended way to check it.

## Check the JavaScript syntax

If Node.js is installed:

```sh
node --check script.js
```

No output means the syntax is valid.

## Interaction

In **Alchemy in Action**, the four filter buttons (All, Techniques, Tools, Forbidden) show only the matching cards. The active button shows `aria-pressed="true"`, and a status line reports how many cards are showing. The buttons work with the keyboard: press `Tab` to reach them and `Enter` or `Space` to select one.

## License

See `LICENSE`.
