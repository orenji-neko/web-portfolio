import { DOCUMENT, Injectable, inject } from '@angular/core';

/** API Gateway endpoint of the portfolio-web-views Lambda. */
const VIEWS_URL =
  'https://7y0klzm5bg.execute-api.ap-southeast-1.amazonaws.com/default/portfolio-web-views';

/** sessionStorage key marking that this tab already counted its view. */
const SESSION_KEY = 'portfolio-view-counted';

/**
 * Counts a portfolio view by calling the view-counter Lambda, at most once per
 * browser session. Reloads and navigation in the same tab don't call it again.
 *
 * The flag is set before sending, so a failed request (e.g. blocked by CORS,
 * though the server may still have recorded it) isn't retried on every reload.
 */
@Injectable({ providedIn: 'root' })
export class Views {
  private readonly document = inject(DOCUMENT);
  private sent = false;

  /** Fire-and-forget: never awaited, never throws, never shows an error. */
  track(): void {
    const win = this.document.defaultView;
    if (this.sent || !win?.fetch) return;
    this.sent = true;

    try {
      if (win.sessionStorage.getItem(SESSION_KEY)) return;
      win.sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // Storage blocked (e.g. private mode): `sent` still limits this to once per page load.
    }

    win.fetch(VIEWS_URL, { method: 'POST' }).catch(() => {
      // Counting is best-effort; never surface failures to the visitor.
    });
  }
}
