import { Injectable } from '@angular/core';
import { Http }			from '@angular/http';
import { Observable }	from 'rxjs';

@Injectable()
export class GetMoviesService {
	private url="https://api.themoviedb.org/3/movie/popular";
	private apiKey = "1dd8fef1dd869e4fe9b1825a7a582965";

  constructor(private http: Http) { }

  get(): Observable<any>{
  	return this.http.get(`${this.url}?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json().results;
  		});
  }

}
