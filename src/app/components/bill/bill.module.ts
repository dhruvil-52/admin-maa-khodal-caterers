import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { AddEditBillComponent } from './add-edit-bill/add-edit-bill.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    BillComponent,
    AddEditBillComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    FormsModule,
    TreeTableModule,
    DialogModule,
    MenuModule,
    ToggleButtonModule,
    ButtonModule,
    ChipModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
  ]
})
export class BillModule { }
