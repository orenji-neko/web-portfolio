import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { PipelineStage } from './pipeline-stage/pipeline-stage';
import { SkillGroupCard } from './skill-group/skill-group';
import { TerminalLine } from '../../ui/terminal-line/terminal-line';
import { HazardDivider } from '../../ui/hazard-divider/hazard-divider';

/** Experience page: a deploy-pipeline timeline plus grouped skills. */
@Component({
  selector: 'app-experience',
  imports: [PipelineStage, SkillGroupCard, TerminalLine, HazardDivider],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private readonly content = inject(Content);
  protected readonly experience = this.content.experience;
  protected readonly skillGroups = this.content.skillGroups;
}
