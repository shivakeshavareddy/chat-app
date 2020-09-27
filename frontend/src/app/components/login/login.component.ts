import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router} from '@angular/router'
import { ChatService} from '../../services/chat.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userTemp: User;
  constructor(private builder: FormBuilder, private userService: UserService, private router: Router, private chatService: ChatService) {}
  loginForm: FormGroup
  ngOnInit(){
    this.buildForm();
  }
  handleLogin() {
    const user = new User();
    user.userName = this.loginForm.value.userName;
    user.password = this.loginForm.value.password;

    this.userService.loginUser(user).subscribe((user) => {
      localStorage.setItem('userName', user.userName);
      // localStorage.setItem('password', user.password);
      // this.chatService.socketRegister(user.userName)
      this.router.navigate(["/home"]);
      console.log('login succesfull');
      // console.log(user);
    });
  
  }
  buildForm(){
    this.loginForm= this.builder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
}
