import { ExperienceItem, SkillGroup } from '../models/content.models';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Intern Software Developer',
    org: 'FilipinoHomes',
    period: 'Jan 2026 - April 2026',
    stage: 'Build',
    highlights: [
      'Collaborated on developing a news provider service using NextJS, enhancing the platform\'s content delivery capabilities.',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'skills-frontend',
    title: 'Front-End',
    items: ['Angular', 'TypeScript', 'RxJS', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    id: 'skills-backend',
    title: 'Back-End',
    items: ['Node.js', 'REST / GraphQL', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'skills-devops',
    title: 'Cloud / DevOps',
    items: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Linux'],
  },
];
