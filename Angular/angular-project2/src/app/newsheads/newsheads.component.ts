import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsheads',
  templateUrl: './newsheads.component.html',
  styleUrls: ['./newsheads.component.css']
})
export class NewsheadsComponent implements OnInit {
  @Input()
  newsh:any ='';
  constructor() { }

  ngOnInit() {
  }

}
