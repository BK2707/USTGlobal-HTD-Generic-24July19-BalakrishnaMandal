import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.css']
})
export class EntertainComponent implements OnInit {

  entertain:any[]=[];

  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=80cba46cc9714ada9f2a8fc84a846cf6')
    .subscribe(Data=>{
      this.entertain=Data.articles;
      console.log(this.entertain);
    })
   }

  ngOnInit() {
  }

}
