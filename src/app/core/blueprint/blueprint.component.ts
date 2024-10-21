import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-blueprint',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './blueprint.component.html',
  styleUrl: './blueprint.component.scss',
})
export class BlueprintComponent {
  label = input.required<string>();
  downloadService = inject(DownloadService);

  download() {
    this.downloadService.downloadComponent(this.label().toLowerCase()).subscribe();
  }
}
