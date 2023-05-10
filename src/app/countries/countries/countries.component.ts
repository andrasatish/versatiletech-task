import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries: any;
  public searchTxt: string;
  public isLoading: boolean = false;
  public error: any;
  public isActive: boolean = false;
  constructor(private _countresService:CountriesService) { }

  ngOnInit() {
    this.isLoading = true;
      this._countresService.getCountries().subscribe((response:any)=>{
        this.isLoading = false;
        this.countries = response;
      }),(err:HttpErrorResponse)=>{
        this.errorHandler(err);
      }
  }

  errorHandler(err: any) {
    if(err.message.includes('Http failure response'))
    this.isLoading = false;
    this.error = 'Please connect your network!';
  }
 
  getContent(data: string){
    this.searchTxt = data;
  }
}
