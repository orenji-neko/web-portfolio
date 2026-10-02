import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { ArrowIcon } from '../../ui/arrow-icon/arrow-icon';
import { ScrollTo } from '../../ui/scroll-to/scroll-to';

@Component({
  selector: 'app-site-footer',
  imports: [ArrowIcon, ScrollTo],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly profile = inject(Content).profile;
  protected readonly year = new Date().getFullYear();
}
