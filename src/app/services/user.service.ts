import { logging } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from "rxjs/Rx";

const httpOptions  ={
  headers : new HttpHeaders ({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedinStatus  =  JSON.parse(localStorage.getItem('loggedin') || 'false'); 
  private localhost = 'http://localhost:8080';
  private serviceUrl= this.localhost+'/api/v1/user';
  constructor(private http:HttpClient) { }

  userRegister(registerBody:any){
    let body = JSON.stringify(registerBody);
    return this.http.post(this.serviceUrl+'/register',body,httpOptions);
  }
  
  getUserByEmail(email:string){
    console.log("email = "+email);
    return this.http.get(this.serviceUrl+'/email/'+email);
  }
  login(userBody:any){
    let body = JSON.stringify(userBody);
    return this.http.post(this.serviceUrl+'/signin',body,httpOptions); 
  }
  logout(){
    localStorage.removeItem('loggedin');
    localStorage.removeItem('username');
    localStorage.removeItem('userType');
    return true;
  }
  setUserData(loggedin:string,username:string,userType:string){
    localStorage.setItem('loggedin',loggedin);
    localStorage.setItem('username',username);
   localStorage.setItem('userType',userType); 
  }
  getUsername() {
    return JSON.stringify(localStorage.getItem('username') || '');
  }
  getUserType(){
    
    return JSON.stringify(localStorage.getItem('userType') || '{}');
  }
  getLoginStatus(){
    return JSON.parse(localStorage.getItem('loggedin') || 'false');
  }

}
