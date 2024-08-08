import { Injectable } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfmakeService {

  constructor() {
  }

  getBase64ImageFromURL(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error('Failed to load image'));
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }

  async getStaticTemplate() {
    const header = await this.getBase64ImageFromURL('../../assets/icons/menu-header.jpg');
    const footer = await this.getBase64ImageFromURL('../../assets/icons/menu-footer.jpg');

    const docDefinition: any = {
      content: [
        {
          image: header,
          fit: [517.3, 400],
          alignment: 'center'
        },
        {
          margin: [0, 10, 0, 10],
          table: {
            widths: ['*', 120],
            body: []
          },
          layout: {
            hLineWidth: function () {
              return 0.5;
            },
            vLineWidth: function () { return 0.5; },
            hLineColor: function () { return 'gray'; },
            vLineColor: function () { return 'gray'; },
            paddingLeft: function () { return 5; },
            paddingRight: function () { return 2; },
            paddingTop: function () { return 5; },
            paddingBottom: function () { return 2; },
          }
        },
        {
          table: {
            widths: [20, '*'],
            body: [
            ]
          },
          layout: {
            hLineWidth: function () {
              return 0.5;
            },
            vLineWidth: function () { return 0.5; },
            hLineColor: function () { return 'gray'; },
            vLineColor: function () { return 'gray'; },
            paddingLeft: function () { return 5; },
            paddingRight: function () { return 2; },
            paddingTop: function () { return 5; },
            paddingBottom: function () { return 2; },
          }
        },
        {
          image: footer,
          margin: [0, 0, 0, 0],
          fit: [517.3, 400],
          alignment: 'center'
        },
      ]
    };

    return docDefinition;
  }

  async generatePdf(menuDetails: any = {}) {
    let data = menuDetails.data;
    let menu = menuDetails.menu;
    let docDefinition: any = await this.getStaticTemplate();
    docDefinition.content[1].table.body = [
      [data.name, 'abc'],
      [data.address, data.mobile + ', ' + data.mobile2],
    ];

    let items: any = [];
    menu.forEach((e: any) => {
      e.items.forEach((el: any, index: any) => {
        console.log(el, index)
        items.push([index, el]);
      });
    });
    docDefinition.content[2].table.body = items;
    pdfMake.createPdf(docDefinition).open();
  }
}
