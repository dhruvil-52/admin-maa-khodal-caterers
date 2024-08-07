import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/utility.service';
import { MenuService } from '../menu.service';
import { toasterService } from 'src/app/shared/toaster.service';

class menu {
  constructor(public date = '', public time = '', public price = 0, public items = []) {
  }
}
@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.scss']
})
export class AddEditMenuComponent implements OnInit {
  menuDetails: any = { data: {}, menu: [new menu()] };
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utilityService: UtilityService,
    private menuService: MenuService,
    private toasterService: toasterService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = +data.id;
      console.log(this.id)
    })
    if (this.id) {
      this.getMenuDetails();
    }
  }

  addMenu() {
    this.menuDetails.menu.push(new menu());
  }

  removeMenu(index: any) {
    this.menuDetails.menu = this.utilityService.removeDataFromArray(this.menuDetails.menu, index);
  }

  reset(): void {
    this.getMenuDetails();
  }

  getMenuDetails() {
    this.menuService.getMenuById({ menuId: this.id }).then((data: any) => {
      if (data.success) {
        this.menuDetails = data.Data;
        this.menuDetails.menu.forEach((element: any) => {
          element.date = new Date(element.date)
        });
      } else {
        this.menuDetails = { data: {}, menu: [new menu()] };
      }
    })
  }


  submitDetails() {
    console.log(JSON.stringify(this.menuDetails))
    if (this.id) {
      this.menuService.editMenu({ details: this.menuDetails }).then((data: any) => {
        if (data.success) {
          this.toasterService.showSuccess("Successfully Menu Edited");
          this.goTomenu();
        }
      })
    } else {
      this.menuService.addMenu({ details: this.menuDetails }).then((data: any) => {
        if (data.success) {
          this.toasterService.showSuccess("Successfully Menu Added");
          this.goTomenu();
        }
      })
    }
  }

  goTomenu() {
    this.router.navigate(['menu'])
  }
}
