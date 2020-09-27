import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service'
import {UserService} from "../../../services/user.service"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  friendList:String[];
  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {

    this.userService.getFriendFront(localStorage.getItem("userName")).subscribe(
      (friendsList)=> {
        this.friendList=friendsList
      }
    )

    this.dataService.friendListSource$.subscribe((friendList)=>{
      this.friendList = friendList
    })
  }


}
