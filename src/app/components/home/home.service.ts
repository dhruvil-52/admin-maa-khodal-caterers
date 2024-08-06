import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private api: ApiService) { }

  getDetails(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.get('getDetails', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
