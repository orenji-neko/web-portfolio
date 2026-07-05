# Web Portfolio

My personal portfolio website — a place to showcase who I am, the projects I've built, and how to get in touch.

Built with [Angular](https://angular.dev) and [Tailwind CSS](https://tailwindcss.com).

## Tech Stack

- **Framework:** Angular 22 (standalone components, signals)
- **Styling:** Tailwind CSS 4
- **Testing:** [Vitest](https://vitest.dev/)
- **Language:** TypeScript
- **Tooling:** Angular CLI, Prettier

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/orenji-neko/web-portfolio.git
cd web-portfolio
npm install
```

### Development server

Start a local development server:

```bash
npm start
```

Once running, open your browser to `http://localhost:4200/`. The app reloads automatically whenever you change a source file.

## Available Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm start`     | Start the local development server                   |
| `npm run build` | Build the project for production into `dist/`        |
| `npm run watch` | Build in watch mode using the development config     |
| `npm test`      | Run unit tests with Vitest                           |

## Building for Production

```bash
npm run build
```

The compiled output is written to the `dist/` directory, optimized for performance and speed.

## Project Structure

```
web-portfolio/
├── src/
│   ├── app/            # Application components and routes
│   ├── index.html      # App entry point
│   └── styles.css      # Global styles (Tailwind)
├── public/             # Static assets
└── angular.json        # Angular workspace configuration
```

## License

This project is for personal use. Feel free to draw inspiration from it.
