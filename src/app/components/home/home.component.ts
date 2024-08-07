import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../shared/utility.service';
import { HomeService } from './home.service';
import { toasterService } from 'src/app/shared/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails: any = { categories: [] };
  categories: any;

  constructor(
    public utilityService: UtilityService,
    private homeService: HomeService,
    private toasterService: toasterService
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.homeService.getDetails().then((data: any) => {
      if (data.success) {
        this.userDetails = data.Data;
      } else {
        this.userDetails = { categories: [] };
      }
    })
  }

  reset(): void {
    this.getDetails();
  }

  submitDetails() {
    console.log(JSON.stringify(this.userDetails));
    this.homeService.submitDetails(this.userDetails).then((data: any) => {
      if (data.success) {
        this.toasterService.showSuccess("Successfully Details Edited");
      }
    })
  }

  onChipAdd(event: any) {
    this.userDetails.categories.push({ name: event.value });
  }

  onChipRemove(event: any) {
    this.userDetails.categories = this.userDetails.categories.filter((e: any) => e.name !== event.value);
  }

}
