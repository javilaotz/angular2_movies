import { Injectable } from '@angular/core';
import { Http }			from '@angular/http';
import { Observable }	from 'rxjs';

@Injectable()
export class SearchServiceService {
	private url="https://api.themoviedb.org/3/search/person";
	private urlSuffix="&language=en-US&query=";
	private apiKey = "1dd8fef1dd869e4fe9b1825a7a582965";
	private requestUrl: string;

  constructor(private http: Http) { }

  get_multi(query: string): Observable<any>{
  	this.requestUrl = `${this.url}?api_key=${this.apiKey}${this.urlSuffix}${query}`;
  	return this.http.get(this.requestUrl)
  	.map(response => {
  			return response.json().results;
  		});
  }

}
