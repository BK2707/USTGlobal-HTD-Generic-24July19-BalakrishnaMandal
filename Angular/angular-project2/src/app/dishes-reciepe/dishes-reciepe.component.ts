import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dishes-reciepe',
  templateUrl: './dishes-reciepe.component.html',
  styleUrls: ['./dishes-reciepe.component.css']
})
export class DishesReciepeComponent implements OnInit {

@Input()
reciepe : any ='';


  constructor() { }

  ngOnInit() {
  }

}
