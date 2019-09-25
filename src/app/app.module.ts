import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExcelImportComponent } from './excel-import/excel-import.component';
import { ExcelService } from './services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    ExcelImportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
