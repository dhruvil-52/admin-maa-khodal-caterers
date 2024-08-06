import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private api: ApiService) { }

  getAllMenus(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.get('menu/getAll', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
