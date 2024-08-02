import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const token = 'your-auth-token';
    localStorage.setItem('authToken', token);
    // API Call
    this.router.navigate(['/home'])

  }

}
