import { Injectable, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Details } from './productdetails/details';


@Injectable({
  providedIn: 'root'
})
export class FireserviceService implements DoCheck {

  url:string = 'https://app-product-5f7bc.firebaseio.com';
  
selectedproduct:Details= {
name : null,
img : null,
description : null,
id:null
  }

  constructor(private http:HttpClient) { }
  details=[];

  getData(){
    this.http.get(`${this.url}/details.json`).pipe(map(resData=>{
      let usersArray = [];
      for(let key in resData)
      {
        usersArray.push({...resData[key],id:key});
      }
      return usersArray;
    })).subscribe(data=>{
      this.details=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  postData(data){
    return this.http.post(`${this.url}/details.json`,data);
  }
  updateData(data){
    return this.http.put(`${this.url}/details/${data.id}.json`,data);
  }
  deleteData(data){
    return this.http.delete(`${this.url}/details/${data.id}.json`,data);
  }
  ngDoCheck(){
    this.getData();
  }
}
