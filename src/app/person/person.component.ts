import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetPersonDetailsService }from './get-person-details.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnChanges {
	public pid: number;
	public detail = [];
  public image = [];
	public credits = [];
	public imgUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

  public inArray = [];
  public outArray = [];


  constructor(	private router: Router, 
  				private route: ActivatedRoute, 
  				private details: GetPersonDetailsService,
  			 ) { }

  ngOnInit() {
  	this.route.params.subscribe((param: any) => {this.pid=param.pid});

  	/* Call to get_details function=>GetPersonDetailsService */
  	this.get_details(this.pid);
  	
    /* Call to get_images function=>GetPersonDetailsService */
    this.get_images(this.pid);
    
  	/* Call to get_movie_credits function=>GetPersonDetailsService */
  	this.get_movie_credits(this.pid);
  }

  ngOnChanges(changes: SimpleChanges):any{
    this.route.params.subscribe((param: any) => {this.pid=param.pid});

    /* Call to get_details function=>GetPersonDetailsService */
    this.get_details(this.pid);
    
    /* Call to get_images function=>GetPersonDetailsService */
    this.get_images(this.pid);
    
    /* Call to get_movie_credits function=>GetPersonDetailsService */
    this.get_movie_credits(this.pid);
  }



  /*
	get_details function
	in : pid (person id number)
	out: json response || null
  */
  get_details(pid: number):any{
	this.details.get_detail(this.pid).subscribe(response => {
       this.detail = response;
    });
  }
  /*
  get_images function
  in : pid (person id number)
  out: json response || null
  */
  get_images(pid: number):any{
  this.details.get_img(this.pid).subscribe(response => {
       this.image = response;
    });
  }
  /*
	get_images function
	in : pid (person id number)
	out: json response || null
  */
  get_movie_credits(pid: number):any{
	this.details.get_movieCredits(this.pid).subscribe(response => {
       this.sort_array(response);
       this.credits = response;
    });
  }

  sort_array(data: any):any{
    return this.outArray = data.sort(function(a:any,b:any){
        let dateB = new Date(b.release_date);
        let dateA = new Date(a.release_date);
      return dateB.getTime() - dateA.getTime() ;
    });
  }

  getUrl(src: string): string{
  	return `${this.imgUrl}${src}`;
  }

}
