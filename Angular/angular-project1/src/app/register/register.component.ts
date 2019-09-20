import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  get name(){
    return this.registerForm.get('name');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get mob(){
    return this.registerForm.get('mob');
  }

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.minLength(3),Validators.required] ),
    email:new FormControl('',[Validators.minLength(3),Validators.email,Validators.required,CustomValidator.noSpace]),
    mob:new FormControl('',[Validators.minLength(10),Validators.required]),


  });
  printForm(registerForm)
  {
    console.log(registerForm.value);
  }

  ngOnInit() {
  }

}
