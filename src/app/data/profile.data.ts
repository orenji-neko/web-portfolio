import { Profile } from '../models/content.models';

export const PROFILE: Profile = {
  name: 'Mark Enfermo',
  handle: 'orenji-neko',
  role: 'Software Developer & DevOps Engineer',
  tagline: 'I build full-stack products and the cloud pipelines that ship them.',
  bio: [
    'Full-stack engineer who is just as comfortable in a component tree as in a Terraform module.',
    'I care about shipping reliable software: clean code on the front, solid APIs in the middle, and reproducible AWS infrastructure underneath.',
  ],
  location: 'Cebu, PH',
  status: 'Open to opportunities',
  specs: [
    { label: 'FOCUS', value: 'Software Development · DevOps' },
    { label: 'CLOUD', value: 'AWS' },
    { label: 'STACK', value: '.NET · React · Angular · Node · TypeScript' },
    { label: 'UPTIME', value: 'Coffee-powered' },
  ],
};
