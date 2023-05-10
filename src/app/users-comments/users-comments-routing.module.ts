import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';


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
