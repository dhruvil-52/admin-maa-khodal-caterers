import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user).then((data: any) => {
      if (data.success) {
        this.authService.token = data.token;
        localStorage.setItem('authToken', data.token);
        this.router.navigate(['/menu']);
      }
    })
  }

}
