import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchTxt: string;
  @Output() modifiedContent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  modifiedText(data: string){
    this.modifiedContent.emit(data);
  }

}
