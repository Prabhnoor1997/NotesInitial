import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { AppServiceService} from '../../services/app-service.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor(private appService: AppServiceService, private routing:Router) { }
  
  ngOnInit() {
  }

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

  forgot(email){
    var user={
      
      "email" : email
  }
  
  this.appService.postRequest(user,'user/reset').subscribe((data:any)=>{
   
    if(data!=undefined){
      if(data.success){
        this.routing.navigate(['login']);
      }
        
      
    }
  })
  
  }
}
