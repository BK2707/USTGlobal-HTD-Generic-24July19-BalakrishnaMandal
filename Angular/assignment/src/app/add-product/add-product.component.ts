import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private firebaseService:FireserviceService,private router:Router) { }
  postUser(productForm:NgForm){
  if(productForm.value.id)
  {
    this.firebaseService.updateData(productForm.value).subscribe(resData=>{
      console.log(resData);
      this.firebaseService.getData();
      productForm.reset();
      this.router.navigateByUrl('productdetails');
    },err=>{
      console.log(err);
    })
  } else{
    this.firebaseService.postData(productForm.value).subscribe(data=>
      {
        console.log(data);
        this.firebaseService.getData();
        productForm.reset();
        this.router.navigateByUrl('productdetails');
      },err=>{
        console.log(err);
      })
  }
}

  ngOnInit() {
  }

}
