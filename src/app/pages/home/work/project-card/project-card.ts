import { Component, computed, input } from '@angular/core';
import { Project } from '../../../../models/content.models';
import { ArrowIcon } from '../../../../ui/arrow-icon/arrow-icon';

/** One project: a dark "how it worked" flow beside its details. */
@Component({
  selector: 'app-project-card',
  imports: [ArrowIcon],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  host: { 'data-scroll': '', class: 'reveal' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  /** 1-based position in the list, shown as "01". */
  readonly index = input.required<number>();
  /** Put the flow on the right (alternating rows). */
  readonly reverse = input(false);

  protected readonly number = computed(() => String(this.index()).padStart(2, '0'));
}
