import { Component, input } from '@angular/core';
import { SocialLinkRef } from '../../../../models/content.models';
import { ArrowIcon } from '../../../../ui/arrow-icon/arrow-icon';

/** A social profile link rendered as an outlined pill. */
@Component({
  selector: 'app-social-link',
  imports: [ArrowIcon],
  templateUrl: './social-link.html',
  styleUrl: './social-link.css',
})
export class SocialLink {
  readonly link = input.required<SocialLinkRef>();
}
