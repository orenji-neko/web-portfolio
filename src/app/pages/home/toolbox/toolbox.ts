import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';
import { SectionBlock } from '../../../ui/section-block/section-block';
import { SkillGroupCard } from './skill-group/skill-group';

@Component({
  selector: 'app-toolbox',
  imports: [SectionBlock, SkillGroupCard],
  templateUrl: './toolbox.html',
  styleUrl: './toolbox.css',
})
export class Toolbox {
  protected readonly skillGroups = inject(Content).skillGroups;
}
