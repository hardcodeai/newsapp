import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public router:Router,
    private _request: RequestService
  ) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/headlines']);
  }
}
