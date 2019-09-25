import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { of } from 'rxjs';

type AOA = any[][];
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  importExcel(e) {
    /* read workbook */
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    return of(<AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 })));
  }
}
