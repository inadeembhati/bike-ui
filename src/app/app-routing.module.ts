import { EditBikeComponent } from './components/edit-bike/edit-bike.component';
import { ViewComponent } from './components/view/view.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AddBikeComponent } from './components/add-bike/add-bike.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import {  ViewAllComponent } from "./components/view-all/view-all.component";
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { 
    path : "home",
    component :HomeComponent
  },
  {
    path: "addBike",
    component : AddBikeComponent
  },
  {
    path: "viewAll",
    component : ViewAllComponent
  },
  {
    path: "userRegistration",
    component : UserRegistrationComponent
  },
  {
    path: "login",
    component : LoginComponent
  },
  {
    path: "logout",
    component : LogoutComponent
  },
  {
    path: "view/:id",
    component : ViewComponent
  },
  {
    path: "admin",
    component : AdminComponent
  },
  {
    path: "editBike/:id",
    component : EditBikeComponent
  },
  {
    path:"",
    redirectTo :"home",
    pathMatch : 'full'
  },
  
  {
    path:"**",
    redirectTo :"home",
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
