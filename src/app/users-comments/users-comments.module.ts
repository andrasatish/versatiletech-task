import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users/users.component";
import { SharedModule } from "../shared/shared.module";
import { CountriesModule } from "../countries/countries.module";
import { UsersCommentsRoutingModule } from "./users-comments-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./users/user/user.component";
import { CommentComponent } from "./comments/comment/comment.component";
import { CommentsComponent } from "./comments/comments/comments.component";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    CommentComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountriesModule,
    UsersCommentsRoutingModule,
    HttpClientModule,
  ],
  exports: [UsersComponent],
})
export class UsersCommentsModule {}
