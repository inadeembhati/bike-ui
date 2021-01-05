import { Observable } from 'rxjs/Observable';
import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    bike:any;
    id : any;
  constructor(private route : ActivatedRoute, private bikeService : BikeService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getbike();
  }
  getbike(){
    this.bikeService.getBike(this.id).subscribe(
      data => { 
        this.bike = data;
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
  onBack(){
    this.router.navigate(['/viewAll']);
  }
  onEdit(){
    this.router.navigate(['/editBike']);
  }
  deleteById(){
    this.bikeService.deleteById(this.bike.id).subscribe(
      data => {
        console.log(data);
        this.onBack();
      },
      error=> {
        console.error(error);
      }
    );

  }
}
