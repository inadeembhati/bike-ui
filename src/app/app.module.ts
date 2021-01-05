import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddBikeComponent } from './components/add-bike/add-bike.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { ViewComponent } from './components/view/view.component';
import { ViewAllComponent } from "./components/view-all/view-all.component";
import { AdminComponent } from './components/admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { EditBikeComponent } from './components/edit-bike/edit-bike.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBikeComponent,
    ViewAllComponent,
    UserRegistrationComponent,
    LoginComponent,
    ViewComponent,
    AdminComponent,
    LogoutComponent,
    EditBikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
