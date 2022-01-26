import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PormotionsServiceService {
  private pormotionsList: string[] = [
    'best offer ever',
    'offer of the year',
    'buy one get one',
    '',
    'last pormotion',
  ];
  constructor() {}

  getPormotionsIntervals(intervalSeconds: number):Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let pormotionInterval = setInterval(() => {
        counter == this.pormotionsList.length && observer.complete();

        this.pormotionsList[counter] == '' && observer.error();

        observer.next(this.pormotionsList[counter]);
        counter++;
        console.log("test interval");


      }, intervalSeconds * 1000);

      return{
        unsubscribe(){
          clearInterval(pormotionInterval);
          alert("pormotions ended");
        }
      }
    });


  }
}
