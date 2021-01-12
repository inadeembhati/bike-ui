import { error } from '@angular/compiler/src/util';
import { UserService } from './../../services/user.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { exit } from 'process';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm!:FormGroup;
  validateMessage ="";
  successMessage ="";
  alreadyExist= false;
  constructor(private userService:UserService,private router :Router) {
    this.alreadyExist = false;
   }

  ngOnInit(): void {
    this.userForm = new FormGroup( {
      firstName  : new FormControl('',Validators.required),
      lastName  : new FormControl('',Validators.required),
      email  : new FormControl('',Validators.required),
      password  : new FormControl('',Validators.required),
      dateOfBirth  : new FormControl('',Validators.required)
    });
  }
  onUserRegistrationSubmit(){
    
    if(this.userForm.valid ){
    
      this.userService.userRegister(this.userForm.value).subscribe(
        data => {
          console.log(data);
          if(data == false){
            this.validateMessage = "Email address already in use";
       } 
      else {
        this.successMessage = "You are now registered."
      }},
        error =>{console.log(error)}
      );
        this.userForm.reset();
    }
    else{
      this.validateMessage = "Please add valid entry"
    } 

  }
}
