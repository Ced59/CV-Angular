import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css']
})
export class SeparatorComponent implements OnInit {

  @Input() style;

  constructor() { }

  ngOnInit(): void {
  }

}
