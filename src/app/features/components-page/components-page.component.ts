import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.scss',
})
export class ComponentsPageComponent {}
