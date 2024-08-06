import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any = "";

  constructor(private router: Router, private api: ApiService) { }

  login(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('login', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

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
