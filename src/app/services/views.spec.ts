import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Views } from './views';

describe('Views', () => {
  const fetch = vi.fn();
  let store: Map<string, string>;
  let storageBlocked: boolean;

  // A fake window, so nothing touches the real endpoint or jsdom's storage.
  const sessionStorage = {
    getItem: (key: string) => {
      if (storageBlocked) throw new Error('blocked');
      return store.get(key) ?? null;
    },
    setItem: (key: string, value: string) => {
      if (storageBlocked) throw new Error('blocked');
      store.set(key, value);
    },
  };

  beforeEach(() => {
    fetch.mockReset().mockResolvedValue(undefined);
    store = new Map();
    storageBlocked = false;
  });

  /** A fresh `Views`, as on a new page load in the same tab. */
  function pageLoad(): Views {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useValue: { defaultView: { fetch, sessionStorage } } }],
    });
    return TestBed.inject(Views);
  }

  it('POSTs once on the first load and marks the session', () => {
    pageLoad().track();
    expect(fetch).toHaveBeenCalledExactlyOnceWith(expect.stringContaining('portfolio-web-views'), {
      method: 'POST',
    });
    expect(store.get('portfolio-view-counted')).toBe('1');
  });

  it('ignores repeat calls in the same page load', () => {
    const views = pageLoad();
    views.track();
    views.track();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('skips reloads in a session that already counted', () => {
    pageLoad().track();
    pageLoad().track();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('marks the session before sending, so a failed request is not retried', async () => {
    fetch.mockRejectedValue(new TypeError('Failed to fetch'));
    pageLoad().track();
    await Promise.resolve();
    pageLoad().track();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('still counts once per page load when storage is blocked', () => {
    storageBlocked = true;
    const views = pageLoad();
    views.track();
    views.track();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
