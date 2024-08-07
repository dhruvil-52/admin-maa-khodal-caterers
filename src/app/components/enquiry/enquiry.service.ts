import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { toasterService } from 'src/app/shared/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(
    private api: ApiService,
    private toasterService: toasterService
  ) { }

  getAllEnquiries(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('enquiry/getAll', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }
}
