import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SmoothScroll } from '../../services/smooth-scroll';
import { ScrollTo } from './scroll-to';

@Component({
  imports: [ScrollTo],
  template: `<a appScrollTo="work">Work</a>`,
})
class Host {}

describe('ScrollTo', () => {
  const to = vi.fn();

  beforeEach(() => {
    to.mockReset();
    TestBed.configureTestingModule({ providers: [{ provide: SmoothScroll, useValue: { to } }] });
  });

  async function link(): Promise<HTMLAnchorElement> {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('a')!;
  }

  it('renders the section as a hash href', async () => {
    expect((await link()).getAttribute('href')).toBe('#work');
  });

  it('glides to the section on a plain click', async () => {
    const click = new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 });
    (await link()).dispatchEvent(click);
    expect(click.defaultPrevented).toBe(true);
    expect(to).toHaveBeenCalledWith('work');
  });

  it('leaves modified clicks (new tab) to the browser', async () => {
    const click = new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true });
    (await link()).dispatchEvent(click);
    expect(click.defaultPrevented).toBe(false);
    expect(to).not.toHaveBeenCalled();
  });
});
