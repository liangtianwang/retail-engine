import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  dataSource: any;
  priority: any[];

  constructor()
  constructor() {
    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Customer_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Customers'
      },
      select: [
        'Customer_ID',
        'Customer_Name',
        'Customer_Address',
        'Customer_CIty',
        'Customer_State',
        'Customer_Zipcode'
      ]
    };
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }

  ngOnInit() {
  }

}
