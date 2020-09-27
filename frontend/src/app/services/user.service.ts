import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user'
  constructor(private httpClient: HttpClient) { }
  
  
     loginUser(user): any{
    return this.httpClient.post<User>(this.url + '/login', user)
  }

  registerUser(newUser): any{
    console.log("in reg")
    return this.httpClient.post<User>(this.url + "/register", newUser)
  }
  addFriendFront(friend):any{
    return this.httpClient.post<any>(this.url+"/addFriend",friend)
  }

  getFriendFront(userName):any{
    console.log("frontend user service",userName)
    return this.httpClient.post<any>(this.url+"/getFriends", {userName:userName})
  }
}
