import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public element: ElementRef) { 
    element.nativeElement.style.backgroundColor = 'red';
  }

}
