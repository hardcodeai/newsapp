import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  public constructor(public router: Router){

  }
  ngOnInit(){
    this.router.navigate(['/dashboard']);
  }
}
