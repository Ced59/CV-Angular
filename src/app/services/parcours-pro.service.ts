import {Injectable} from '@angular/core';
import {IEventsParcoursPro} from '../interfaces/IEvents-parcours-pro';
import {parcoursProEvents} from '../mocks/parcoursProEventsMock';

@Injectable({
  providedIn: 'root'
})
export class ParcoursProService {

  constructor() {
  }

  getParcoursProEvents(): IEventsParcoursPro[] {
    return parcoursProEvents;
  }
}
