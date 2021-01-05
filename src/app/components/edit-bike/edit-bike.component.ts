import { Observable } from 'rxjs/Observable';
import { BikeService } from './../../services/bike.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-edit-bike',
  templateUrl: './edit-bike.component.html',
  styleUrls: ['./edit-bike.component.css']
})
export class EditBikeComponent implements OnInit {
  bike:any;
  id : any;
  bikeForm! :FormGroup;
  validateMessage :String ="";
  successMessage : String = "";
  email! : string;
  buyerName! :string ;
  phone!:string ;
  model!:string ;
  serialNumber!:string;
  price!:string ;
  purchaseDate!:String ;

  constructor(private route : ActivatedRoute,private bikeService:BikeService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.bikeForm = new FormGroup({
     // _id : new FormControl(this.bike._id),
      buyerName : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      phone :new FormControl('',Validators.required),
      model :new FormControl('',Validators.required),
      serialNumber :new FormControl('',Validators.required),
      price :new FormControl('',Validators.required),
      purchaseDate :new FormControl('',Validators.required),
      contact : new FormControl()
    });
    this.getbike();
  }
  
  setData(){
  this.email  = this.bike.email;
  this.buyerName  = this.bike.buyerName;
  this.phone= this.bike.phone;
  this.model = this.bike.model;
  this.serialNumber= this.bike.serialNumber;
  this.price= this.bike.price;
  this.purchaseDate =  this.bike.purchaseDate //this.datepipe.transform(this.bike.purchaseDate, 'yyyy-MM-dd');
}
  getbike(){
    this.bikeService.getBike(this.id).subscribe(
      data => { 
        this.bike = data;
        this.setData();
        console.log(data);
        return true;
    },
      error => {
        return Observable.throwError(error)
      },
      () => {
        console.log("Bike loded");
      }
    );
  }
  updateBike(){
    if(this.bikeForm.valid){
    this.bikeService.updateBike(this.bikeForm.value,this.id).subscribe(
      data => { 
        this.validateMessage = "";
        this.successMessage  = "your data has saved"
        return true;
    },
      error => {
        return Observable.throwError(error)
      },
      () => {
        console.log("Bike loded");
      }
    );
    }
    else {
      this.successMessage = "";
      this.validateMessage = "something is wrong";
    }
  }
onBack(){
  
}
}
