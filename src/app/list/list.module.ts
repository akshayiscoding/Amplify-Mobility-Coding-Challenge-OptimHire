import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListingDataComponent } from './components/listing-data/listing-data.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListingDataComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class ListModule { }
