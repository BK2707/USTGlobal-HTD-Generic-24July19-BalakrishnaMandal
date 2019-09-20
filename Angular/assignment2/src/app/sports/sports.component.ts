import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
sport:any[]=[];
  constructor(private http:HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=80cba46cc9714ada9f2a8fc84a846cf6')
    .subscribe(res=>{
      this.sport=res.articles;
      console.log(this.sport);
    })
  }

  ngOnInit() {
  }

}
