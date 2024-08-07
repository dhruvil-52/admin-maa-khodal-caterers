import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { toasterService } from 'src/app/shared/toaster.service';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private api: ApiService,
    private toasterService: toasterService) { }

  getAllBills(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/getAll', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  getBillById(id: any = null) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/getById', { id: id }).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  addBill(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/add', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  editBill(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/edit', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  deleteBill(id = null) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/delete', { id: id }).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  paidBill(id = null) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/paid', { id: id }).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }
}
