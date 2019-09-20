import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-link',
  templateUrl: './image-link.component.html',
  styleUrls: ['./image-link.component.css']
})
export class ImageLinkComponent implements OnInit {
  @ Output()
  event=new EventEmitter();
  

  constructor() { }

  sendUrl(url)
  {
    this.event.emit(url);
    console.log('sent');
  }

  ngOnInit() {
    
  }

}
