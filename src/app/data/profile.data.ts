import { Profile } from '../models/content.models';

/**
 * TODO: Replace the placeholder values below with your real details.
 * Nothing else needs to change — the About/Home pages render from this object.
 */
export const PROFILE: Profile = {
  // TODO: your full name
  name: 'Mark Enfermo',
  // TODO: your terminal handle / username
  handle: 'orenji-neko',
  // TODO: your role/title
  role: 'Software Developer & DevOps Engineer',
  // TODO: one punchy line about what you do
  tagline: 'I build full-stack products and the cloud pipelines that ship them.',
  // TODO: rewrite as a few short paragraphs about you
  bio: [
    'Full-stack engineer who is just as comfortable in a component tree as in a Terraform module.',
    'I care about shipping reliable software: clean code on the front, solid APIs in the middle, and reproducible AWS infrastructure underneath.',
  ],
  // TODO: your location
  location: 'Cebu, PH',
  // TODO: availability / status line
  status: 'Open to opportunities',
  // TODO: quick facts for the ID card
  specs: [
    { label: 'FOCUS', value: 'Software Development · DevOps' },
    { label: 'CLOUD', value: 'AWS' },
    { label: 'STACK', value: '.NET · React · Angular · Node · TypeScript' },
    { label: 'UPTIME', value: 'Coffee-powered' },
  ],
};
