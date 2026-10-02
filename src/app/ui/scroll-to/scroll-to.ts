import { Directive, inject, input } from '@angular/core';
import { SmoothScroll } from '../../services/smooth-scroll';

/**
 * In-page link: `<a appScrollTo="work">` renders `href="#work"` and glides to the
 * section through SmoothScroll instead of a hash navigation. Modified clicks
 * (new tab, new window) keep the browser default.
 */
@Directive({
  selector: 'a[appScrollTo]',
  host: {
    '[attr.href]': "'#' + appScrollTo()",
    '(click)': 'onClick($event)',
  },
})
export class ScrollTo {
  private readonly scroll = inject(SmoothScroll);

  /** Id of the target element, e.g. "work" or "top". */
  readonly appScrollTo = input.required<string>();

  protected onClick(event: MouseEvent): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    this.scroll.to(this.appScrollTo());
  }
}
