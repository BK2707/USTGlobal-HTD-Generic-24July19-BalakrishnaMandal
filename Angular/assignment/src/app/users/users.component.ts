import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://api.github.com/users')
    .subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
   }
  



  ngOnInit() {
  }

}
