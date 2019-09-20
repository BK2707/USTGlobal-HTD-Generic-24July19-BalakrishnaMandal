import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { from } from 'rxjs';
import { MoviesComponent } from './movies/movies.component';
import { FirbaseComponent } from './firbase/firbase.component';
import { UsersComponent } from './users/users.component';
import { ReducePipe } from './reduce.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    MoviesComponent,
    FirbaseComponent,
    UsersComponent,
    ReducePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'news',component:NewsComponent },
      { path:'movies',component:MoviesComponent},
      { path:'firbase',component:FirbaseComponent},
      {path:'users',component:UsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
