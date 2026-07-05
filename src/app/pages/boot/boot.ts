import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Boot } from '../../services/boot';
import { Content } from '../../services/content';
import { Typewriter } from '../../ui/typewriter/typewriter';

/**
 * Full-screen power-on sequence shown on first visit. Types a fake boot log,
 * then marks the boot complete (which the shell watches to reveal the app).
 * Rendered as an overlay by the app shell — not a route.
 */
@Component({
  selector: 'app-boot',
  imports: [Typewriter],
  templateUrl: './boot.html',
  styleUrl: './boot.css',
})
export class BootScreen {
  private readonly boot = inject(Boot);
  private readonly content = inject(Content);

  protected readonly lines = this.buildLines();
  protected readonly progress = signal(0);

  private timer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    // Advance a progress bar while the log types out.
    this.timer = setInterval(() => {
      this.progress.update((p) => Math.min(100, p + 4));
    }, 90);
    inject(DestroyRef).onDestroy(() => this.stop());
  }

  protected onDone(): void {
    this.progress.set(100);
    setTimeout(() => this.boot.complete(), 350);
  }

  protected skip(): void {
    this.boot.complete();
  }

  private buildLines(): string[] {
    const p = this.content.profile();
    return [
      '[ BOOT ] portfolio.os v1.0 — cold start',
      '[  OK  ] mounting /home',
      `[  OK  ] loading profile: ${p.handle}`,
      '[  OK  ] establishing uplink ... signal locked',
      '[  OK  ] render pipeline ready',
      '> welcome_',
    ];
  }

  private stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
