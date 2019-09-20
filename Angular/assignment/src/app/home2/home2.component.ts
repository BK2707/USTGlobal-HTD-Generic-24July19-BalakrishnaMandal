import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor(private firebaseService:FireserviceService) { }
  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.selectedproduct);
  }

  

}
