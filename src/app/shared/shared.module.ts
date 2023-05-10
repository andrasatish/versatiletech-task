import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { LoadingComponent } from './loader/loader';
import { DeepSearchPipe } from './pipes/deep-search.pipe';
import { EmailHidingPipe } from './pipes/email-hiding.pipe';

@NgModule({
  declarations: [SearchComponent, SearchPipe, LoadingComponent, DeepSearchPipe, EmailHidingPipe],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [SearchComponent, SearchPipe, LoadingComponent, DeepSearchPipe, EmailHidingPipe]
})
export class SharedModule { }
