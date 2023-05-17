import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngStructure';
  toggleSideMenu = false;
  concepts = [
    { route:'/ag-grid', displayName: 'ag-grid'}
  ]
  selectedConcept = null;

  constructor(private route:Router){}

  toggleMenu(){
    this.toggleSideMenu = !this.toggleSideMenu;
  }

  navigateToConcept(concept){
    this.selectedConcept = concept;
    this.route.navigate([`${concept.route}`]);
    this.toggleSideMenu = false;
  }
}
