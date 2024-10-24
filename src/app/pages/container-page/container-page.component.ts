import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-container-page',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './container-page.component.html',
  styleUrl: './container-page.component.scss',
})
export class ContainerPageComponent {}
