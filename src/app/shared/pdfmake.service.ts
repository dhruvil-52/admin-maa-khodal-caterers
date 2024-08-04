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

  generatePdf() {
    const documentDefinition = {
      content: [
        { text: 'હેલો વર્લ્ડ!' }, // Gujarati text
        { text: 'Hello World!', bold: true }
      ]
    };

    pdfMake.createPdf(documentDefinition).open();
  }
}
