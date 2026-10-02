import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';
import { SectionBlock } from '../../../ui/section-block/section-block';
import { ProjectCard } from './project-card/project-card';

@Component({
  selector: 'app-work',
  imports: [SectionBlock, ProjectCard],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  protected readonly projects = inject(Content).projects;
}
