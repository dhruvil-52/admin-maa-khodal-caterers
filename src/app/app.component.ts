import { Component, OnInit } from '@angular/core';
import { OneSignalService } from './shared/one-signal.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-maa-khodal';

  constructor(
    private oneSignalService: OneSignalService,
    private auth: AuthService,
  ) {
    this.oneSignalService.oneSignalSetup();
    this.auth.setToken();
  }

  ngOnInit(): void {
  }
}
