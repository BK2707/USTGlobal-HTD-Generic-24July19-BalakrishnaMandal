import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition = false;
  users= [
    {
      id:101,
      name:'Balakrishna',
      city:'Balasore'
    },
    {
      id:102,
      name:'Krishna',
      city:'Baripada'
    },
    {
      id:103,
      name:'Amit',
      city:'Chennai'
    },
    {
      id:104,
      name:'Abhishek',
      city:'Kannur'
    }
  ]

  constructor() { }
  removeUser(user){
    let index=this.users.indexOf(user);
    this.users.splice(index,1);
    this.condition= true;
  }

  ngOnInit() {
  }

}
