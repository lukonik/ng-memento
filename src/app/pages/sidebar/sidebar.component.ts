import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
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
      name: 'Radio',
      link: '/docs/but2ton',
    },
    {
      name: 'Select',
      link: '/docs/bu3tton',
    },
    {
      name: 'Checkbox',
      link: '/docs/butt4on',
    },
    {
      name: 'Datepicker',
      link: '/docs/bu4tton',
    },
    {
      name: 'Select',
      link: '/components/selec5t',
    },
  ];

  router = inject(Router);

  constructor() {}
}
