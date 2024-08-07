import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { toasterService } from 'src/app/shared/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private api: ApiService,
    private toasterService: toasterService
  ) { }

  getDetails(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('getDetails', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  submitDetails(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('submitDetails', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }
}
