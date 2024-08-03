import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-maa-khodal';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}
