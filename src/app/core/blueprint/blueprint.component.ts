import { Component, inject, input } from '@angular/core';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-blueprint',
  standalone: true,
  templateUrl: './blueprint.component.html',
  styleUrl: './blueprint.component.scss',
})
export class BlueprintComponent {
  label = input.required<string>();
  description = input.required<string>();
}
