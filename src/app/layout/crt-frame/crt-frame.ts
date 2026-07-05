import { Component } from '@angular/core';

/**
 * Wraps the whole app in a CRT "screen": bezel, curvature vignette, scanlines
 * and a subtle flicker. Purely presentational; projects the app content.
 * All effects respect the reduce-effects toggle / prefers-reduced-motion.
 */
@Component({
  selector: 'app-crt-frame',
  templateUrl: './crt-frame.html',
  styleUrl: './crt-frame.css',
})
export class CrtFrame {}
