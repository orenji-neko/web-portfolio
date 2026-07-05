import { Channel } from '../models/content.models';

/** The navigable "channels" (routes) shown in the shell nav. */
export const CHANNELS: Channel[] = [
  { path: '/home', label: 'home', command: 'cd ~' },
  { path: '/about', label: 'about', command: 'whoami' },
  { path: '/projects', label: 'projects', command: 'ls ~/projects' },
  { path: '/experience', label: 'experience', command: 'cat ~/history.log' },
  { path: '/contact', label: 'contact', command: 'ping me' },
];
