import { Component, input, signal } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [Highlight, MatIconModule, MatIconButton],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent {
  code = input.required<string>();
  language = input.required<string>();
}
