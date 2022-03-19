import { Component, OnInit } from '@angular/core';
import { ITestData } from '../../data-object-model/list.dto';
import * as test_data from './test_data.json';
@Component({
  selector: 'app-listing-data',
  templateUrl: './listing-data.component.html',
  styleUrls: ['./listing-data.component.scss'],
})
export class ListingDataComponent implements OnInit {
  testData!: ITestData;
  searchText!: string;

  constructor() {}

  ngOnInit(): void {
    this.getTestData();
  }

  /**
   * Load Data from the attached JSON file to populate the table.
   */
  getTestData = () => {
    this.testData = test_data;
  };

  /**
   * Render Qtr into the Table.
   */
  getQtrs = (index: number): string => {
    let selectedRow: any = this.testData.source[index];
    let qtrs: any = Object.keys(selectedRow);
    selectedRow[qtrs[2]];
    return selectedRow[qtrs[3]]
      ? `${qtrs[2]} : ${selectedRow[qtrs[2]]}, ${qtrs[3]} : ${
          selectedRow[qtrs[3]]
        }`
      : `${qtrs[2]} : ${selectedRow[qtrs[2]]}`;
  };
}
