import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from './../../services/login-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage='';
  form: { username: any; email: any; password: any; };

  constructor(private logServ: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
  } 
 
 
  addUser(user) {
  console.log(user);
  this.logServ.toRegister(user).subscribe({
    next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
    error : err => {
      this.errorMessage=err.error.message;
      this.isSignUpFailed=true;
    }
  })

  }
}
