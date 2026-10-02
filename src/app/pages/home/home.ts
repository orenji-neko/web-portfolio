import { Component, DestroyRef, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmoothScroll } from '../../services/smooth-scroll';
import { Hero } from './hero/hero';
import { Work } from './work/work';
import { Experience } from './experience/experience';
import { Toolbox } from './toolbox/toolbox';
import { Contact } from './contact/contact';

/**
 * The single page. Starts smooth scrolling once its sections are in the DOM
 * (Locomotive scans `[data-scroll]` elements once, on start).
 */
@Component({
  selector: 'app-home',
  imports: [Hero, Work, Experience, Toolbox, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly scroll = inject(SmoothScroll);
  private readonly fragment = inject(ActivatedRoute).snapshot.fragment;

  constructor() {
    afterNextRender(() => {
      void this.scroll.init();
      void this.scroll.alignToFragment(this.fragment);
    });
    inject(DestroyRef).onDestroy(() => this.scroll.destroy());
  }
}
