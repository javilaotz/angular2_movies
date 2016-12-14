import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
  	this.route.params.subscribe((param: any) => {console.log(param)});
  }

}
