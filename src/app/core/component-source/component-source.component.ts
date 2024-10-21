import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { zip } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { Highlight } from 'ngx-highlightjs';
import JSZip from 'jszip';
import saveAs from 'file-saver';
import { MatButtonModule } from '@angular/material/button';
import { CodeComponent } from '../code/code.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-component-source',
  standalone: true,
  imports: [
    MatTabsModule,
    Highlight,
    MatButtonModule,
    CodeComponent,
    MatIconModule,
  ],
  templateUrl: './component-source.component.html',
  styleUrl: './component-source.component.scss',
})
export class ComponentSourceComponent implements OnInit {
  name = input.required<string>();
  http = inject(HttpClient);

  component = signal<string>('');
  style = signal<string>('');
  html = signal<string>('');
  spec = signal<string>('');

  private getFile(extension: string) {
    return this.http.get(
      `memento/${this.name()}/${this.name()}.component.${extension}`,
      {
        responseType: 'text',
      }
    );
  }

  ngOnInit(): void {
    const comp = this.getFile('ts');
    const style = this.getFile('scss');
    const html = this.getFile('html');
    const spec = this.getFile('spec.ts');

    zip([comp, style, html, spec]).subscribe((data) => {
      this.component.set(data[0]);
      this.style.set(data[1]);
      this.html.set(data[2]);
      this.spec.set(data[3]);
    });
  }
}
