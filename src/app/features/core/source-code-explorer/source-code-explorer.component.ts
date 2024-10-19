import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-source-code-explorer',
  standalone: true,
  imports: [Highlight],
  templateUrl: './source-code-explorer.component.html',
  styleUrl: './source-code-explorer.component.scss',
})
export class SourceCodeExplorerComponent implements OnInit {
  components = input.required<string[]>();

  http = inject(HttpClient);

  text = signal<string>('');

  ngOnInit(): void {
    this.http
      .get('/memento/button/button.component.ts', {
        responseType: 'text',
      })
      .subscribe((data) => {
        this.text.set(data);
      });
  }

  download() {
    this.downloadFilesAsZip([{ name: 'button', content: this.text() }]);
  }

  downloadFilesAsZip(files: { name: string; content: Blob | string }[]): void {
    const zip = new JSZip();

    // Add files to the ZIP
    files.forEach((file) => {
      zip.file(file.name, file.content);
    });

    // Generate ZIP file and trigger download
    zip
      .generateAsync({ type: 'blob' })
      .then((blob) => {
        saveAs(blob, 'download.zip');
      })
      .catch((error) => {
        console.error('Error generating ZIP', error);
      });
  }
}
