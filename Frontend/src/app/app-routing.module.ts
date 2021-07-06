import { UserRegisterComponent } from './user/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  { path: 'list', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
