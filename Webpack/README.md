# Webpack Module - Learning Path

A comprehensive learning module covering Webpack 5 fundamentals, progressing from basic setup to advanced modular architecture with development servers and code splitting.

## Module Overview

This module contains four progressive tasks that teach Webpack concepts, starting with simple bundling and advancing to modular applications with dev-server support. Each task builds upon the previous one, introducing new concepts and features.

### Learning Progression

- **task_0**: Basic Webpack setup without custom configuration
- **task_1**: Custom `webpack.config.js` with production build optimization
- **task_2**: CSS and image asset handling with loaders and optimization
- **task_3**: Development server, modular architecture, and code splitting

## Quick Start

Each task has its own installation and build process. Start with task_0 and progress sequentially.

```bash
# Navigate to a task directory
cd Webpack/task_X

# Install dependencies
npm install

# Build for production
npm run build

# Start dev server (task_3 only)
npm run start-dev
```

## Directory Structure

```
Webpack/
├── task_0/                    # Basic setup, no custom config
│   ├── src/
│   │   └── index.js           # jQuery import, DOM manipulation
│   ├── dist/
│   │   └── index.html         # Served in browser
│   ├── package.json
│   └── README.md
│
├── task_1/                    # Custom webpack.config.js
│   ├── js/
│   │   └── dashboard_main.js  # Entry point with Lodash debounce
│   ├── public/
│   │   └── index.html         # Contains bundle.js reference
│   ├── webpack.config.js      # Production mode, custom entry/output
│   ├── package.json
│   └── README.md
│
├── task_2/                    # CSS and image loaders
│   ├── js/
│   │   └── dashboard_main.js  # Imports CSS styles
│   ├── css/
│   │   └── main.css           # Styled counter, logo background
│   ├── assets/
│   │   └── holberton-logo.jpg # Image asset with optimization
│   ├── public/
│   │   └── index.html
│   ├── webpack.config.js      # Added style-loader, css-loader, file-loader
│   ├── package.json
│   └── README.md
│
├── task_3/                    # Dev server and modular architecture
│   ├── modules/
│   │   ├── header/
│   │   │   ├── header.js
│   │   │   └── header.css
│   │   ├── body/
│   │   │   ├── body.js        # Debounced counter
│   │   │   └── body.css
│   │   └── footer/
│   │       ├── footer.js
│   │       └── footer.css
│   ├── assets/
│   │   └── holberton-logo.jpg
│   ├── public/                # Output directory
│   ├── webpack.config.js      # Dev server, HTML plugin, multiple entry points
│   ├── package.json
│   └── README.md
│
└── README.md                  # This file
```

## Task Descriptions

### Task 0: Basic Setup

**Goal**: Learn basic Webpack without custom configuration

**Key Features**:
- Default Webpack behavior (entry: `src/index.js`, output: `dist/main.js`)
- jQuery dependency
- HTML file in `dist/` directory
- Simple DOM manipulation

**Build Command**: `npm run build`
**Output**: `dist/main.js` (85.3 KiB)

---

### Task 1: Custom Configuration

**Goal**: Create custom `webpack.config.js` and learn bundling with configuration

**Key Features**:
- Custom entry point: `js/dashboard_main.js`
- Custom output path: `public/bundle.js`
- Production mode optimization
- Lodash debounce for event handling
- Counter dashboard with 5 DOM elements

**Build Command**: `npm run build`
**Output**: `public/bundle.js` (88.2 KiB)

**Key Technologies**:
- `ts-loader`: TypeScript compilation
- Webpack 5 production mode

---

### Task 2: CSS and Images

**Goal**: Learn asset handling with CSS and image loaders

**Key Features**:
- `style-loader` and `css-loader` for CSS import
- `file-loader` and `image-webpack-loader` for image optimization
- Background image styling
- Counter display with custom CSS

**Build Command**: `npm run build`
**Output**: `public/bundle.js` (93.2 KiB) + optimized image asset

**Key Technologies**:
- `style-loader`: Inject CSS into DOM
- `css-loader`: Parse CSS imports
- `file-loader`: Handle static assets
- `image-webpack-loader`: Optimize images (JPEG compression)

---

### Task 3: Dev Server and Modules

**Goal**: Learn development workflow with webpack-dev-server and code splitting

**Key Features**:
- `webpack-dev-server` on port 8564
- Multiple entry points (header, body, footer modules)
- Automatic code splitting with shared vendor chunks
- HtmlWebpackPlugin for auto-generated HTML
- Source maps for debugging
- Hot module reloading capability

**Build Commands**:
- `npm run build`: Production build to `public/` directory
- `npm run start-dev`: Start dev server at `http://localhost:8564/`

