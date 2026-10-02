# Web Portfolio

My personal portfolio website — a place to showcase who I am, the projects I've built, and how to get in touch.

A single scrolling page built with [Angular](https://angular.dev), [Tailwind CSS](https://tailwindcss.com) and [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll). The design was made in Claude Design.

## Tech Stack

- **Framework:** Angular 22 (standalone components, signals)
- **Styling:** Tailwind CSS 4 (design tokens in `src/styles.css`, component CSS alongside each component)
- **Motion:** Locomotive Scroll 5 (smooth scrolling, parallax, scroll reveals), loaded lazily and skipped for `prefers-reduced-motion`
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

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm start`     | Start the local development server               |
| `npm run build` | Build the project for production into `dist/`    |
| `npm run watch` | Build in watch mode using the development config |
| `npm test`      | Run unit tests with Vitest                       |

## Building for Production

```bash
npm run build
```

The compiled output is written to the `dist/` directory, optimized for performance and speed.

## Project Structure

```
web-portfolio/
├── src/
│   ├── app/
│   │   ├── data/       # Site content (profile, projects, experience, contact, nav)
│   │   ├── models/     # Content interfaces
│   │   ├── services/   # Content signals, SmoothScroll (Locomotive)
│   │   ├── layout/     # Site header and footer
│   │   ├── pages/home/ # The single page and its sections (hero, work, experience, toolbox, contact)
│   │   └── ui/         # Shared pieces (section block, icons, scroll-to directive)
│   ├── index.html      # App entry point
│   └── styles.css      # Design tokens, base styles, motion (Tailwind entry)
├── public/             # Static assets (favicon)
└── angular.json        # Angular workspace configuration
```

To change what the site says, edit the files in `src/app/data/`. The old `/about`, `/projects`, `/experience` and `/contact` URLs redirect to the matching section.

## License

This project is for personal use. Feel free to draw inspiration from it.
