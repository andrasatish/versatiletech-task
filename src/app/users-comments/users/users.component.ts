import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersCommentsService } from '../users-comments.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any = [];
  public searchTxt: string;
  public isLoading = false;
  public error:any;
  constructor(private _usersCommentsService:UsersCommentsService, private http:HttpClient) { }

  ngOnInit() {
    this.isLoading = true;
      this._usersCommentsService.getUsers().subscribe((response:any)=>{
      this.users = response;
      this.isLoading = false;
    }, 
    (err:HttpErrorResponse)=>{
      this.errorHandler(err);
    })
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
