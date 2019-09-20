import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  date = Date.now();

  constructor(private firebaseService:FirebaseService,
    private router:Router) { }
  updateUser(user)
  {
    this.firebaseService.selectedUser = user;
    this.router.navigateByUrl('firbase');
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
    console.log(this.firebaseService.users);
  }
/* /*   updateUser(user){
    this.firebaseService.updateData(user).subscribe(resData=>{
      console.log(resData)
    },err=>{
      console.log(err);
    } 
    )
}*/

}
