import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListingDataComponent } from './components/listing-data/listing-data.component';


@NgModule({
  declarations: [
    ListingDataComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
