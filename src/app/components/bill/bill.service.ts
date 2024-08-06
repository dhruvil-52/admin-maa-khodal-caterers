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

  getBillById(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.get('bill/getById', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  addBill(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/add', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  editBill(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/edit', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  deleteBill(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/delete', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  paidBill(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/paid', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
