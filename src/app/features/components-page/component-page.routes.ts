import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components-page.component').then(
        (c) => c.ComponentsPageComponent
      ),
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./button-page/button-page.component').then(
            (b) => b.ButtonPageComponent
          ),
      },
    ],
  },
];
