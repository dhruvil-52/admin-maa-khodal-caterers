import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {
    name: 'Dhruvil'
  }
  isCollapsed = true;
  isUserDetails = true;
  constructor() { }

  ngOnInit(): void {

  }

  onLogout() {
    localStorage.removeItem("authToken")
  }

}
