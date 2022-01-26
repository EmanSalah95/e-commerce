import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[roundShadow]'
})
export class RoundShadowDirective implements OnChanges {
  private shadowColor:string='lightgray'
  @Input('roundShadow') bgColor:string="";

  constructor( private elementRef:ElementRef) {
    this.elementRef.nativeElement.style.boxShadow=`0 0`
  }

  ngOnChanges(): void {
    this.elementRef.nativeElement.style.backgroundColor=this.bgColor
  }

   @HostListener('mouseover') onMouseOver()
   {
    this.elementRef.nativeElement.style.boxShadow=`0 0 3px 3px ${this.shadowColor}`

  }

   @HostListener('mouseout') onMouseOut()
   {
     this.elementRef.nativeElement.style.boxShadow=`0 0 `
   }

}
