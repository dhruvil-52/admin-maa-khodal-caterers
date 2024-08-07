import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { BillService } from './bill.service';
import { toasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  filter: any = { pageNumber: 0, pageSize: 10, keyword: '', dateRange: null };
  bills: any = {};
  selectedItem: any = {};
  showDeleteModal: boolean = false;
  actions: any = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate(['bill/edit/' + this.selectedItem.id])
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => this.openDeleteModal()
    },
    {
      label: 'Print Bill',
      icon: 'pi pi-print',
      command: () => this.printBill()
    }
  ];

  constructor(
    private router: Router,
    private billService: BillService,
    private toasterService: toasterService) { }

  ngOnInit(): void {
    this.getBills();
  }

  onPageChange(event: any) {
    this.filter.pageNumber = event.page;
    this.getBills();
  }

  getBills() {
    this.billService.getAllBills(this.filter).then((data: any) => {
      if (data.success) {
        this.bills = data;
      }
    })
  }

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  onDeleteBill() {
    this.billService.deleteBill(this.selectedItem.id).then((data: any) => {
      if (data.success) {
        this.showDeleteModal = false;
        this.toasterService.showSuccess('Bill Successfully Deleted')
        this.getBills();
      }
    })
  }

  printBill() {
    console.log(this.selectedItem);
  }

  paymentPaid(rowData: any) {
    this.billService.paidBill(rowData.id).then((data: any) => {
      if (data.success) {
        this.toasterService.showSuccess(rowData.isPaid ? 'Mark Bill as Unpaid' : 'Mark Bill as Paid')
        this.getBills();
      }
    })
  }
}
