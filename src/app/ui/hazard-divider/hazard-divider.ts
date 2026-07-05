import { Component, input } from '@angular/core';

/** A black/amber hazard-stripe divider with an optional centered label. */
@Component({
  selector: 'app-hazard-divider',
  templateUrl: './hazard-divider.html',
  styleUrl: './hazard-divider.css',
})
export class HazardDivider {
  /** Optional label shown in a chip over the stripes. */
  readonly label = input<string>('');
}
