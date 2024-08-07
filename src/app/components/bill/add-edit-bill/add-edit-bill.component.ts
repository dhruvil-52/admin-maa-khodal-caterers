import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/utility.service';
import { MenuService } from '../../menu/menu.service';
import { toasterService } from '../../../shared/toaster.service';
import { BillService } from '../bill.service';

class menu {
  constructor(public date = '', public time = '', public price = 0, public items = []) {
  }
}

@Component({
  selector: 'app-add-edit-bill',
  templateUrl: './add-edit-bill.component.html',
  styleUrls: ['./add-edit-bill.component.scss']
})
export class AddEditBillComponent implements OnInit {

  billDetails: any = { data: {}, menu: [new menu()] };
  id: number;
  menus = [];
  menulist = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    private menuService: MenuService,
    private billService: BillService,
    private toasterService: toasterService
  ) { }

  ngOnInit(): void {
    this.getAllMenus();
    this.route.params.subscribe((data) => {
      this.id = +data.id;
      console.log(this.id)
    })
    if (this.id) {
      this.getBillDetails();
    }
  }

  addMenu() {
    this.billDetails.menu.push(new menu());
  }

  removeMenu(index: any) {
    this.billDetails.menu = this.utilityService.removeDataFromArray(this.billDetails.menu, index);
  }

  reset(): void {
    this.getBillDetails();
  }

  getAllMenus() {
    this.menuService.getAllMenus({ isBillGenerated: false }).then((data: any) => {
      if (data.success) {
        this.menulist = data.Data.map((e: any) => e.data);
        this.menus = data.Data;
      } else {
        this.menulist = [];
        this.menus = [];
      }
    })
  }

  getBillDetails() {
    this.billService.getBillById(this.id).then((data: any) => {
      if (data.success) {
        this.billDetails = data.Data;
      } else {
        this.billDetails = {};
      }
    })
  }

  onMenuSelected(event: any) {
    let index = this.menus.findIndex((e: any) => e.data.id, event.value)
    if (index > -1) {
      console.log(this.menus[index])
      this.billDetails = this.menus[index];
      this.billDetails.menu = this.billDetails.children;
    } else {
      this.billDetails = {};
      this.toasterService.showError('No Menu Details Found')
    }
  }

  submitDetails() {
    if (this.id) {
      this.billService.editBill({ details: this.billDetails }).then((data: any) => {
        if (data.success) {
          this.toasterService.showSuccess("Successfully Bill Edited");
          this.goTomenu();
        }
      })
    } else {
      this.billService.addBill({ details: this.billDetails }).then((data: any) => {
        if (data.success) {
          this.toasterService.showSuccess("Successfully Bill Added");
          this.goTomenu();
        }
      })
    }
  }

  goTomenu() {
    this.router.navigate(['bill'])
  }
}
