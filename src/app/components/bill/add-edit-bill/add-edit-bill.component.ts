import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from 'src/app/shared/utility.service';

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
  menus = [
    {
      "name": "sanjaybhai talaviya",
      "id": 1,
      "date": new Date("2024-08-14T18:30:00.000Z")
    },
    {
      "name": "dhruvil talaviya",
      "id": 2,
      "date": new Date("2024-08-14T18:30:00.000Z")
    }
  ];

  constructor(private route: ActivatedRoute,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = +data.id;
      console.log(this.id)
    })
    if (this.id) {
      this.getBillDetails();
    }
    this.getAllMenus();
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
    // API call for get all menu items
    // combine name and date
  }

  getBillDetails() {
    // API Call
    this.billDetails = {
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
        "name": "dhruvil talaviya",
        "mobile": 8460733333,
        "address": "E-401 Shreeji Sankalp Flat,Opp meghmalhar flat,amar jawan circle ,nikol ,ahmedabad",
        "mobile2": 8460723333
      }
    }
  }

  onMenuSelected(event: any) {
    // API call for getting menu by id
  }

  submitDetails() {
    // API Call
    console.log(JSON.stringify(this.billDetails))
  }
}
