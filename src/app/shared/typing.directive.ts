import {
  Directive,
  ElementRef,
  Input,
  OnChanges
} from '@angular/core';

@Directive({
  selector: '[typing]',
  standalone: true
})
export class TypingDirective implements OnChanges {

  @Input('typing') text = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.type();
  }

  private async type() {
    const element = this.el.nativeElement;
    element.innerHTML = '';

    for (let i = 0; i < this.text.length; i++) {
      element.innerHTML += this.text[i];
      await new Promise(r => setTimeout(r, 15));
    }
  }
}