import { Injectable } from '@angular/core';
import { Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _friendSource = new Subject<String>() 
  friendName$ = this._friendSource.asObservable()

  private friendListSource = new Subject<Array<String>>()
  friendListSource$ = this.friendListSource.asObservable()
  constructor() { }
  sendMessage(message){
    // console.log('button is clicked')
    this._friendSource.next(message)

  }

  sendFriendList(friendList:Array<String>){

    this.friendListSource.next(friendList)
  }
}
