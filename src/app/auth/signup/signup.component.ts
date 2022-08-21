import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  
  constructor(public authService: AuthService) {}

  onLogin(form: NgForm){
    //console.log("on login component");
    //console.log(form.value.email);
    this.authService.createUser(form.value.email, form.value.password);
  }
}