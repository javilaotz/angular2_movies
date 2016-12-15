import { Injectable } from '@angular/core';
import { Http }			from '@angular/http';
import { Observable }	from 'rxjs';

@Injectable()
export class GetPersonDetailsService {
	private url="https://api.themoviedb.org/3/person/";
	private apiKey = "1dd8fef1dd869e4fe9b1825a7a582965";

  constructor(private http: Http) { }


  get_detail(pid: number): Observable<any>{
  	return this.http.get(`${this.url}${pid}?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json();
  		});
  }

  get_img(pid: number): Observable<any>{
  	return this.http.get(`${this.url}${pid}/images?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json().profiles;
  		});
  }

  get_movieCredits(pid: number): Observable<any>{
  	return this.http.get(`${this.url}${pid}/movie_credits?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json().cast;
  		});
  }

}
