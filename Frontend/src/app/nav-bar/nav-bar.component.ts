import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  loggedIn(): string {
    return localStorage.getItem('token');
  }

  onLogOut(): void {
    localStorage.removeItem('token');
    this.route.navigate(['/user/login']);
  }
}
