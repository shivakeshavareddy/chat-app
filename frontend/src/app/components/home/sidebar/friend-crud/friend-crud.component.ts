import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from  '../../../../services/user.service'; 
import {DataService} from '../../../../services/data.service';
import {CustomValidator} from '../../../../validators/custom-validator'


@Component({
  selector: 'app-friend-crud',
  templateUrl: './friend-crud.component.html',
  styleUrls: ['./friend-crud.component.css']
})
export class FriendCRUDComponent implements OnInit {

  constructor(private builder: FormBuilder, private userService: UserService, private dataService : DataService)  { }
  addFriendForm: FormGroup
  ngOnInit(): void {
    this.buildForm()
  }
  addFriend(){
    let friend = {
      friendName : this.addFriendForm.value.friendName,
      userName: localStorage.getItem("userName")
    }
    console.log(friend)
    this.userService.addFriendFront(friend).subscribe((user) =>{
      console.log("added friends ",user)
      this.dataService.sendFriendList(user.friendsList)
    })
    
  }
  buildForm(){
    this.addFriendForm=this.builder.group({
      friendName:["",[
        CustomValidator.userNameValidator
      ]]
    })
  }

}
