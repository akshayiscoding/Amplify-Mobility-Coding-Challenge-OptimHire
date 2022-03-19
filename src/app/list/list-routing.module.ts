import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingDataComponent } from './components/listing-data/listing-data.component';

const routes: Routes = [
  {
    path: 'list',
    component:ListingDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
