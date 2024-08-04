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
    // API Call
    this.menuDetails = {
      "menu": [
        {
          "date": new Date("2024-08-12T18:30:00.000Z"),
          "time": "Noon",
          "price": 120,
          "items": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        {
          "date": new Date("2024-08-13T18:30:00.000Z"),
          "time": "night",
          "price": 60,
          "items": ["manchurian"]
        },
        {
          "date": new Date("2024-08-14T18:30:00.000Z"),
          "time": "Nasto",
          "price": 60,
          "items": ["jalebi fafda"]
        }
      ],
      "data": {
        "name": "dhruvil sanjaybhai talaviya",
        "mobile": 8460723353,
        "address": "E-401 Shreeji Sankalp Flat,Opp meghmalhar flat,amar jawan circle ,nikol ,ahmedabad",
        "mobile2": 8460723333
      }
    }
  }


  submitDetails() {
    // API Call
    console.log(JSON.stringify(this.menuDetails))
  }
}
