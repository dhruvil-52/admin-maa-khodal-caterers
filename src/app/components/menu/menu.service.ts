import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { toasterService } from 'src/app/shared/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private api: ApiService,
    private toasterService: toasterService
  ) { }

  getAllMenus(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/getAll', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }


  getMenuById(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/getById', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  addMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/add', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  editMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/edit', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  deleteMenu(id = null) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/delete', { id: id }).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  makeBill(id = null) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/makeFromMenu', { id: id }).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }


  getSubMenuById(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/subMenu/getById', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }


  editSubMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/subMenu/edit', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }

  deleteSubMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/subMenu/delete', reqData).subscribe((data) => {
        resolve(data)
      }, e => {
        console.log(e)
        this.toasterService.showError(e.error.data)
      })
    })
  }
}
