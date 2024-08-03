import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainComponent,
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'dashboard',
    component: MainComponent,
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'menu',
    component: MainComponent,
    loadChildren: () => import('./components/menu/menu.module').then((m) => m._MenuModule)
  },
  {
    path: 'bill',
    component: MainComponent,
    loadChildren: () => import('./components/bill/bill.module').then((m) => m.BillModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
