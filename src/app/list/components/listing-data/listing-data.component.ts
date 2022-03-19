import { Component, OnInit } from '@angular/core';
import * as test_data from './test_data.json';

export interface ITestData {
  source: Array<IProductDetail>;
}

export interface IProductDetail {
  Product: string;
  Customer: string;
  Qtr1?: string;
  Qtr2?: string;
  Qtr3?: string;
  Qtr4?: string;
}

@Component({
  selector: 'app-listing-data',
  templateUrl: './listing-data.component.html',
  styleUrls: ['./listing-data.component.scss'],
})
export class ListingDataComponent implements OnInit {
  testData!: ITestData;

  constructor() {}

  ngOnInit(): void {
    this.getTestData();
  }

  getTestData = () => {
    this.testData = test_data;
  };

  getQtrs = (index: number): string => {
    let selectedRow: any = this.testData.source[index];
    let qtrs:any = Object.keys(selectedRow);
    selectedRow[qtrs[2]];
    return selectedRow[qtrs[3]]
      ? `${qtrs[2]} : ${selectedRow[qtrs[2]]}, ${qtrs[3]} : ${
          selectedRow[qtrs[3]]
        }`
      : `${qtrs[2]} : ${selectedRow[qtrs[2]]}`;
  };

}
