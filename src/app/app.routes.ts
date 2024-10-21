import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadChildren: () =>
      import('./pages/container-page/container-page.routes').then(
        (d) => d.routes
      ),
  },
  {
    path: '',
    redirectTo: 'docs',
    pathMatch: 'full',
  },
];
