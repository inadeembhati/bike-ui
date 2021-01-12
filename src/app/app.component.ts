import { UserService } from './services/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { isDevMode } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bike-ui';
  uri! :String; 
  loggedInStatus= false;
  userType!:string;
  username!:string;
  
  constructor(private route: Router, private userService:UserService) {
    this.getUserData(); 
    if(environment.production){
      enableProdMode();
    }
    
  }
  getUserData(){
    this.loggedInStatus= this.userService.getLoginStatus() ;
    this.userType = this.userService.getUserType();
    this.username = this.userService.getUsername();
  }
  ngOnInit() {
    this.route.events
        .filter(e => e instanceof NavigationEnd)
        .subscribe(event => {
          this.uri = this.route.url;
          this.getUserData();
        });
  }
}
