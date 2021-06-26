import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
      id: 1,
      type: 'House',
      price: 12000,
    },
    {
      id: 2,
      type: 'House',
      price: 10000,
    },
    {
      id: 3,
      type: 'House',
      price: 14100,
    },
    {
      id: 4,
      type: 'House',
      price: 20000,
    },
    {
      id: 5,
      type: 'House',
      price: 44000,
    },
    {
      id: 6,
      type: 'House',
      price: 9000,
    },
    {
      id: 7,
      type: 'House',
      price: 13650,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
