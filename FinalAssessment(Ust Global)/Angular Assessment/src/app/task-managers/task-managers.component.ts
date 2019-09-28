import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/compiler/src/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-managers',
  templateUrl: './task-managers.component.html',
  styleUrls: ['./task-managers.component.css']
})
export class TaskManagersComponent implements OnInit {

  array:any[]=[];
  constructor() { }

  sendTask(Addtask: NgForm)
  {
    this.array.push(Addtask.value);
    Addtask.reset();
    console.log(Addtask.value);
  }

  delete(i){
    this.array.splice(i,1);
  }

  ngOnInit() {
  }

}
