import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { MainComponent } from './containers/main/main.component';
import { OneSignalService } from './shared/one-signal.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ScrollingModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [OneSignalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
