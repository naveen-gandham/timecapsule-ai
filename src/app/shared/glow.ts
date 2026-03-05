import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
 selector:'[appGlow]',
 standalone:true
})
export class GlowDirective{

 constructor(private el:ElementRef){}

 @HostListener('mouseenter')
 on(){
   this.el.nativeElement.style.boxShadow='0 0 12px cyan';
 }

 @HostListener('mouseleave')
 off(){
   this.el.nativeElement.style.boxShadow='';
 }
}