import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../shared/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails: any = { categories: [] };
  categories: any;

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    // API Call
  }


  reset(): void {
    this.getDetails();
  }


  submitDetails() {
    // API Call
  }

  onChipAdd(event: any) {
    this.userDetails.categories.push({ name: event.value });
  }

  onChipRemove(event: any) {
    this.userDetails.categories = this.userDetails.categories.filter((e: any) => e.name !== event.value);
  }

}
