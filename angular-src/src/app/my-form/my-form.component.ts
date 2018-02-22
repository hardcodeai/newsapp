import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { RequestService } from '../services/request.service';
@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  //init the service--------------------------------------------------------------------------------------
  search = new Search('',['']);
  spaceScreens: any;
  init = true;
  img = true;
  found = true;
  constructor(
    private _request: RequestService
  ) { }
  ngOnInit() {
  }
  //getting the buttons data-------------------------------------------------------------------------------
  channelTrue=[];
  onChange($event){
    let id=($event.source.id);
    let value=($event.checked);
    if(value === true ){
      if(this.channelTrue.includes(id) === false){
        this.channelTrue.push(id);
      }
    }else{
      if(this.channelTrue.includes(id) === true){
        var i=this.channelTrue.indexOf(id);
        this.channelTrue.splice(i,1);
      }
    }
    
    this.search.channels = this.channelTrue;
  }
  onSubmit(){
    this.init = false;
    this._request.getHeadLines(this.search.channels, this.search.searchValue)
      .then(result=>{
      let arr =  result.json();
        this.spaceScreens = arr.reverse();
      if(this.spaceScreens.length == 0){
        this.found=false;
      }
      if(this.spaceScreens.imageURL === null){
        this.img = false;
      }
      else{
        this.img=true;
      }
      })
      .catch(console.log)
  }
}

//---------------------------------------------------------------------------------------------------------
