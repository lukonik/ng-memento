import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  list = [
    {
      name: 'Button',
      link: '/docs/button',
    },
    {
      name: 'Select',
      link: '/components/select',
    },
  ];

  router = inject(Router);

  constructor() {

  }
}
