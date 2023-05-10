import { HttpErrorResponse } from '@angular/common/http';
import { isIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersCommentsService } from '../users-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl:'./comments.component.css',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: any;
  public searchTxt: string;
  public error:any;
  public isLoading = false;

  constructor(
      private _route:ActivatedRoute, 
      private router:Router,
      private _usersCommentsService:UsersCommentsService) { }

  ngOnInit() {
    this.isLoading = true;
    this._route.params.subscribe((param:Params)=>{
      const id = +param["id"];
      if(id){
        this._usersCommentsService.getComments().subscribe((response: any)=>{
          let filtered = response.filter((item)=> item.postId === id);
          this.comments = filtered;  
          this.isLoading = false;
        },(err:HttpErrorResponse)=>{
          this.errorHandler(err);
        });
      }else{
        this._usersCommentsService.getComments().subscribe((response: any)=>{
          this.comments = response;  
          this.isLoading = false;
        }, (err:HttpErrorResponse)=>{
          this.errorHandler(err);
        });
      }
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

  selectedComment(comment) {
    this.router.navigate(['/comments',comment.postId]);
  }
}
