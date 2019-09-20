import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css']
})
export class TypicodeComponent implements OnInit {
typicode:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('http://jsonplaceholder.typicode.com/posts')
    .subscribe(data=>{
    this.typicode=data;
    console.log(this.typicode);
    })
   }

  ngOnInit() {
  }

}
