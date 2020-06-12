import {Component, OnInit} from '@angular/core';
import {AgeService} from '../../services/age.service';
import {Age} from '../../class/age';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  age: Age = new Age();

  constructor(private service: AgeService) {
  }

  ngOnInit(): void {
    this.getAge();
  }


  getAge() {
    this.service.getAge().subscribe((age) => this.age = age);
  }

}
