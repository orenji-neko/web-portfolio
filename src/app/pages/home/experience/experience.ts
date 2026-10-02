import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';
import { SectionBlock } from '../../../ui/section-block/section-block';
import { ExperienceEntry } from './experience-entry/experience-entry';
import { EducationEntry } from './education-entry/education-entry';

@Component({
  selector: 'app-experience',
  imports: [SectionBlock, ExperienceEntry, EducationEntry],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private readonly content = inject(Content);
  protected readonly experience = this.content.experience;
  protected readonly education = this.content.education;
}
