import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  filter: any = {};
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }


  bills = [
    { id: 41, name: "Phillipp O'Neill", date: 1698674483000, isMainMenu: true, isPaid: true },
    { id: 44, name: "Another Parent", date: 1698674483000, isMainMenu: true, isPaid: false },
  ];

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

  selectedItem: any = {};
  showDeleteModal: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getBills();
  }

  getBills() {
    // API Call
  }

  openDeleteModal() {
    console.log(this.selectedItem);
    this.showDeleteModal = true;
  }

  onDeleteBill() {
    this.showDeleteModal = false;
    // API Call
  }

  printBill() {
    console.log(this.selectedItem);
  }

  paymentPaid(rowData: any) {
    console.log(rowData)
    // API call
    this.getBills();
  }
}
