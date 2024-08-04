import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OneSignalService } from './shared/one-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-maa-khodal';

  constructor(private oneSignalService: OneSignalService) {
    this.oneSignalService.oneSignalSetup();
  }

  ngOnInit(): void {
  }

}
