import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../services/data.service'
import { Data } from '@angular/router';
@Component({
  selector: 'app-chat-head',
  templateUrl: './chat-head.component.html',
  styleUrls: ['./chat-head.component.css']
})
export class ChatHeadComponent implements OnInit {
  
  constructor(private dataService: DataService) { }
  @Input() userFriend : string;
  ngOnInit(): void {
  }
  handleSubmit(){
    this.dataService.sendMessage(this.userFriend)
  }

}
