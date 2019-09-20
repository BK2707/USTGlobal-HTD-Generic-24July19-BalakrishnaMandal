import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  get name()
  {
    return this.registerForm.get('name');
  }
  get email()
  {
    return this.registerForm.get('email');
  }
  get mobile()
  {
    return this.registerForm.get('mobile');
  }
  get password()
  {
    return this.registerForm.get('password');
  }
  get cpassword()
  {
    return this.registerForm.get('cpassword');
  }
  registerForm = new FormGroup({
    name:new FormControl('',[Validators.minLength(10),Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.minLength(10),Validators.required]),
    password:new FormControl('',[Validators.minLength(5),Validators.required]),
    cpassword:new FormControl('',[Validators.minLength(5),Validators.required])
  });

  ngOnInit() {
  }

}
