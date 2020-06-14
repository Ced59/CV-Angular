import {Component, OnInit} from '@angular/core';
import {EtudesService} from '../../services/etudes.service';
import {IEventsTimelines} from '../../interfaces/IEvents-timelines';

@Component({
  selector: 'app-etudes',
  templateUrl: './etudes.component.html',
  styleUrls: ['./etudes.component.css']
})
export class EtudesComponent implements OnInit {

  events: IEventsTimelines[];

  constructor(
    private service: EtudesService
  ) {
  }

  ngOnInit(): void {
    this.events = this.service.getEtudesEvents();
  }

}
