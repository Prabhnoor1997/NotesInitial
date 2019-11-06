import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppServiceService } from '../../services/app-service.service'
import { Router } from '@angular/router'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public passReg = ""
  public fname = new FormControl('', [Validators.required]);
  public lname = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required, Validators.minLength(8),Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?:[@#$%&]*).{8,}$")]);
  public ConfirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  service:string;
  advanceColor:string="white";
  basicColor:string="white";


  constructor(private appService: AppServiceService, private routing: Router,private dataService:DataService) {

  }

  getEmailInvalidMessage() {
    if (this.email.hasError("required")) {
      return ("Email is required");
    }
    if (this.email.hasError("email")) {
      return ("Invalid Email")
    }
  }

  getPasswordInvalidMessage() {

    if (this.password.hasError("required")) {
      return ("Password is required");
    }
    else if (this.password.hasError("minlength")) {
      return ("Minimum Length of 8 ");
    }
    else if (this.password.hasError("pattern")){
      return ("Pattern Invalid");
    }
  }

  // regexCheckNotValid() {
  //   if (!this.password.value.match("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?:[@#$%&]*).{8,}$")) {
  //     return true;
  //   } 
  //   return false
  // }


  getConfirmPasswordInvalidMessage(pass, conPass) {
    if (pass != conPass) {
      return ("Passwords Doesnt Match");
    }
  }

  validate(email, pass, conPass, password, conPassword) {

    // console.log(email,pass,conPass,password);

    if (email || pass || conPass || password != conPassword) { return true; }
    else
      return false;

  }
  registerUser(fName, lName, email, password, conPassword) {
    //console.log(fName,lName,email,password)


    if (password != conPassword)
      console.log("Password doesnt Match");
    else {
      var user = {
        "firstName": fName,
        "lastName": lName,
        "email": email,
        "password": password,
        "service":this.service
      }

      console.log(user)
      this.appService.postRequest(user, 'user/userSignUP').subscribe((data: any) => {

        if (data != undefined) {
          if (data.data.success) {
            console.log("registration status " + data.data.success);
            this.routing.navigate(['login']);
          }
        }
      })
    }

  }

 

  ngOnInit() {
    console.log(this.appService)
    this.dataService.currentMessage.subscribe((message)=>{
      if(message=="advance"||"basic")
      {
        this.service=message;
        this.checkService(message);
        //console.log("assdasdasdasdasd",message)

      }
      
    })
  }

  checkService(service){
    if(service=="advance")
      this.advanceColor="#ccac66"
    else
    this.basicColor="#ccac66"

  }
  
}
