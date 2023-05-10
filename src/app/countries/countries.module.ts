import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { SharedModule } from '../shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    CountriesRoutingModule,
    HttpClientModule
  ],
  exports:[
    CountriesComponent
  ]
})
export class CountriesModule { }
