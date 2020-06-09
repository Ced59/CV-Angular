import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import * as moment from 'moment';
import {Age} from '../class/age';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  age: Age = new Age();

  constructor() {
  }

  getTestObservable(): Observable<number> {
    return of(42);
  }

  getAge(): Observable<Age> {


    setInterval(() => {

      moment.locale('fr');

      let diffDuration = moment.duration(moment().diff(moment([1984, 10, 2, 0, 8, 0])));

      this.age.year = diffDuration.years();
      this.age.month = diffDuration.months();
      this.age.days = diffDuration.days();
      this.age.hours = diffDuration.hours();
      this.age.minutes = diffDuration.minutes();
      this.age.seconds = diffDuration.seconds();

    }, 1000);



    return of(this.age);
  }
}
