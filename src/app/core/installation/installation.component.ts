import { Component, inject, input } from '@angular/core';
import { DownloadService } from '../../services/download.service';
import { DividerComponent } from "../divider/divider.component";

@Component({
  selector: 'app-installation',
  standalone: true,
  imports: [DividerComponent],
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
