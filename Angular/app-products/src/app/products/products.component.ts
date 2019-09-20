import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:any = '' ;
  products = [
    {
      name:'mobile',
      img : 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
      price: 100000
    },
    {
      name:'mobile',
      img : 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
      price: 100000
    },
    {
      name:'mobile',
      img : 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
      price: 100000
    },
    {
      name:'mobile',
      img : 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
      price: 100000
    }
  ]

  constructor() { }

  sendDetails(pro)
  {
    this.product = pro;
  }

  ngOnInit() {
  }

}
