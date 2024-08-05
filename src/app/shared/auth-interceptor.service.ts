import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpResponse
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { AuthService } from './auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { toasterService } from './toaster.service';


@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

  count: number = 0;

  constructor(
    private auth: AuthService,
    private toasterService: toasterService,
    private spinner: NgxSpinnerService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let Token;
    let headers: any = {};
    headers = request.headers;
    try {
      Token = JSON.parse(this.auth.token);
    } catch (e) {
      Token = this.auth.token;
    }
    request = request.clone({
      headers: request.headers.append('Authorization', 'Bearer ' + Token)
    });

    this.count++;
    if (this.count === 1) {
      this.spinner.show();
    }
    return next.handle(request).pipe(tap(
      event => {
        if (event instanceof HttpResponse) {
          this.count--;
          if (this.count == 0) {
            this.spinner.hide();
          }
        }
      },
      err => {
        this.count--;
        if (this.count == 0) {
          this.spinner.hide();
        }
        if (err.status == 401) {
          try {
            this.auth.logout();
            this.toasterService.showError(err.error.Message)
          } catch (error) {
            this.auth.logout();
          }
        }
      }
    )
    );
  }
}
