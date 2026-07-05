import { Component, input } from '@angular/core';

/**
 * A single terminal prompt line: `<prompt> command`.
 * Projected content (if any) renders as the command output beneath.
 */
@Component({
  selector: 'app-terminal-line',
  templateUrl: './terminal-line.html',
  styleUrl: './terminal-line.css',
})
export class TerminalLine {
  /** The command text shown after the prompt symbol. */
  readonly command = input<string>('');
  /** The prompt symbol / user@host label. */
  readonly prompt = input<string>('visitor@portfolio:~$');
  /** Show a blinking caret at the end of the command. */
  readonly caret = input(false);
}
