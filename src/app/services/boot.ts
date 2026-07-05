import { Injectable, signal } from '@angular/core';

const BOOT_KEY = 'portfolio.booted';

/**
 * Tracks whether the power-on boot sequence has already played this session.
 * Backed by sessionStorage so a full reload within the same tab session skips
 * straight to the shell, while a fresh visit replays it.
 */
@Injectable({ providedIn: 'root' })
export class Boot {
  private readonly _booted = signal(this.readInitial());

  /** True once the boot sequence has completed (or was previously seen). */
  readonly booted = this._booted.asReadonly();

  /** True if the boot sequence still needs to play. */
  needsBoot(): boolean {
    return !this._booted();
  }

  /** Mark the boot sequence as complete and persist it for the session. */
  complete(): void {
    this._booted.set(true);
    try {
      sessionStorage.setItem(BOOT_KEY, '1');
    } catch {
      // sessionStorage may be unavailable (private mode / SSR); non-fatal.
    }
  }

  private readInitial(): boolean {
    try {
      return sessionStorage.getItem(BOOT_KEY) === '1';
    } catch {
      return false;
    }
  }
}
