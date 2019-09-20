import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishesReciepeComponent } from './dishes-reciepe/dishes-reciepe.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { NewsheadsComponent } from './newsheads/newsheads.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDetailsComponent,
    DishesComponent,
    HomeComponent,
    DishesReciepeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    NewsComponent,
    NewsheadsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'cars',component:CarsComponent},
      {path:'dishes',component:DishesComponent},
      {path:'news',component:NewsComponent},
      {path:'**',component:PageNotFoundComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
