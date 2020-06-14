import {Component, OnInit} from '@angular/core';
import {IEventsParcoursPro} from '../../interfaces/IEvents-parcours-pro';
import {ParcoursProService} from '../../services/parcours-pro.service';

@Component({
  selector: 'app-parcours-professionnel',
  templateUrl: './parcours-professionnel.component.html',
  styleUrls: ['./parcours-professionnel.component.css']
})
export class ParcoursProfessionnelComponent implements OnInit {

  events: IEventsParcoursPro[];

  constructor(
    private service: ParcoursProService
  ) {
  }

  ngOnInit(): void {
    this.events = this.service.getParcoursProEvents();
  }

}
