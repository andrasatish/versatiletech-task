import { Component, OnInit } from '@angular/core';
import { users } from 'src/assets/users';

@Component({
  selector: 'ver-deep-filter',
  templateUrl: './deep-filter.component.html',
  styleUrls: ['./deep-filter.component.css']
})
export class DeepFilterComponent implements OnInit {
  searchDeepTerm:string="";
  users=[...users];
  constructor() { }

  ngOnInit() {
  }

}
