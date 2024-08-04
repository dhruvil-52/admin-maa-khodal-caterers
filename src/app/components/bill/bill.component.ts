import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  nodes = [
    {
      data: { id: 41, name: "Phillipp O'Neill", date: 1698674483000, isMainMenu: true, isPaid: true },
      children: [
        {
          data: { id: 42, name: "Child 1", date: 1698674483000, time: "Night" }
        },
        {
          data: { id: 43, name: "Child 2", date: 1698674483000, time: "Noon" }
        }
      ]
    },
    {
      data: { id: 44, name: "Another Parent", date: 1698674483000, isMainMenu: true, isPaid: false },
      children: [
        {
          data: { id: 45, name: "Child 3", date: 1698674483000, time: "Night" }
        }
      ]
    }
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
