import { Project } from '../models/content.models';

export const PROJECTS: Project[] = [
  {
    id: 'proj-web-app',
    name: 'Portfolio Web App',
    rank: 'A',
    summary: 'A retro CRT/terminal-themed portfolio built as an Angular single-page app.',
    description: [
      'Wanted a portfolio that felt like booting an old TV set instead of yet another card grid, so the whole site is framed as a CRT with a boot sequence and channel-style navigation.',
      'Built as a standalone Angular SPA where every piece of content is strongly typed against shared models and lives in editable data files, with reusable CRT UI primitives and effects driving the retro look.',
    ],
    stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Vitest'],
    links: [{ label: 'repo', url: 'https://github.com/orenji-neko/web-portfolio' }],
    period: '2026',
  },
];
