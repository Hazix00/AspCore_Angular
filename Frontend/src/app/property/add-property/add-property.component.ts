import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate(['/list']);
  }
}
