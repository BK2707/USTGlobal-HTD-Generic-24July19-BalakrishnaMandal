import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private firebaseService:FireserviceService,
    private router:Router) { }
  updateProduct(product)
  {
    this.firebaseService.selectedproduct = product;
    this.router.navigateByUrl('add-product');
  }
  deleteProduct(product)
  {
    this.firebaseService.deleteData(product).subscribe(resData =>{
      console.log(resData);
      this.firebaseService.getData();
    })
  }
  ngOnInit() {
    this.firebaseService.getData();
    console.log(this.firebaseService.selectedproduct);
  }

}

