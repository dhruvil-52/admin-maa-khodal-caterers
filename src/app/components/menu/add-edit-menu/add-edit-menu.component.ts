import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/utility.service';

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
  menuDetails: any = { menu: [new menu()] };
  id: number;

  constructor(private route: ActivatedRoute,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = +data.id;
      console.log(this.id)
    })
  }

  addMenu() {
    this.menuDetails.menu.push(new menu());
  }

  removeMenu(index: any) {
    this.menuDetails.menu = this.utilityService.removeDataFromArray(this.menuDetails.menu, index);
  }
}
