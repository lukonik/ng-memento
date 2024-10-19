import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'components',
    loadComponent: () =>
      import('./features/components-page/components-page.component').then(
        (c) => c.ComponentsPageComponent
      ),
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import(
            './features/components-page/button-page/button-page.component'
          ).then((b) => b.ButtonPageComponent),
      },
    ],
  },
];
