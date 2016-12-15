import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetPopularDetailService } from './get-popular-detail.service';

@Component({
  selector: 'popular-detail',
  templateUrl: './popular-detail.component.html',
  styleUrls: ['./popular-detail.component.css']
})

export class PopularDetailComponent implements OnInit {

	id: number = 0;
	baseUrl = "https://www.youtube.com/embed/";
	urlSuffix = "?rel=0&amp;controls=0&amp;showinfo=0";
	key:string = "";
	detail = [];

  constructor(	private router: Router, 
  				private route: ActivatedRoute, 
  				private details: GetPopularDetailService,
  				private videos: GetPopularDetailService
  			  ) { }

  ngOnInit() {
  	this.route.params.subscribe((param: any) => {this.id = param.id;});

  	this.get_details();
  	this.get_video();
  }

  get_details():any{
	this.details.get_detail(this.id).subscribe(response => {
       this.detail = response;
    });
  }

  get_video():any{
  	this.videos.get_videos(this.id).subscribe(response => {
       this.key = response[0].key;
    });
  }

  getUrl(src: string): string{
  	return `${this.baseUrl}${src}${this.urlSuffix}`;
  }

  showId(): string{
  	return `${this.id}`;
  }
}
