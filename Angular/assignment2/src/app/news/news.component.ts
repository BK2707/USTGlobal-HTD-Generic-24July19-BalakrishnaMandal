import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news:any[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=80cba46cc9714ada9f2a8fc84a846cf6')
    .subscribe(resData=>{
      this.news=resData.articles;
      console.log(this.news);
    })
   }

  ngOnInit() {
  }

}
