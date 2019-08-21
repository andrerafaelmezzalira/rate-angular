import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CalculateComponent } from './calculate/calculate.component';

@NgModule({
  declarations: [
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CalculateComponent]
})
export class AppModule { }
