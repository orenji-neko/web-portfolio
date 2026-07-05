import {
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { Effects } from '../../services/effects';

/**
 * Bottom status strip (IDE/observability style): live clock, a "signal"
 * indicator, a build badge, and the reduce-effects toggle.
 */
@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.html',
  styleUrl: './status-bar.css',
})
export class StatusBar {
  protected readonly effects = inject(Effects);
  protected readonly clock = signal(this.now());

  constructor() {
    const id = setInterval(() => this.clock.set(this.now()), 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }

  protected toggleEffects(): void {
    this.effects.toggle();
  }

  private now(): string {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}
