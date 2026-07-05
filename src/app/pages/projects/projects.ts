import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { ProjectCard } from './project-card/project-card';
import { TerminalLine } from '../../ui/terminal-line/terminal-line';

/** Projects page: lists one card per project. */
@Component({
  selector: 'app-projects',
  imports: [ProjectCard, TerminalLine],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly content = inject(Content);
  protected readonly projects = this.content.projects;
}
