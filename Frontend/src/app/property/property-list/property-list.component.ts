import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IProperty>;

  constructor(
    private housingService: HousingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let SellRent: number;
    switch (this.route.snapshot.url.toString()) {
      case 'rent-property':
        SellRent = 2;
        break;
      case 'list':
        SellRent = 1;
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
