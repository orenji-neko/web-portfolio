import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../../models/content.models';

/** One career entry rendered as a stage in a vertical deploy pipeline. */
@Component({
  selector: 'app-pipeline-stage',
  templateUrl: './pipeline-stage.html',
  styleUrl: './pipeline-stage.css',
})
export class PipelineStage {
  readonly item = input.required<ExperienceItem>();
  /** Whether this is the last stage (hides the connecting line). */
  readonly last = input(false);
}
