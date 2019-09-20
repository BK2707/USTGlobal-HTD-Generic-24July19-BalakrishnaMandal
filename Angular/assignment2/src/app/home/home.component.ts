import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entertain:any[]=[];
  news:any[]=[];
  sport:any[]=[];

  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=80cba46cc9714ada9f2a8fc84a846cf6')
    .subscribe(Data=>{
      this.entertain=Data.articles;
      console.log(this.entertain);
    })

    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=80cba46cc9714ada9f2a8fc84a846cf6')
    .subscribe(resData=>{
      this.news=resData.articles;
      console.log(this.news);
    })

    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=80cba46cc9714ada9f2a8fc84a846cf6')
    .subscribe(res=>{
      this.sport=res.articles;
      console.log(this.sport);
    })
   }

  ngOnInit() {
  }

}
