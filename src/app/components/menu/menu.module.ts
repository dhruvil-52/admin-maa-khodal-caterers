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
    CalendarModule
  ]
})
export class _MenuModule { }
