import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions  ={
  headers : new HttpHeaders ({'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private localhost = 'http://localhost:8080';
  private serviceUrl= this.localhost+'/api/v1/bikes/';
  constructor(private http : HttpClient) { }
  getBikesByEmail(email:any){
    console.log(this.serviceUrl+'email/'+email);
    return this.http.get(this.serviceUrl+'email/'+email);
  }
  getBikes(){
    return this.http.get(this.serviceUrl);
  }
  getBike(id:any){
    return this.http.get(this.serviceUrl+id);
  }
  createBikeRegistration(bike:any){
    console.log (bike);
    let body = JSON.stringify(bike);
    
    return this.http.post(this.serviceUrl,body,httpOptions);
  }
  deleteById(id:any){
    return this.http.delete(this.serviceUrl+id);
  }
  updateBike(bike:any,id:any){
    let body = JSON.stringify(bike);
    return this.http.put(this.serviceUrl+'edit/'+id,body,httpOptions);
  }
}
