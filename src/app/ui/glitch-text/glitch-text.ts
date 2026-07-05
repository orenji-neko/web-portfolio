import { Component, input } from '@angular/core';

/**
 * Renders text with a chromatic-aberration glitch effect. By default the
 * glitch triggers on hover; set `always` to keep it running.
 * The `data-text` attribute mirrors the content for the layered effect.
 */
@Component({
  selector: 'app-glitch-text',
  templateUrl: './glitch-text.html',
  styleUrl: './glitch-text.css',
})
export class GlitchText {
  /** The text to display. */
  readonly text = input.required<string>();
  /** Keep the glitch animating continuously instead of only on hover. */
  readonly always = input(false);
}
