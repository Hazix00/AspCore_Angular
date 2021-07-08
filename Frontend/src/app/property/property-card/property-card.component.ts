import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
})
export class PropertyCardComponent implements OnInit {
  @Input() property: IProperty;
  @Input() displayOptions = true;

  imgSrc: string;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc =
      'assets/img/' + (this.property.Image ?? 'House_iStock') + '.jpg';
  }
}
