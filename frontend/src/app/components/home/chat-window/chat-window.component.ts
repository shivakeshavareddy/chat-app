import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../../services/chat.service'
import {DataService} from '../../../services/data.service'
@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  msgList=[]
  to:String
  constructor(private chatService: ChatService, private dataService: DataService) { }

  ngOnInit(): void {
    this.chatService.initSocket()
    this.chatService.socketRegister(localStorage.getItem('userName'))
    this.chatService.getMsg().subscribe(msg => {
      this.msgList.push(msg)
    })
    this.chatService.getChatHistory().subscribe((msg_list:Array<String>)=>{
      this.msgList=msg_list
      console.log('msg_list in window component',msg_list)
      // this.clearChat()
    }
    )
   
    this.dataService.friendName$.subscribe((userSource) => {
      this.to = userSource
      console.log(this.to)
      this.chatService.getChatHistorySignal(userSource, localStorage.getItem('userName'))
      
      
    })
  }

  handleSubmit(inputtext){
    if( this.to){
      console.log("you pressed enter")
    this.chatService.sendMsg(this.to,inputtext.value)
    this.msgList.push({from: localStorage.getItem('userName'),msg:inputtext.value})
    inputtext.value=""
  }}
  clearChat(){
    console.log(document.getElementById("chatBody").innerHTML)  
  }
}
