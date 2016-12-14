import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { GetPopularService }    from '../get-popular.service';

@Component({
  selector: 'popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popular = [];	
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  
  @Output() content = new EventEmitter<any>();

  constructor(private popularService: GetPopularService) { }

  ngOnInit() {
   this.popularService.get().subscribe(response => {
       this.popular = response;
    });
  }

  returnContent(): any{
  	this.content.emit(this.popular);
  }

  getUrl(src: string): string{
  	return `${this.baseUrl}${src}`;
  }
}
