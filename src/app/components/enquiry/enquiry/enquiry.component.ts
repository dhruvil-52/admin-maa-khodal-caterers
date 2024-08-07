import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  filter: any = { pageNumber: 0, pageSize: 10, keyword: '', dateRange: null };
  enquiries: any = {};

  constructor(private enquiryService: EnquiryService) { }

  ngOnInit(): void {
    this.getAllEnquiris();
  }

  onPageChange(event: any) {
    this.filter.pageNumber = event.page;
    this.getAllEnquiris();
  }

  getAllEnquiris() {
    this.enquiryService.getAllEnquiries(this.filter).then((data: any) => {
      if (data.success) {
        this.enquiries = data;
      } else {
        this.enquiries = {};
      }
    })
  }

}
