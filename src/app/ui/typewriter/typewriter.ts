import {
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { Effects } from '../../services/effects';

/**
 * Types out an array of lines character-by-character. Emits `done` when the
 * last line finishes. When effects are reduced (OS or toggle), all lines are
 * shown instantly.
 */
@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.html',
  styleUrl: './typewriter.css',
})
export class Typewriter {
  /** Lines to type, in order. */
  readonly lines = input.required<string[]>();
  /** Milliseconds per character. */
  readonly speed = input(24);
  /** Delay before typing starts, in ms. */
  readonly startDelay = input(150);
  /** Show a blinking caret on the current line. */
  readonly caret = input(true);

  /** Fires once every line has finished typing. */
  readonly done = output<void>();

  /** The text rendered so far, one entry per (partial) line. */
  protected readonly rendered = signal<string[]>([]);
  protected readonly finished = signal(false);

  private readonly effects = inject(Effects);
  private readonly destroyRef = inject(DestroyRef);
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // Restart typing whenever the source lines change.
    effect(() => {
      const lines = this.lines();
      this.reset();
      if (this.effects.reduced()) {
        this.rendered.set([...lines]);
        this.finish();
      } else {
        this.timer = setTimeout(() => this.typeLine(lines, 0, 0), this.startDelay());
      }
    });

    this.destroyRef.onDestroy(() => this.clear());
  }

  private typeLine(lines: string[], lineIndex: number, charIndex: number): void {
    if (lineIndex >= lines.length) {
      this.finish();
      return;
    }
    const full = lines[lineIndex];
    const next = full.slice(0, charIndex + 1);

    this.rendered.update((r) => {
      const copy = [...r];
      copy[lineIndex] = next;
      return copy;
    });

    if (charIndex + 1 < full.length) {
      this.timer = setTimeout(
        () => this.typeLine(lines, lineIndex, charIndex + 1),
        this.speed(),
      );
    } else {
      // Small pause between lines.
      this.timer = setTimeout(() => this.typeLine(lines, lineIndex + 1, 0), this.speed() * 6);
    }
  }

  private finish(): void {
    if (this.finished()) {
      return;
    }
    this.finished.set(true);
    this.done.emit();
  }

  private reset(): void {
    this.clear();
    this.rendered.set([]);
    this.finished.set(false);
  }

  private clear(): void {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
