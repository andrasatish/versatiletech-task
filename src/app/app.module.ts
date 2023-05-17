import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountriesModule } from './countries/countries.module';
import { UsersCommentsModule } from './users-comments/users-comments.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MakeHttpInterceptor } from './app.interceptor';
import { DeepFilterComponent } from './deep-filter/deep-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AgGridBasicComponent } from './components/ag-grid-basic/ag-grid-basic.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    DeepFilterComponent,
    ReactiveFormComponent,
    AgGridBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersCommentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: MakeHttpInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
