import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';

describe('routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it.each([
    ['/projects', '/#work'],
    ['/experience', '/#experience'],
    ['/contact', '/#contact'],
    ['/about', '/'],
    ['/home', '/'],
    ['/nope', '/'],
  ])('redirects %s to %s', async (from, to) => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(from);
    expect(TestBed.inject(Router).url).toBe(to);
  });
});
