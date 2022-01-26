import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(creditNum:string): string {
    console.log(`${creditNum.substring(0,4)} - ${creditNum.substring(0,4)} - ${creditNum.substring(0,4)}`);

    return `${creditNum.substring(0,4)} - ${creditNum.substring(4,8)} - ${creditNum.substring(8,12)}  - ${creditNum.substring(12,16)}`;
  }

}
