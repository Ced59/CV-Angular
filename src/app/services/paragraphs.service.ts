import {Injectable} from '@angular/core';
import {IParagraphs} from '../interfaces/IParagraphs';
import {accueilParagraphs} from '../mocks/accueilParagraphsMock';

@Injectable({
  providedIn: 'root'
})
export class ParagraphsService {

  constructor() {
  }

  getAccueilParagraphs(): IParagraphs[] {
    return accueilParagraphs;
  }
}
