import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IPropertyBase>;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let SellRent = 1;
    if (this.route.snapshot.url.toString() === 'rent-property') {
      SellRent = 2;
    }
    this.housingService.GetAllProperties(SellRent).subscribe(
      (data) => (this.Properties = data),
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
