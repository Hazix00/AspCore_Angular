import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/models/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  newProperty: IPropertyBase = {
    Name: '',
  };

  propertyTypes: Array<string> = ['House', 'Appartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  EntranceDirections: Array<string> = ['East', 'West', 'North', 'South'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate(['/list']);
  }

  selectTab(tabId: number): void {
    this.formTabs.tabs[tabId].active = true;
  }

  onSubmit(): void {
    console.log(this.addPropertyForm);
  }
}
