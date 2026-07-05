import { Component, input } from '@angular/core';
import { SkillGroup } from '../../../models/content.models';

/** One category of skills rendered as a labelled chip group. */
@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.html',
  styleUrl: './skill-group.css',
})
export class SkillGroupCard {
  readonly group = input.required<SkillGroup>();
}
