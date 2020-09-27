import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../../models/user'
import { UserService } from '../../services/user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder: FormBuilder, private userService: UserService, private router: Router) { }
  registerForm: FormGroup
  ngOnInit() {
    this.builForm()
  }
  builForm() {
    this.registerForm = this.builder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }
  handleSubmit() {
    const newUser = new User();
    newUser.userName = this.registerForm.value.name;
    newUser.email = this.registerForm.value.email;
    newUser.password = this.registerForm.value.password;
    console.log(newUser)
    this.userService.registerUser(newUser).subscribe(()=>{
      this.router.navigate(["/login"]);
    });
  }
}
