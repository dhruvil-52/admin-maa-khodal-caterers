import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfmakeService } from 'src/app/shared/pdfmake.service';
import { MenuService } from './menu.service';
import { toasterService } from '../../shared/toaster.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  filter: any = { pageNumber: 0, pageSize: 10, keyword: '', dateRange: null };
  selectedItem: any = {};
  showDeleteModal: boolean = false;
  actions: any = [];
  menu: any = {};

  openMenu(rowData: any) {
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

  onPageChange(event: any) {
    this.filter.pageNumber = event.page;
    this.getMenus();
  }

  isMainRow(rowNode: any): boolean {
    return !!rowNode.node.children;
  }

  constructor(
    private router: Router,
    private pdfService: PdfmakeService,
    private menuService: MenuService,
    private toasterService: toasterService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getAllMenus(this.filter).then((data: any) => {
      this.menu = data;
    })
  }

  openDeleteModal() {
    this.showDeleteModal = true;
  }

  onDeleteMenu() {
    this.showDeleteModal = false;
    this.menuService.deleteMenu(this.selectedItem.id).then((data: any) => {
      this.toasterService.showSuccess('Menu Successfully Deleted')
      this.getMenus();
    })
  }

  printMenu() {
    this.pdfService.generatePdf();
  }

  makeBillFromMenu() {
    this.menuService.makeBill(this.selectedItem.id).then((data: any) => {
      this.toasterService.showSuccess('Bill successfully Created from Menu')
      this.getMenus();
    })
  }
}
