import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (h) => h.HomePageComponent
      ),
  },
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
