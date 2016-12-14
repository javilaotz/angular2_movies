import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
	
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  
  @Input() popular: any;
  @Output() content = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  	this.returnContent();
  }

  returnContent(): any{
  	this.content.emit(this.popular);
  }

  getUrl(src: string): string{
  	return `${this.baseUrl}${src}`;
  }
}