**Output**: Multiple bundles with code splitting
- `header.bundle.js`
- `body.bundle.js`
- `footer.bundle.js`
- `runtime.bundle.js`
- `vendors~body.bundle.js` (shared dependencies)

**Key Technologies**:
- `webpack-dev-server`: Development server with live reload
- `html-webpack-plugin`: Auto-generate HTML with correct bundle references
- `clean-webpack-plugin`: Remove old build files
- Code splitting via multiple entry points
- Source maps: `inline-source-map`

---

## Technologies and Dependencies

### Core Bundler
- **Webpack 5.106.2**: Module bundler
- **webpack-cli**: Command-line interface
- **webpack-dev-server**: Development server with hot reload

### Loaders
- **ts-loader**: TypeScript to JavaScript
- **style-loader**: Inject CSS into DOM
- **css-loader**: Parse CSS imports
- **file-loader**: Handle static files
- **image-webpack-loader**: Optimize images

### Plugins
- **ForkTsCheckerWebpackPlugin**: Type checking
- **HtmlWebpackPlugin**: Auto-generate HTML
- **CleanWebpackPlugin**: Remove old builds

### Libraries
- **jQuery 3.7.1**: DOM manipulation
- **Lodash 4.17.21**: Utility functions (debounce)

---

## Common Commands

### Across All Tasks
```bash
# Install dependencies
npm install

# Production build
npm run build

# Clean rebuild
rm -rf dist public node_modules && npm install && npm run build
```

### Task 3 Only
```bash
# Start development server
npm run start-dev

# This opens http://localhost:8564/ in browser with live reload
```

---

## Build Configuration Comparison

| Feature | Task 0 | Task 1 | Task 2 | Task 3 |
|---------|--------|--------|--------|--------|
| Custom Config | ❌ | ✅ | ✅ | ✅ |
| Entry Points | 1 (default) | 1 | 1 | 3 |
| CSS Support | ❌ | ❌ | ✅ | ✅ |
| Image Handling | ❌ | ❌ | ✅ | ✅ |
| Dev Server | ❌ | ❌ | ❌ | ✅ |
| Code Splitting | ❌ | ❌ | ❌ | ✅ |
| HTML Plugin | ❌ | ❌ | ❌ | ✅ |
| Source Maps | ❌ | ❌ | ❌ | ✅ |

---

## Learning Outcomes

After completing this module, you will understand:

1. **Webpack Fundamentals**
   - Entry points and output configuration
   - Module bundling and dependency resolution
   - Asset handling

2. **Loaders and Plugins**
   - How loaders transform files during bundling
   - Plugin hooks into the build process
   - Common patterns for CSS and image handling

3. **Development Workflow**
   - Development vs. production configurations
   - webpack-dev-server for faster iteration
   - Hot module reloading

4. **Code Splitting**
   - Multiple entry points
   - Automatic vendor chunk extraction
   - Bundle size optimization

5. **Modern Build Tooling**
   - TypeScript compilation
   - Asset optimization
   - Source map generation for debugging

---

## Tips and Best Practices

1. **Install Dependencies First**: Always run `npm install` before building to ensure all packages are available.

2. **Clean Builds**: If you encounter issues, delete `node_modules/`, `dist/`, and `public/` directories, then reinstall and rebuild.

3. **Dev Server Port**: Task 3 uses port 8564. Ensure it's not in use before starting the dev server.

4. **TypeScript Compilation**: TypeScript errors won't prevent bundling; check console for compilation warnings.

5. **Image Assets**: Ensure image files are present in the `assets/` directory before building task_2 and task_3.

---

## Troubleshooting

### Build Fails with "Cannot find module"
- Run `npm install` to ensure all dependencies are installed
- Check that you're in the correct task directory

### Dev Server Won't Start (Task 3)
- Ensure port 8564 is not in use
- Run `npm run build` first to generate bundles
- Check Node.js version compatibility (Node 14+ recommended)

### Image Not Loading
- Verify `assets/holberton-logo.jpg` exists
- Rebuild with `npm run build`
- Check browser console for asset path errors

### CSS Not Applying
- Ensure CSS is imported in the JavaScript file
- Rebuild and hard-refresh browser (Ctrl+Shift+R)
- Check for CSS loader configuration in webpack.config.js

---

## Resources

- [Webpack Official Docs](https://webpack.js.org/)
- [Webpack Loaders](https://webpack.js.org/loaders/)
- [Webpack Plugins](https://webpack.js.org/plugins/)
- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

---

## Next Steps

1. Complete each task in order: task_0 → task_1 → task_2 → task_3
2. Read the individual task README.md files for detailed instructions
3. Experiment with modifying webpack.config.js to understand configuration options
4. Try adding new modules and entry points in task_3
5. Integrate with the TypeScript module for advanced type-safe bundling
