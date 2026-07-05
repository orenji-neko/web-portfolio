import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Content } from '../../services/content';
import { GlitchText } from '../../ui/glitch-text/glitch-text';
import { TerminalLine } from '../../ui/terminal-line/terminal-line';
import { HazardDivider } from '../../ui/hazard-divider/hazard-divider';

/** Landing screen: hero + a grid of channel launchers. */
@Component({
  selector: 'app-home',
  imports: [RouterLink, GlitchText, TerminalLine, HazardDivider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly content = inject(Content);
  protected readonly profile = this.content.profile;
  /** Channels excluding "home" itself, for the launcher grid. */
  protected readonly launchers = computed(() =>
    this.content.channels().filter((c) => c.path !== '/home'),
  );
}
