import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetSeriesService }     from './get-series.service';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
	series = [];
	baseUrl = "http://image.tmdb.org/t/p/w300/";

  constructor(private router: Router, private route: ActivatedRoute, private seriesList: GetSeriesService) { }

  ngOnInit() {
  	this.route.params.subscribe((param: any) => {console.log(param)});
  	this.seriesList.get().subscribe(response => {
       this.series = response;
    });
  }

  getUrl(src: string): string{
  	return `${this.baseUrl}${src}`;
  }

}
