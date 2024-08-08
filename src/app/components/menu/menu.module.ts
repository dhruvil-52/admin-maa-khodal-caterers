import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTableModule } from 'primeng/treetable';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AddEditMenuComponent } from './add-edit-menu/add-edit-menu.component';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    MenuComponent,
    AddEditMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    TreeTableModule,
    MenuModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ChipModule,
    CalendarModule,
    ChipsModule,
    PaginatorModule,
    InputTextModule
  ]
})
export class _MenuModule { }
