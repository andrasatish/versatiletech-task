import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { CountriesModule } from '../countries/countries.module';
import { UsersCommentsRoutingModule } from './users-comments-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/user/user.component';
import { CommentComponent } from './comments/comment/comment.component';



@NgModule({
  declarations: [UsersComponent, CommentsComponent, UserComponent, CommentComponent],
  imports: [
    CommonModule,
    SharedModule,
    CountriesModule,
    UsersCommentsRoutingModule,
    HttpClientModule
  ],
  exports:[
    UsersComponent, CommentsComponent
  ]
})
export class UsersCommentsModule { }
