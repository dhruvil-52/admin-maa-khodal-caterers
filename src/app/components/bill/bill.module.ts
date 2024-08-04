import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { AddEditBillComponent } from './add-edit-bill/add-edit-bill.component';


@NgModule({
  declarations: [
    BillComponent,
    AddEditBillComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    FormsModule,
    DialogModule,
    MenuModule,
    ToggleButtonModule,
    ButtonModule,
    ChipModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    PaginatorModule,
    TableModule
  ]
})
export class BillModule { }
