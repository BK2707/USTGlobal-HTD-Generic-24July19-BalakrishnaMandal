import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../header/user.service';
//import { interval, Subscription, from } from 'rxjs';
//import { map } from "rxjs/operators";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit,OnDestroy {

  constructor(private userService:UserService) {

   }
//mySubcription:Subscription;
  ngOnInit() {

/*     this.mySubcription=interval(1000).pipe(map(data=>
      {
        return data*10;
      })).subscribe((data)=>
    {console.log(data);
    },err=>{
      console.log(err);
    },()=>{
      console.log('subscription complete');
    }); */
  }
  ngOnDestroy()
  {
    /* this.mySubcription.unsubscribe(); */
  } 
}
