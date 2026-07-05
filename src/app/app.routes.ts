import { Routes } from '@angular/router';

/**
 * Each channel is lazily code-split via loadComponent. Components use named
 * exports, so we resolve the class from the module.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'home ~/',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'about ~/whoami',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'projects',
    title: 'projects ~/ls',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'experience',
    title: 'experience ~/history',
    loadComponent: () =>
      import('./pages/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'contact',
    title: 'contact ~/ping',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: 'home' },
];
