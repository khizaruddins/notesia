import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
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
        path: 'blogs/:slug',
        loadComponent: () => import('./pages/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
      },
      {
        path: 'create',
        loadComponent: () => import('./pages/create-blog/create-blog.component').then(m => m.CreateBlogComponent),
      }
    ]
  },
  {
    path: 'accounts',
    loadComponent: () => import('./pages/account/login.component').then(m => m.LoginComponent)
  },
];
