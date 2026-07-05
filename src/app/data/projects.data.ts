import { Project } from '../models/content.models';

/**
 * TODO: Replace these placeholder projects with your real work.
 * Add/remove entries freely — the Projects page renders one card per item.
 * The `architecture` field accepts a plain-text (monospace) diagram; keep it
 * or delete it per project.
 */
export const PROJECTS: Project[] = [
  {
    id: 'proj-cloud-platform',
    name: 'Cloud Deployment Platform', // TODO
    rank: 'S',
    summary: 'Self-service deploy pipeline that ships apps to AWS in one command.', // TODO
    description: [
      'TODO: Describe the problem this solved and who it was for.',
      'TODO: Describe what you built and the impact (metrics, scale, results).',
    ],
    stack: ['TypeScript', 'Node.js', 'AWS ECS', 'Terraform', 'GitHub Actions'], // TODO
    architecture: [
      '  ┌─────────┐   push   ┌──────────────┐   build   ┌─────────┐',
      '  │  GitHub │ ───────▶ │ GitHub Actions│ ───────▶ │   ECR   │',
      '  └─────────┘          └──────────────┘           └────┬────┘',
      '                                                       │ deploy',
      '                                              ┌────────▼────────┐',
      '                                              │  ECS Fargate    │',
      '                                              │  + ALB + RDS    │',
      '                                              └─────────────────┘',
    ].join('\n'),
    links: [
      { label: 'repo', url: 'https://github.com/orenji-neko' }, // TODO
      { label: 'demo', url: '#' }, // TODO
    ],
    period: '2024', // TODO
  },
  {
    id: 'proj-web-app',
    name: 'Full-Stack Web App', // TODO
    rank: 'A',
    summary: 'A responsive web app with a typed API and real-time updates.', // TODO
    description: [
      'TODO: Describe the problem this solved and who it was for.',
      'TODO: Describe what you built and the impact.',
    ],
    stack: ['Angular', 'Node.js', 'PostgreSQL', 'WebSocket'], // TODO
    links: [{ label: 'repo', url: 'https://github.com/orenji-neko' }], // TODO
    period: '2023', // TODO
  },
];
