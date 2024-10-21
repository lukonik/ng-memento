import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './installation.component.html',
  styleUrl: './installation.component.scss',
})
export class InstallationComponent {
  downloadService = inject(DownloadService);
  label = input.required<string>();

  download() {
    this.downloadService.downloadComponent(this.label()).subscribe();
  }
}
