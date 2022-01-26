import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthDate',
})
export class BirthDatePipe implements PipeTransform {
  // 29512202103448
  transform(nID: string, format: string): string {
    let Year = nID.substring(1, 3);
    let Month = nID.substring(3, 5);
    let Day = nID.substring(5, 7);

    let fullDate: string =
      Day + '-' + Month + '-' + (+nID[0] == 2 ? '19' : '20') + Year;


    return +format == 0
      ? Year
      : +format == 1
      ? Month
      : +format == 2
      ? Day
      : fullDate;
  }
}
