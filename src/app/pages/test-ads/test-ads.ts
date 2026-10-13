import { Component, DestroyRef, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

/**
 * Unlisted sandbox for trying the A-ADS ad unit. Nothing links here, and the
 * page asks crawlers not to index it while it's open.
 */
@Component({
  selector: 'app-test-ads',
  templateUrl: './test-ads.html',
  styleUrl: './test-ads.css',
})
export class TestAds {
  constructor() {
    const meta = inject(Meta);
    meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    inject(DestroyRef).onDestroy(() => meta.removeTag("name='robots'"));
  }
}
