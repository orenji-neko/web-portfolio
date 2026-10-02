import { Component, inject } from '@angular/core';
import { Content } from '../../../services/content';
import { ArrowIcon } from '../../../ui/arrow-icon/arrow-icon';
import { SocialLink } from './social-link/social-link';

/** The orange call-to-action block: heading, email and socials. */
@Component({
  selector: 'app-contact',
  imports: [ArrowIcon, SocialLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contact = inject(Content).contact;
}
