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
