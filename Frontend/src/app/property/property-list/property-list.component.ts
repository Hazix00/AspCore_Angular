import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperty>;

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.GetAllProperties().subscribe(
      (data) => (this.Properties = data),
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
