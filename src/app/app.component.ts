import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIButtonComponent } from '../memento/button/button.component';
import { SourceCodeExplorerComponent } from './features/core/source-code-explorer/source-code-explorer.component';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UIButtonComponent,
    SourceCodeExplorerComponent,
    MatButton,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-memento';
}
