import { EducationItem, ExperienceItem, SkillGroup } from '../models/content.models';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-filipino-homes',
    role: 'Intern Web Developer',
    org: 'Filipino Homes',
    period: 'Jan 2026 – Jun 2026',
    metric: {
      before: '40s+ →',
      after: '<1s',
      caption:
        'Found that slow page loads on the news site were caused by un-cached database queries and added Redis caching.',
    },
    highlights: [
      'Helped build the news platform for Homes.PH as part of the development team.',
      'Helped deploy the news platform on AWS ECS using containers.',
      'Set up GitHub Actions workflows that build APIs into Docker images and deploy them to AWS ECS.',
      'Built and maintained REST API endpoints in C# and .NET for new backend features, including a reviews module, an email queue with retries, and a file-storage module.',
      'Built admin console pages in React and TypeScript for managing users, restaurants, and access permissions, enforcing role-based access control so users only saw the data and actions their permissions allowed.',
      'Created a shared TypeScript API client used by the web, admin, and mobile apps, which removed three duplicated copies of the same code.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-uc',
    degree: 'Bachelor’s in Information Technology',
    school: 'University of Cebu',
    period: '2022 – 2026',
    honors: 'Cum laude',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { id: 'skills-languages', title: 'Languages', items: ['TypeScript', 'C#', 'JavaScript'] },
  {
    id: 'skills-frameworks',
    title: 'Frameworks & Libraries',
    items: ['Node.js', 'ASP.NET', 'React', 'React Native'],
  },
  { id: 'skills-database', title: 'Database', items: ['PostgreSQL'] },
  {
    id: 'skills-cloud',
    title: 'Cloud & Services',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Redis'],
  },
  { id: 'skills-tools', title: 'Tools', items: ['Git', 'REST API design'] },
];
