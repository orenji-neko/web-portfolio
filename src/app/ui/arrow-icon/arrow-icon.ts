import { Component, computed, input } from '@angular/core';

export type ArrowDir = 'up-right' | 'down' | 'right' | 'up';

const PATHS: Record<ArrowDir, [string, string]> = {
  'up-right': ['M7 17 17 7', 'M8 7h9v9'],
  down: ['M12 5v14', 'm19 12-7 7-7-7'],
  right: ['M5 12h14', 'm12 5 7 7-7 7'],
  up: ['M12 19V5', 'm5 12 7-7 7 7'],
};

/** Decorative stroke arrow that inherits the text color. */
@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.html',
  styleUrl: './arrow-icon.css',
})
export class ArrowIcon {
  readonly dir = input<ArrowDir>('up-right');
  readonly size = input(18);

  protected readonly paths = computed(() => PATHS[this.dir()]);
}
