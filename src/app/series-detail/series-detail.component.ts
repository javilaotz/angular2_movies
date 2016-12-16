import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetSeriesDetailService } from './get-series-detail.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

	public baseUrl = 'https://image.tmdb.org/t/p/w325/';
	public tv = [];
	public id: number;

  constructor(private router: Router, 
  				private route: ActivatedRoute, 
  				private details: GetSeriesDetailService) { }

  ngOnInit() {
  	this.route.params.subscribe((param: any) => {this.id = param.sid;});
  	this.getTvData(this.id);
  }

  /*
  *
  */
  getTvData(id:number):any{
  	this.details.get_detail(this.id).subscribe(response => {
       this.tv = response;
    });
  }

  /*
  *
  */
  getUrl(src: string): string{
  	return `${this.baseUrl}${src}`;
  }

}
