import { Injectable, signal } from '@angular/core';
import { PROFILE } from '../data/profile.data';
import { PROJECTS } from '../data/projects.data';
import { EXPERIENCE, SKILL_GROUPS } from '../data/experience.data';
import { CONTACT } from '../data/contact.data';
import { CHANNELS } from '../data/channels.data';

/**
 * Serves all site content (compiled from `../data/*.ts`) as readonly signals.
 * Components inject this instead of importing the data directly, so the data
 * source can later be swapped (e.g. HTTP) without touching components.
 */
@Injectable({ providedIn: 'root' })
export class Content {
  readonly profile = signal(PROFILE).asReadonly();
  readonly projects = signal(PROJECTS).asReadonly();
  readonly experience = signal(EXPERIENCE).asReadonly();
  readonly skillGroups = signal(SKILL_GROUPS).asReadonly();
  readonly contact = signal(CONTACT).asReadonly();
  readonly channels = signal(CHANNELS).asReadonly();
}
