# Snap Components

**Snap Components** is a component library built with [Vite](https://vitejs.dev/). It provides a collection of reusable, modular, and efficient UI components for modern web applications.

## Features

- 🚀 **Fast** development with Vite
- 📦 **Library Mode** ready for publishing
- 🎨 **Reusable Components** with customizable styles
- 🛠 **Developer-friendly** setup with support for hot-reloading and modern JavaScript/TypeScript

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v22 or higher
- **Yarn**: v4 or higher (a.k.a. **Berry**)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/snap-components.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd snap-components
   ```

3. **Install dependencies**:

   ```bash
   yarn install
   ```

### Development Server

Start the development server to work on your components with hot-reloading:

```bash
yarn dev
```

By default, the development server runs on [http://localhost:5173](http://localhost:5173).

You can preview the components here.

### Build

To build the library for production:

```bash
yarn build
```

This will generate the library in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
yarn preview
```

### Scripts Overview

- **`yarn dev`**: Starts the development server.
- **`yarn build`**: Builds the library for production.
- **`yarn preview`**: Serves the production build locally.
- **`yarn test`** _(optional)_: Run tests if configured.
- **`yarn lint`** _(optional)_: Run linters for code quality checks.

## Project Structure

Here's a brief overview of the directory structure:

```
snap-components/
├── src/                # Source code (components, utilities, etc.)
│   ├── components/     # Individual components
│   ├── styles/         # Global and component-specific styles
│   └── index.ts        # Library entry point
├── public/             # Static assets
├── dist/               # Build output
├── vite.config.ts      # Vite configuration
├── .yarn/              # Yarn 4 (Berry) configuration folder
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Using Plug'n'Play (PnP)

Since you're using Yarn 4, Plug'n'Play (PnP) is likely enabled by default. If you're integrating with tools like VSCode, ensure compatibility by installing the required SDKs:

```bash
yarn dlx @yarnpkg/sdks vscode
```

This will generate a `.vscode` folder with configurations for TypeScript, ESLint, and Prettier.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

### Next Steps:

- Add specific **usage examples** for your components.
- Provide a link to hosted documentation or demos if applicable.
