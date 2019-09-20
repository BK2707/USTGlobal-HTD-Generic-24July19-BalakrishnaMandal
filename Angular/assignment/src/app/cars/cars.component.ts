import { Component, OnInit, NgModule } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm, FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {

  constructor(private firebaseService:FirebaseService,private router:Router) { }
  postUser(userForm:NgForm){
  if(userForm.value.id)
  {
    this.firebaseService.updateData(userForm.value).subscribe(resData=>{
      console.log(resData);
      this.firebaseService.getData();
      userForm.reset();
      this.router.navigateByUrl('car-details');
    },err=>{
      console.log(err);
    })
  } else{
    this.firebaseService.postData(userForm.value).subscribe(data=>
      {
        console.log(data);
        this.firebaseService.getData();
        userForm.reset();
        this.router.navigateByUrl('car-details');
      },err=>{
        console.log(err);
      })
  }
}

  ngOnInit() {
  }

}
