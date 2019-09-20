import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef:ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'red';
    elementRef.nativeElement.style.color = 'white';
    elementRef.nativeElement.style.padding = '10px';
    elementRef.nativeElement.style.margintop = '60px';


   }
   @HostBinding('style.background') background:string;
   @HostListener('mouseenter')
   mouseEnter(){
     this.background='skyblue';
/*      this.elementRef.nativeElement.style.background = 'blue';
     this.elementRef.nativeElement.style.color = 'white';
     this.elementRef.nativeElement.style.fontSize = '40px'; */

   }
   @HostListener('mouseleave')
   mouseLeave(){
    this.background='purple';
/*      this.elementRef.nativeElement.style.background = 'yellow';
     this.elementRef.nativeElement.style.color = 'black';
     this.elementRef.nativeElement.style.fontSize = '20px'; */


   }

}
