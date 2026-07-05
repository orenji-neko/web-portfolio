import { effect, Injectable, signal } from '@angular/core';

const FX_KEY = 'portfolio.reduceEffects';

/**
 * "Reduce effects" toggle. Turning it on adds `.reduce-effects` to <html>,
 * which disables scanlines/flicker/glitch/view-transitions via global CSS.
 * The initial value honors the OS `prefers-reduced-motion` setting and any
 * previously saved preference.
 */
@Injectable({ providedIn: 'root' })
export class Effects {
  private readonly _reduced = signal(this.readInitial());

  /** Whether decorative motion is currently reduced. */
  readonly reduced = this._reduced.asReadonly();

  constructor() {
    // Keep the <html> class and stored preference in sync with the signal.
    effect(() => {
      const reduced = this._reduced();
      const root = document.documentElement;
      root.classList.toggle('reduce-effects', reduced);
      try {
        localStorage.setItem(FX_KEY, reduced ? '1' : '0');
      } catch {
        // Storage may be unavailable; non-fatal.
      }
    });
  }

  toggle(): void {
    this._reduced.update((v) => !v);
  }

  private readInitial(): boolean {
    try {
      const saved = localStorage.getItem(FX_KEY);
      if (saved !== null) {
        return saved === '1';
      }
    } catch {
      // ignore
    }
    // Fall back to the OS preference on first visit.
    return (
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
