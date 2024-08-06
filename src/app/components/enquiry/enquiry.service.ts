import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private api: ApiService) { }

  getAllEnquiries(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('enquiry/getAll', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
