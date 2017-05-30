import { Component } from '@angular/core';
import { CmpMyComponent } from "app/components/cmp-my/cmp-my.component";
import { SrvMyService } from "./services/srv-my.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SrvMyService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private srvc:SrvMyService){

  }
  public addData(){
    let tmpText:String = "Title with date: " + Date(); 
    this.srvc.addData(this.title ,tmpText);
    this.title='';
  }
}
