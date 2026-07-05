import { Component, inject } from '@angular/core';
import { Content } from '../../services/content';
import { SocialLink } from './social-link/social-link';
import { TerminalLine } from '../../ui/terminal-line/terminal-line';
import { Panel } from '../../ui/panel/panel';

/** Contact page: a terminal prompt + email + social links. */
@Component({
  selector: 'app-contact',
  imports: [SocialLink, TerminalLine, Panel],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly content = inject(Content);
  protected readonly contact = this.content.contact;
}
