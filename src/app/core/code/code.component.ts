import { Component, input, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [Highlight],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent {
  code = input.required<string>();
  language = input.required<string>();
}
