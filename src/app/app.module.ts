import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule } 			from '@angular/core';
import { FormsModule } 			from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } 			from '@angular/http';
import { MaterialModule } 		from '@angular/material';
import { AlertModule } 			from 'ng2-bootstrap/ng2-bootstrap';


import { AppComponent } from './app.component';
import { PopularComponent } from './popular/popular.component';
import { SeriesComponent } 		from './series/series.component';
import { MainMenuComponent } 	from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    SeriesComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
