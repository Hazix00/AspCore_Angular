import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/ipropertybase';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  Property: IPropertyBase;
  imgSrc: string;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.housingService.GetAllProperties().subscribe(
          (data) => {
            this.Property = data.find((prop) => prop.Id == params.id);
            this.imgSrc =
              'assets/img/' + (this.Property.Image ?? 'House_iStock') + '.jpg';
          },
          (error) => {
            console.log('httperror:');
            console.log(error);
          }
        );
      }
    });
  }
}
