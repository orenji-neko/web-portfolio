import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Home } from './pages/home/home';

/** The old per-section routes now land on the matching section of the single page. */
const toSection = (fragment: string) => () => inject(Router).createUrlTree(['/'], { fragment });

export const routes: Routes = [
  { path: '', pathMatch: 'full', title: 'Mark Enfermo — Software Developer', component: Home },
  { path: 'home', redirectTo: '' },
  { path: 'about', redirectTo: '' },
  { path: 'projects', redirectTo: toSection('work') },
  { path: 'experience', redirectTo: toSection('experience') },
  { path: 'contact', redirectTo: toSection('contact') },
  { path: '**', redirectTo: '' },
];
