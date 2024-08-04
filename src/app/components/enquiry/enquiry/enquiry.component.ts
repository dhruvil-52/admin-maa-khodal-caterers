import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  enquiries: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllEnquiris();
  }

  getAllEnquiris() {
    // API call
    this.enquiries = [
      {
        id: '1',
        name: 'Bamboo Watch',
        description: 'Product Description',
      },
      {
        id: '2',
        name: 'Bamboo Watch',
      },
      {
        id: '3',
        name: 'Bamboo Watch',
      }
    ]
  }

}
