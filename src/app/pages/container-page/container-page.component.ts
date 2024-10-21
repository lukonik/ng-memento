import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-container-page',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, MatToolbarModule, MatIconModule],
  templateUrl: './container-page.component.html',
  styleUrl: './container-page.component.scss',
})
export class ContainerPageComponent {}
