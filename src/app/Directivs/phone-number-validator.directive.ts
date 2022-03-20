import { Directive, ElementRef, HostListener } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[phoneNumberValidator]',
})
export class PhoneNumberValidatorDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('keyup') onKeyUp() {
    let val = this.elementRef.nativeElement.value;
    if (val.length == 1) {
      if (val != 0) this.elementRef.nativeElement.value = '';
    } else if (val.length == 2) {
      if (val != 1) this.elementRef.nativeElement.value = val.slice(0, -1);
    } else if (val.length == 3) {
      let num = val.slice(2);
      const re = /[0125]/;
      const valid = num.match(re);

      if (!valid) this.elementRef.nativeElement.value = val.slice(0, -1);
    } else if (val.length > 11) {
      this.elementRef.nativeElement.value = val.slice(0, -1);
    }
  }
}
