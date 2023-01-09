import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

 // @Input() color :string='';
  constructor(private element: ElementRef) { 

  }

  @Input('appClass') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor= color;
  }

}
