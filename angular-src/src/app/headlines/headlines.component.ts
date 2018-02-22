import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  constructor(
    public router:Router,
    private _request: RequestService
  ) { }

  ngOnInit() {
  }
  onClick1(){
    this.router.navigate(['/dashboard']);
  }
  onClick2(){
    this.router.navigate(['/analysis']);
  }
  onClick3(){
    this.router.navigate(['/visualization']);
  }
}
