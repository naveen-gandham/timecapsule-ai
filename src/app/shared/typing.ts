import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector:'[typing]',
  standalone:true
})
export class TypingDirective implements OnChanges {

  @Input('typing') text = '';

  constructor(private el:ElementRef){}

  ngOnChanges() {

    let i = 0;
    const native = this.el.nativeElement;
    native.innerText = '';

    const interval = setInterval(()=>{

      native.innerText += this.text.charAt(i);
      i++;

      if(i >= this.text.length){
        clearInterval(interval);
      }

    },20);
  }
}