import { Component, input } from '@angular/core';
import { SocialLinkRef } from '../../../models/content.models';

/** A single contact/social link row rendered as a terminal-style entry. */
@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.html',
  styleUrl: './social-link.css',
})
export class SocialLink {
  readonly link = input.required<SocialLinkRef>();
}
