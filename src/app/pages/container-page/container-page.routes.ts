import { Routes } from '@angular/router';
import { ContainerPageComponent } from './container-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerPageComponent,
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('../button-page/button-page.component').then(
            (b) => b.ButtonPageComponent
          ),
      },
      {
        path: '',
        redirectTo: 'button',
        pathMatch: 'full',
      },
    ],
  },
];
