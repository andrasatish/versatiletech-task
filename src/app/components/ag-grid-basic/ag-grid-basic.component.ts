import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";
import { Observable } from "rxjs";

@Component({
  selector: "ver-ag-grid-basic",
  templateUrl: "./ag-grid-basic.component.html",
  styleUrls: ["./ag-grid-basic.component.css"],
})
export class AgGridBasicComponent implements OnInit {
  constructor(private http: HttpClient) {}

  columnDefs: ColDef[] = [
    { field: "make", rowGroup:true },
    { field: "model" },
    { field: "price" },
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  rowData = [];

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.http
     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
     .subscribe((response)=>{
      this.rowData = response
     })
  }

  onCellClicked(event){
    console.log('event', event);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
 
}
