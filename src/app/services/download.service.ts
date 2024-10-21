import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import saveAs from 'file-saver';
import JSZip from 'jszip';
import { tap, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  http = inject(HttpClient);

  private getFile(name: string, extension: string) {
    return this.http.get(`memento/${name}/${name}.component.${extension}`, {
      responseType: 'text',
    });
  }
  private downloadName(name: string, extension: string) {
    return `${name}.component.${extension}`;
  }
  downloadComponent(name: string) {
    const comp = this.getFile(name, 'ts');
    const style = this.getFile(name, 'scss');
    const html = this.getFile(name, 'html');
    const spec = this.getFile(name, 'spec.ts');

    return zip([comp, style, html, spec]).pipe(
      tap(([component, style, html, spec]) => {
        this.downloadFilesAsZip(name, [
          {
            name: this.downloadName(name, 'ts'),
            content: component,
          },
          {
            name: this.downloadName(name, 'html'),
            content: html,
          },
          {
            name: this.downloadName(name, 'scss'),
            content: style,
          },
          {
            name: this.downloadName(name, 'spec.ts'),
            content: spec,
          },
        ]);
      })
    );
  }

  private downloadFilesAsZip(
    zipName: string,
    files: { name: string; content: Blob | string }[]
  ): void {
    const zip = new JSZip();

    // Add files to the ZIP
    files.forEach((file) => {
      zip.file(file.name, file.content, {});
    });

    // Generate ZIP file and trigger download
    zip
      .generateAsync({ type: 'blob' })
      .then((blob) => {
        saveAs(blob, zipName);
      })
      .catch((error) => {
        console.error('Error generating ZIP', error);
      });
  }
}
