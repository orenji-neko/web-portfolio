import { Component, computed, inject } from '@angular/core';
import { Content } from '../../../services/content';
import { ArrowIcon } from '../../../ui/arrow-icon/arrow-icon';
import { ScrollTo } from '../../../ui/scroll-to/scroll-to';

/** Status line, the headline (revealed word by word), intro and the spec sheet. */
@Component({
  selector: 'app-hero',
  imports: [ArrowIcon, ScrollTo],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly content = inject(Content);
  protected readonly profile = this.content.profile;

  /** The highlighted tail of the tagline, if the tagline really ends with it. */
  protected readonly highlight = computed(() => {
    const { tagline, taglineHighlight } = this.profile();
    return taglineHighlight && tagline.endsWith(taglineHighlight) ? taglineHighlight : '';
  });

  /** The rest of the tagline, split for the word-by-word entrance. */
  protected readonly words = computed(() => {
    const { tagline } = this.profile();
    const lead = tagline.slice(0, tagline.length - this.highlight().length);
    return lead.trim().split(/\s+/);
  });

  protected readonly github = computed(
    () => this.content.contact().socials.find((s) => s.label === 'GitHub')?.url,
  );
}
