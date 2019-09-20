import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atrribute-directives',
  templateUrl: './atrribute-directives.component.html',
  styleUrls: ['./atrribute-directives.component.css']
})
export class AtrributeDirectivesComponent implements OnInit {
  isSuccess = true;
  classesArray = ["text-danger","bg-dark","mt-5"]


  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.isSuccess = false;
    },10000)
/*     setInterval(()=>
    {this.isSuccess=!this.isSuccess;
    },1000) */
  }

}
