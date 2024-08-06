import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private api: ApiService) { }

  getAllMenus(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/getAll', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }


  getMenuById(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/getById', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  addMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/add', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  editMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/edit', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  deleteMenu(id = null) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/delete', { id: id }).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  makeBill(id = null) {
    return new Promise((resolve, reject) => {
      this.api.post('bill/makeFromMenu', { id: id }).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }


  getSubMenuById(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/subMenu/getById', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }


  editSubMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/subMenu/edit', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  deleteSubMenu(reqData = {}) {
    return new Promise((resolve, reject) => {
      this.api.post('menu/subMenu/delete', reqData).subscribe((data) => {
        try {
          resolve(data)
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
