import { ExperienceItem, SkillGroup } from '../models/content.models';

/**
 * TODO: Replace with your real career history.
 * Newest first — the Experience page renders these as a top-to-bottom pipeline.
 */
export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Engineer', // TODO
    org: 'Company Name', // TODO
    period: '2023 — Present', // TODO
    stage: 'operate',
    highlights: [
      'TODO: A concrete thing you shipped or improved (with a number if you can).',
      'TODO: Something you owned end-to-end, front-end through infrastructure.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Software Developer', // TODO
    org: 'Previous Company', // TODO
    period: '2021 — 2023', // TODO
    stage: 'build',
    highlights: [
      'TODO: A responsibility or achievement.',
      'TODO: Another achievement.',
    ],
  },
];

/**
 * TODO: Replace with your real skills, grouped however makes sense.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'skills-frontend',
    title: 'Front-End', // TODO
    items: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'HTML/CSS'], // TODO
  },
  {
    id: 'skills-backend',
    title: 'Back-End', // TODO
    items: ['Node.js', 'REST / GraphQL', 'PostgreSQL', 'Redis'], // TODO
  },
  {
    id: 'skills-devops',
    title: 'Cloud / DevOps', // TODO
    items: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Linux'], // TODO
  },
];
