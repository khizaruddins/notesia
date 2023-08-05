import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'blogs',
        loadComponent: () => import('./pages/blog-list/blog-list.component').then(m => m.BlogListComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/user-list/user-list.component').then(m => m.UserListComponent),
      }
    ]
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/account/login.component').then(m => m.LoginComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
