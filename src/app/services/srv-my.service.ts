import { Injectable } from '@angular/core';

@Injectable()
export class SrvMyService {
  
  private data:Array<any>;
  constructor() { 
    this.data = [{
      name:"Name1",
      title:"title1"
    },{
      name:"Name2",
      title:"Title2"
    }];
    console.log("Service constructor");
  }

  public getData(){
    return this.data;
  }

  public addData(name:String,title:String){
    let elm = {
      "name" : name,
      "title" : title
    }
    this.data.push(elm);
  }

}
