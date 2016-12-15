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

import { PopularDetailComponent } from './popular-detail/popular-detail.component';
import { GetPopularDetailService } from './popular-detail/get-popular-detail.service';
import { YtKeyPipePipe }         from './popular-detail/yt-key-pipe.pipe';

import { SearchComponent }       from './search/search.component';
import { SearchServiceService }  from './search/search-service.service';

import { PersonComponent }       from './person/person.component';
import { GetPersonDetailsService }from './person/get-person-details.service';

/*Rutas definidas (se pueden hacer por aparte pero no son suficientes)*/
const appRoutes: Routes = [
  { path: 'series',       component: SeriesComponent},
  { path: 'person/:pid',  component: PersonComponent},
  { path: 'movies',       component: MoviesComponent},
  { path: 'popular/:id',  component: PopularDetailComponent},
  { path: '',             component: PopularComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    SeriesComponent,
    MainMenuComponent,
    MoviesComponent,
    PopularDetailComponent,
    YtKeyPipePipe,
    SearchComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AlertModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  /*Proveedores de servicio*/
  providers: [GetPopularService, GetSeriesService, GetMoviesService, GetPopularDetailService, SearchServiceService, GetPersonDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
