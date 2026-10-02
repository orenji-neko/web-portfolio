import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { LogoMark } from '../../ui/logo-mark/logo-mark';
import { ScrollTo } from '../../ui/scroll-to/scroll-to';

/** Wordmark plus in-page nav to each section. */
@Component({
  selector: 'app-site-header',
  imports: [LogoMark, ScrollTo],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  private readonly content = inject(Content);
  protected readonly profile = this.content.profile;
  protected readonly sections = this.content.sections;
}
