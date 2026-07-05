import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Content } from '../../services/content';

/**
 * The top "channel" navigation — IDE-tab / TV-channel style links to each
 * route. Highlights the active channel via routerLinkActive.
 */
@Component({
  selector: 'app-channel-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './channel-nav.html',
  styleUrl: './channel-nav.css',
})
export class ChannelNav {
  private readonly content = inject(Content);
  protected readonly channels = this.content.channels;
  protected readonly profile = this.content.profile;
}
