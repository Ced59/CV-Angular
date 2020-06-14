import {Injectable} from '@angular/core';
import {IEventsTimelines} from '../interfaces/IEvents-timelines';
import {parcoursProEvents} from '../mocks/parcoursProEventsMock';

@Injectable({
  providedIn: 'root'
})
export class ParcoursProService {

  constructor() {
  }

  getParcoursProEvents(): IEventsTimelines[] {
    return parcoursProEvents;
  }
}
