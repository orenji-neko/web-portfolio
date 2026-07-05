import { Component, input } from '@angular/core';
import { Project } from '../../../models/content.models';
import { Panel } from '../../../ui/panel/panel';

/** Renders a single project as a "mission" card with an optional arch diagram. */
@Component({
  selector: 'app-project-card',
  imports: [Panel],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
