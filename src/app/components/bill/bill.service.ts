import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private api: ApiService) { }

  getAllBills(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.get('bill/getAll', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
