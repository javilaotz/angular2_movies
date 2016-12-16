import { Injectable } from '@angular/core';
import { Http }			from '@angular/http';
import { Observable }	from 'rxjs/Rx';

@Injectable()
export class GetSeriesDetailService {

	private url="https://api.themoviedb.org/3/tv";
	private apiKey = "1dd8fef1dd869e4fe9b1825a7a582965";

  constructor(private http: Http) { }

  get_detail(id: number): Observable<any>{
  	return this.http.get(`${this.url}/${id}?api_key=${this.apiKey}`)
  	.map(response => {
  			return response.json();
  		});
  }

}
