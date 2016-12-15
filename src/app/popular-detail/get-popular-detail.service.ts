import { Injectable } from '@angular/core';
import { Http }			from '@angular/http';
import { Observable }	from 'rxjs/Rx';

@Injectable()
export class GetPopularDetailService {
	private url="https://api.themoviedb.org/3/movie";
	private apiKey = "1dd8fef1dd869e4fe9b1825a7a582965";

  constructor(private http: Http) { }

  get_videos(id: number): Observable<any>{
  	return this.http.get(`${this.url}/${id}/videos?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json().results;
  		});
  }  
  get_detail(id: number): Observable<any>{
  	return this.http.get(`${this.url}/${id}?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json();
  		});
  }
}
