import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    EnquiryComponent
  ],
  imports: [
    CommonModule,
    EnquiryRoutingModule,
    TableModule,
    PaginatorModule,
    CalendarModule
  ]
})
export class EnquiryModule { }
