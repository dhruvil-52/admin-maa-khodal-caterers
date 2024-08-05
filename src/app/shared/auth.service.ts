import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any = "";

  constructor(private router: Router) { }

  setToken() {
    if (localStorage.getItem("authToken")) {
      this.token = localStorage.getItem("authToken");
    } else {
      this.logout();
    }
  }

  logout() {
    localStorage.removeItem("authToken");
    this.router.navigate(['login'])
  }

}
