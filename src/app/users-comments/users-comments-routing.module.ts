import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments/comments.component';


const routes: Routes = [
    {path:'',component:CommentsComponent},
    {path:'comments',component:CommentsComponent},
    {path:'comments/:id',component:CommentsComponent},
    {path:'users',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsersCommentsRoutingModule { }
