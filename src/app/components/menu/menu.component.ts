import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfmakeService } from 'src/app/shared/pdfmake.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedItem: any = {};
  showDeleteModal: boolean = false;
  actions: any = [];
  nodes = [
    {
      data: { id: 41, name: "Phillipp O'Neill", date: 1698674483000, isMainMenu: true },
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
      data: { id: 44, name: "Another Parent", date: 1698674483000, isMainMenu: true },
      children: [
        {
          data: { id: 45, name: "Child 3", date: 1698674483000, time: "Night" }
        }
      ]
    }
  ];

  openMenu(rowData: any) {
    console.log(rowData)
    this.actions = [];
    if (!!rowData.isMainMenu) {
      this.actions = [
        {
          label: 'Edit',
          icon: 'pi pi-pencil',
          command: () => {
            this.router.navigate(['menu/edit/' + this.selectedItem.id])
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: () => this.openDeleteModal()
        },
        {
          label: 'Print Menu',
          icon: 'pi pi-print',
          command: () => this.printMenu()
        },
        {
          label: 'Make Bill',
          icon: 'pi pi-money-bill',
          command: () => this.makeBillFromMenu()
        }
      ];
    } else {
      this.actions = [
        {
          label: 'Edit',
          icon: 'pi pi-pencil',
          command: () => {
            this.router.navigate(['menu/edit/' + this.selectedItem.id])
          }
        },
        {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: () => this.openDeleteModal()
        }
      ]
    }
  }

  filter: any = {};
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isMainRow(rowNode: any): boolean {
    return !!rowNode.node.children;
  }

  constructor(
    private router: Router,
    private pdfService: PdfmakeService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    // API Call
  }

  openDeleteModal() {
    console.log(this.selectedItem);
    this.showDeleteModal = true;
  }

  onDeleteMenu() {
    this.showDeleteModal = false;
    // API Call
  }

  printMenu() {
    console.log(this.selectedItem);
    this.pdfService.generatePdf();
  }

  makeBillFromMenu() {
    console.log(this.selectedItem);
  }
}
