# Webpack Task 3

Webpack setup with development server, modular structure, code splitting, and source maps.

## Features

- Webpack dev server on port 8564
- Modular component architecture (header, body, footer)
- Code splitting with separate entry points per module
- CleanWebpackPlugin for build cleanup
- HtmlWebpackPlugin for automatic HTML generation
- Source maps for debugging (development mode)

## Build

```bash
npm install
npm run build
```

## Development

```bash
npm run start-dev
```

Server runs at `http://localhost:8564/`

## Output

- Production: Minified bundles in `public/`
- Development: Source maps and dev server on localhost:8564
