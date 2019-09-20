import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: any[];
  constructor(private http:HttpClient) {
    
  http.get<any>('https://api.github.com/users')
  .subscribe(data=>{
    this.users = data;
  },err=>{
    console.log('error');
  },()=>{console.log("Success")})
  }
  ngOnInit() {
  }

}
