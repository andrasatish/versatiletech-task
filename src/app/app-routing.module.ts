import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DeepFilterComponent } from "./deep-filter/deep-filter.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { AgGridBasicComponent } from "./components/ag-grid-basic/ag-grid-basic.component";

const routes: Routes = [
  { path: "deep-search", component: DeepFilterComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  {
    path: "countries",
    loadChildren: () =>
      import("./countries/countries.module").then((m) => m.CountriesModule),
  },
 { path:'ag-grid', component:AgGridBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
