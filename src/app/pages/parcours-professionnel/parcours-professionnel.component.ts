import {Component, OnInit} from '@angular/core';
import {IEventsTimelines} from '../../interfaces/IEvents-timelines';
import {ParcoursProService} from '../../services/parcours-pro.service';

@Component({
  selector: 'app-parcours-professionnel',
  templateUrl: './parcours-professionnel.component.html',
  styleUrls: ['./parcours-professionnel.component.css']
})
export class ParcoursProfessionnelComponent implements OnInit {

  events: IEventsTimelines[];

  constructor(
    private service: ParcoursProService
  ) {
  }

  ngOnInit(): void {
    this.events = this.service.getParcoursProEvents();
  }

}
