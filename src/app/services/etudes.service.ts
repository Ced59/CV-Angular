import { Injectable } from '@angular/core';
import {IEventsTimelines} from '../interfaces/IEvents-timelines';
import {etudesEvents} from '../mocks/etudesMock';


@Injectable({
  providedIn: 'root'
})
export class EtudesService {

  constructor() { }

  getEtudesEvents(): IEventsTimelines[] {
    return etudesEvents;
  }
}

