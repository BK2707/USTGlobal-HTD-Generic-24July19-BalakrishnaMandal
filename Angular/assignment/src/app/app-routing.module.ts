import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'user',component:UsersComponent},
  {path:'typicode',component:TypicodeComponent},
  {path:'cars',component:CarsComponent},
  {path:'car-details',component:CarDetailsComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'home2',component:Home2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
