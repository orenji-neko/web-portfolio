import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { Panel } from '../../ui/panel/panel';
import { TerminalLine } from '../../ui/terminal-line/terminal-line';
import { HazardDivider } from '../../ui/hazard-divider/hazard-divider';

/** About page: a `whoami` readout plus an ID spec-sheet card. */
@Component({
  selector: 'app-about',
  imports: [Panel, TerminalLine, HazardDivider],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly content = inject(Content);
  protected readonly profile = this.content.profile;
}
