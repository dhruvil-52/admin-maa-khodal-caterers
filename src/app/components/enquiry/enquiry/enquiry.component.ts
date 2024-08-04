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
        mobile: 8460733333,
        email: 'dhruvil@gmail.com',
        message: 'This is a long piece of text that should wrap into multiple lines within the container. The container has a maximum width set, so the text will wrap when it reaches that width',
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
