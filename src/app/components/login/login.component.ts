import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { AppServiceService} from '../../services/app-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email=new FormControl('',[Validators.required,Validators.email]);
  public password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  public ConfirmPassword=new FormControl('',[Validators.required,Validators.minLength(8)]);

  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return("Email is required");
    }
    if(this.email.hasError("email")){
      return("Invalid Email")
    }
  }

  getPasswordInvalidMessage(){
    if(this.password.hasError("required") || this.ConfirmPassword.hasError("required")){
      return("Password is required");
    }
    if(this.password.hasError("minLength") || this.ConfirmPassword.hasError("minLength")){
      return("Minimum Length of 8 ")
    }
  }
validate(email,pass){
  if(email || pass)
  return true;
  else
  return false;
  }
login(email,password){
  var user={
    
    "email" : email,
    "password": password
}

this.appService.postRequest(user,'user/login').subscribe((data:any)=>{
  localStorage.setItem('id',data.id);
  localStorage.setItem('userId',data.userId);
  localStorage.setItem('email',data.email);
  localStorage.setItem('firstName',data.firstName);
  localStorage.setItem('lastName',data.lastName);
  console.log(data);
  //localStorage.setItem('userId',data.userId);
 
  if(data!=undefined){
      console.log("redirecting to dashboard")
      this.routing.navigate(['']);
    
  }
})

}
  constructor(private appService: AppServiceService, private routing:Router ) { }

  ngOnInit() {
  }

}
