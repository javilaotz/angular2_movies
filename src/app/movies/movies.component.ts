import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetMoviesService }     from './get-movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	movies = [];
	baseUrl = "http://image.tmdb.org/t/p/w300/";

  constructor(private router: Router, private route: ActivatedRoute, private moviesList: GetMoviesService) { }

  ngOnInit() {
  	this.route.params.subscribe((param: any) => {console.log(param)});
  	this.moviesList.get().subscribe(response => {
       this.movies = response;
    });
  }

  getUrl(src: string): string{
  	return `${this.baseUrl}${src}`;
  }
}
