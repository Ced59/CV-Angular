import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input() para: string;
  @Input() stylisedText: string;
  @Input() classToAnimate: string;
  @Input() style: string;

  constructor() { }

  ngOnInit(): void {
  }

}
