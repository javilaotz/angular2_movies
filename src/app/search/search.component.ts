import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { SearchServiceService }  from './search-service.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

	@Output() resp = new EventEmitter<any>();

	public visible = false;
	query_text="";
	respItems = [];
	baseUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";
	urlimg = "";
  sub:any;
  public pid:number;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private respList: SearchServiceService, ) { }

  ngOnInit() {
    this.route.params.subscribe((param: any) => {this.pid = param.pid;});
    
  }

  ngOnChanges(changes: SimpleChanges):any{
    this.clear_input();
    this.gotoPerson(this.pid);    
    this.search_qry(changes);  
  }

  search_qry(qry: any): any{
  	this.getResponse(qry);
  	this.visible = true;
  	//console.log(this.query_text);
  	this.resp.emit(this.visible);
  }

  getResponse(qry:string): any{
  	this.respList.get_multi(qry).subscribe(response => {
       this.respItems = response;
    });
  }

  clear_input(){
    this.respItems = [];
  	this.visible = false;
  	this.query_text="";
  }

  getUrl(src: string): string{
  	if(src==null) {
  		// code...
  		this.urlimg="https://lh3.googleusercontent.com/-_px7tO4lxBE/AAAAAAAAAAI/AAAAAAAAAAA/UOUy-BPbNGg/photo.jpg"
  	}else{
  		this.urlimg = `${this.baseUrl}${src}`;
  	}
  	return this.urlimg;
  }

  gotoPerson(pid:number):any{
    console.log("creo que ya está dentro pero con el id: "+pid);
    this.router.navigate(['/person', pid]);
    this.clear_input();
  }
}
