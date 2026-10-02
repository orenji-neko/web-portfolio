import { DOCUMENT, Injectable, inject } from '@angular/core';
import type LocomotiveScroll from 'locomotive-scroll';

export interface ScrollToOptions {
  /** Jump instead of gliding. */
  immediate?: boolean;
  /** Move keyboard focus to the target, like a native anchor jump. Defaults to true. */
  focus?: boolean;
}

/** How long a deep link waits for web fonts before aligning to its section. */
const FONT_WAIT_MS = 1500;

/**
 * Owns page scrolling: Locomotive Scroll (smooth wheel scrolling, parallax and
 * `is-inview` classes) plus in-page jumps and `/#section` deep links.
 *
 * Locomotive is loaded lazily and skipped for reduced motion or when the browser
 * lacks the observers it needs (e.g. jsdom). Without it, jumps fall back to
 * native scrolling and the page renders fully visible.
 */
@Injectable({ providedIn: 'root' })
export class SmoothScroll {
  private readonly document = inject(DOCUMENT);
  private loco: LocomotiveScroll | null = null;
  private starting = false;
  private cancelled = false;

  /** Starts Locomotive. Call once the page's `[data-scroll]` elements are rendered. */
  async init(): Promise<void> {
    if (this.loco || this.starting || !this.motionSupported()) return;
    this.starting = true;
    this.cancelled = false;
    try {
      const { default: Locomotive } = await import('locomotive-scroll');
      if (this.cancelled) return;
      this.loco = new Locomotive({ lenisOptions: { lerp: 0.08 } });
      // Locomotive starts observing a frame after construction. Wait one more so
      // elements already on screen are marked in view before reveals can hide anything.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (this.loco) this.document.documentElement.classList.add('motion-ready');
        }),
      );
    } catch {
      // The chunk failed to load (e.g. stale deploy): keep the static page.
      this.loco = null;
    } finally {
      this.starting = false;
    }
  }

  destroy(): void {
    this.cancelled = true;
    this.loco?.destroy();
    this.loco = null;
    this.document.documentElement.classList.remove('motion-ready');
  }

  /** Scrolls to the element with id `target` (e.g. "work", or "top" for the page top). */
  to(target: string, { immediate = false, focus = true }: ScrollToOptions = {}): void {
    const el = this.document.getElementById(target);
    if (!el) return;
    if (this.loco) {
      // Pass a number measured from the real scroll position: given an element, Lenis
      // adds its own last-known position, which lags a native scroll made this frame.
      const top = el.getBoundingClientRect().top + (this.document.defaultView?.scrollY ?? 0);
      this.loco.scrollTo(top, { immediate });
    } else {
      // Optional call: jsdom (unit tests) doesn't implement scrollIntoView.
      el.scrollIntoView?.({
        behavior: immediate || this.prefersReducedMotion() ? 'auto' : 'smooth',
      });
    }
    if (focus) el.focus({ preventScroll: true });
  }

  /**
   * Lands a `/#section` deep link on its section. Waits (briefly) for web fonts
   * first, since swapping them in changes the height of everything above.
   */
  async alignToFragment(fragment: string | null | undefined): Promise<void> {
    if (!fragment) return;
    const fonts = this.document.fonts;
    if (fonts) {
      await Promise.race([
        fonts.ready,
        new Promise((resolve) => setTimeout(resolve, FONT_WAIT_MS)),
      ]);
    }
    this.to(fragment, { immediate: true, focus: false });
  }

  private motionSupported(): boolean {
    const win = this.document.defaultView;
    return (
      !!win &&
      typeof win.matchMedia === 'function' &&
      'IntersectionObserver' in win &&
      'ResizeObserver' in win &&
      !this.prefersReducedMotion()
    );
  }

  private prefersReducedMotion(): boolean {
    const win = this.document.defaultView;
    return typeof win?.matchMedia === 'function'
      ? win.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
  }
}
