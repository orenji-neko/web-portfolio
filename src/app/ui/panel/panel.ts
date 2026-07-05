import { Component, input } from '@angular/core';

/**
 * A chunky, angular bordered panel styled like a terminal window.
 * Projects arbitrary content; shows an optional title bar with window "dots".
 */
@Component({
  selector: 'app-panel',
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  /** Optional title bar text (e.g. a filename or command). Hidden when empty. */
  readonly title = input<string>('');
  /** Accent color for the title bar dot + border glow: 'amber' | 'cyan'. */
  readonly accent = input<'amber' | 'cyan'>('amber');
}
