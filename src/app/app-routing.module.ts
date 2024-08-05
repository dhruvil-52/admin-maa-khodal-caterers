import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { CanLoadGuard } from './shared/can-load.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'details',
    component: MainComponent,
    canLoad: [CanLoadGuard],
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'dashboard',
    component: MainComponent,
    canLoad: [CanLoadGuard],
    loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'menu',
    component: MainComponent,
    canLoad: [CanLoadGuard],
    loadChildren: () => import('./components/menu/menu.module').then((m) => m._MenuModule)
  },
  {
    path: 'bill',
    component: MainComponent,
    canLoad: [CanLoadGuard],
    loadChildren: () => import('./components/bill/bill.module').then((m) => m.BillModule)
  },
  {
    path: 'enquiry',
    component: MainComponent,
    canLoad: [CanLoadGuard],
    loadChildren: () => import('./components/enquiry/enquiry.module').then((m) => m.EnquiryModule)
  },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
