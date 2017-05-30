import { Component, OnInit } from '@angular/core';
import { SrvMyService } from '../../services/srv-my.service';

@Component({
  selector: 'app-cmp-my',
  templateUrl: './cmp-my.component.html',
  styleUrls: ['./cmp-my.component.css'],
})
export class CmpMyComponent implements OnInit {
  public data;
  constructor(private srvc:SrvMyService) { 
    this.data = srvc.getData();
  }

  ngOnInit() {
  }

}
