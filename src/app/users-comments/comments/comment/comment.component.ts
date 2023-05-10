import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  setQueryParams(){
    this.router.navigate(['/comments',this.comment.postId], { queryParams: { postId: this.comment.postId } });
  }
}
