import { BrowserModule } 		    from '@angular/platform-browser';
import { NgModule } 			      from '@angular/core';
import { FormsModule } 			    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } 			    from '@angular/http';
import { MaterialModule } 		  from '@angular/material';
import { AlertModule } 			    from 'ng2-bootstrap/ng2-bootstrap';


import { AppComponent }         from './app.component';

import { PopularComponent }     from './popular/popular.component';
import { GetPopularService }    from './get-popular.service';

import { SeriesComponent }      from './series/series.component';
import { GetSeriesService }     from './series/get-series.service';

import { MainMenuComponent }    from './main-menu/main-menu.component';

import { MoviesComponent }      from './movies/movies.component';
import { GetMoviesService }     from './movies/get-movies.service';

const appRoutes: Routes = [
  { path: 'series', component: SeriesComponent},
  { path: 'movies', component: MoviesComponent},
  { path: '',       component: PopularComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    SeriesComponent,
    MainMenuComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AlertModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  providers: [GetPopularService, GetSeriesService, GetMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
