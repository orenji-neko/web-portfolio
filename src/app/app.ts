import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrtFrame } from './layout/crt-frame/crt-frame';
import { ChannelNav } from './layout/channel-nav/channel-nav';
import { StatusBar } from './layout/status-bar/status-bar';
import { BootScreen } from './pages/boot/boot';
import { Boot } from './services/boot';

/**
 * App shell: a CRT frame wrapping the channel nav, routed content, and status
 * bar. On first visit the boot sequence plays as an overlay until it completes.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrtFrame, ChannelNav, StatusBar, BootScreen],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly boot = inject(Boot);
  protected readonly booted = this.boot.booted;
}
