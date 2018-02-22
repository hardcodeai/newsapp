import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  query: string;
  output: string;
  constructor(
    private _request: RequestService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
  this._request.getAnalysis(this.query)
  .then((result)=>{
   let sentimentScore = result.json();
      this.output = sentimentScore;
  })
  }
}