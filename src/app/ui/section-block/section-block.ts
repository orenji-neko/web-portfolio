import { Component, input } from '@angular/core';

/**
 * A numbered page section: mono index in the left column, a heading that masks
 * up into view on scroll, and the projected content.
 */
@Component({
  selector: 'app-section-block',
  templateUrl: './section-block.html',
  styleUrl: './section-block.css',
})
export class SectionBlock {
  /** Element id, used by the nav and deep links (e.g. "work"). */
  readonly sectionId = input.required<string>();
  /** Two-digit index shown in the left column, e.g. "01". */
  readonly index = input.required<string>();
  readonly heading = input.required<string>();
}
