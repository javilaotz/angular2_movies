import { Component, OnInit } from '@angular/core';
import { GetPopularService } from './get-popular.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  popular = [];

  constructor(private getPopularService: GetPopularService){}

  ngOnInit(){
  	this.getPopularService.get()
  	.subscribe(popular => {
  		this.popular = popular;
  	});
  }


}