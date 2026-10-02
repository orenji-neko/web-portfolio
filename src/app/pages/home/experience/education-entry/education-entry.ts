import { Component, input } from '@angular/core';
import { EducationItem } from '../../../../models/content.models';

/** A degree: period, degree, school and honors. Used as an `<li>`. */
@Component({
  selector: 'li[appEducationEntry]',
  templateUrl: './education-entry.html',
  styleUrl: './education-entry.css',
  host: { 'data-scroll': '', class: 'reveal' },
})
export class EducationEntry {
  readonly item = input.required<EducationItem>();
}
