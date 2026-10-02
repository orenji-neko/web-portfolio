import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../../../models/content.models';

/** A role: period, title, an optional headline metric and the highlights. Used as an `<li>`. */
@Component({
  selector: 'li[appExperienceEntry]',
  templateUrl: './experience-entry.html',
  styleUrl: './experience-entry.css',
  host: { 'data-scroll': '', class: 'reveal' },
})
export class ExperienceEntry {
  readonly item = input.required<ExperienceItem>();
}
