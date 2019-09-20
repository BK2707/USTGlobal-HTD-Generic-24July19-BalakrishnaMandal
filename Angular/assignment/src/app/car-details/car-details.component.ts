import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private firebaseService:FirebaseService,
    private router:Router) { }
  updateUser(user)
  {
    this.firebaseService.selectedUser = user;
    this.router.navigateByUrl('cars');
  }
  deleteUser(user)
  {
    this.firebaseService.deleteData(user).subscribe(resData =>{
      console.log(resData);
      this.firebaseService.getData();
    })
  }
  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.details);
  }

}
