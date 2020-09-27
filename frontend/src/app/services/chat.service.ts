import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import io from 'socket.io-client'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket= null;

  constructor() { }

  initSocket(){
    this.socket = io("http://localhost:3000")
  }
  socketRegister(userName){
    this.socket.emit('register',userName)
  }

  sendMsg(to, msg){
    let Content={
      from: localStorage.getItem('userName'),
      to:to,
      msg: msg
    }
    this.socket.emit('chat',Content)
  }
  getMsg(){
    return new Observable((Content)=>{
      this.socket.on('chat', (msg) => {
        Content.next(msg)
      })
    })
  }

  getChatHistorySignal(to,from){
    // return new Observable(((Content)=>{
    //   this.socket.on("chatHistory", (msgList)=>{
    //     Content.next(msgList)
    //   })
    let Content={
      from: from,
      to: to
    }
    console.log("in chat services")
    this.socket.emit('chatHistory',Content)

  }

  getChatHistory(){
    return new Observable((Content)=>{
      this.socket.on('chatHistory', (msgList) => {
        Content.next(msgList)
      })
    })
  }

}
