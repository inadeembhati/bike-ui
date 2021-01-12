import { error } from '@angular/compiler/src/util';
import {  Observable } from "rxjs/Rx";
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  validateMessage:String = "";
  loggedInStatus : boolean = this.userService.getLoginStatus();
  username!:String ;
  userType!:String ;
  constructor(private router :Router,private userService:UserService) { }

  ngOnInit(): void {
    //if its already login redirect to home page
    if(this.loggedInStatus)
      this.router.navigate(['/home']);

    this.loginForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    });
  }
  submitLoginForm(){
    //send a post query with username and password.
    console.log(this.loginForm.value['email']);
    this.userService.login(this.loginForm.value).subscribe(
      data=> {
            if((<any>data).roles[0] == "ROLE_ADMIN"){
            this.userService.setUserData('true',this.loginForm.value['email'],'admin');
          }else{
            this.userService.setUserData('true',this.loginForm.value['email'],'normal');
          }

          this.router.navigate(['/home']);

      },
      error => {
           this.validateMessage ='wrong credential';
           Observable.throwError(error);
      }
    );
    

  }


}
