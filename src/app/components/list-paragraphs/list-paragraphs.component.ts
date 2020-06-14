import {Component, OnInit} from '@angular/core';
import {IParagraphs} from '../../interfaces/IParagraphs';
import {ParagraphsService} from '../../services/paragraphs.service';

@Component({
  selector: 'app-list-paragraphs',
  templateUrl: './list-paragraphs.component.html',
  styleUrls: ['./list-paragraphs.component.css']
})
export class ListParagraphsComponent implements OnInit {

  listParagraphs: IParagraphs[];

  constructor(
    private paragrahsService: ParagraphsService
  ) {
  }

  ngOnInit(): void {
    this.listParagraphs = this.paragrahsService.getAccueilParagraphs();
  }

}
