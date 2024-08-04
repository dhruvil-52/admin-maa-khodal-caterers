import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill.component';
import { AddEditBillComponent } from './add-edit-bill/add-edit-bill.component';

const routes: Routes = [
  {
    path: '', component: BillComponent
  },
  {
    path: 'add', component: AddEditBillComponent
  },
  {
    path: 'edit/:id', component: AddEditBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
