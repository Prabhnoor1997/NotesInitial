import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppServiceService } from '../../services/app-service.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  constructor(private appService: AppServiceService,
    private routing: Router, private route: ActivatedRoute,
    ) { }
  public id: string;
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    localStorage.setItem('token', this.id);
    
  }


  public password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);



  getPasswordInvalidMessage(): string {
    if (this.password.hasError("required")) {
      return ("Password is required");
    }
    if (this.password.hasError("minLength")) {
      return ("Minimum Length of 8 ")
    }
  }


  getConfirmPasswordInvalidMessage(pass, conPass) {
    if (pass != conPass) {
      return ("Passwords Doesnt Match");
    }
  }

  reset(password) {
    var user = {
    
        "newPassword": password
    


    }

    this.appService.postRequestHeaders(user, 'user/reset-password').subscribe((data: any) => {
console.log("data",data);

      // if (data != undefined) {
    //     if (data.success) {
    //       //this.snackBar.open('reset successfull', 'login')
    //       this.routing.navigate(['login']);
    //     }


    //   }
    })

  }
}
