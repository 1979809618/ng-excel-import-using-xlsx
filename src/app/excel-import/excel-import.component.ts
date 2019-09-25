import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'app-excel-import',
  templateUrl: './excel-import.component.html',
  styleUrls: ['./excel-import.component.css']
})
export class ExcelImportComponent implements OnInit {
  excelData;

  constructor(
    private excelService: ExcelService
  ) { }

  ngOnInit() {
  }

  fileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.excelService.importExcel(e).subscribe(data => {
          this.excelData = data;
        });
      };
      reader.readAsBinaryString(fileList[0]);
    } else {
      console.log('Please select a file');
    }
  }

}
