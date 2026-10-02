import { Profile } from '../models/content.models';

export const PROFILE: Profile = {
  name: 'Mark Enfermo',
  fullName: 'Mark Jess Anthony Enfermo',
  handle: 'orenji-neko',
  role: 'Entry-Level Software Developer',
  tagline: 'I build full-stack products and the cloud pipelines that ship them.',
  taglineHighlight: 'ship them.',
  bio: [
    'Fresh Information Technology graduate (cum laude) with internship experience in web development using TypeScript, C#/.NET, React, PostgreSQL, and AWS.',
    'Looking for an entry-level IT role where I can learn from experienced teammates, contribute to real projects, and grow my skills in backend, frontend, and cloud development.',
  ],
  location: 'Cebu, PH',
  status: 'Open to opportunities',
  specs: [
    { label: 'FOCUS', value: 'Backend · Frontend · Cloud' },
    { label: 'STACK', value: 'TypeScript · C# · React · Node.js' },
    { label: 'CLOUD', value: 'AWS · Docker · GitHub Actions' },
    { label: 'EDU', value: 'BS IT, Cum Laude — University of Cebu' },
    { label: 'UPTIME', value: 'Coffee-powered' },
  ],
};
