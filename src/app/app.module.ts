
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { QangoService } from './qango.service';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: QangoService, useClass: QangoService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
