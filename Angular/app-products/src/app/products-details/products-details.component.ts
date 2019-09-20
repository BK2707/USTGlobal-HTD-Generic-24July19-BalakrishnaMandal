import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  @Input()
  productDetails:any = '';

  constructor() { }

  ngOnInit() {
  }

}
