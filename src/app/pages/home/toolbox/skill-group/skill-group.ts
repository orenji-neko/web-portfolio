import { Component, input } from '@angular/core';
import { SkillGroup } from '../../../../models/content.models';

/** One category of skills: a mono label beside the items. */
@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.html',
  styleUrl: './skill-group.css',
  host: { 'data-scroll': '', class: 'reveal' },
})
export class SkillGroupCard {
  readonly group = input.required<SkillGroup>();
}
