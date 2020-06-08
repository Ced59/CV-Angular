import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursProfessionnelComponent } from './parcours-professionnel.component';

describe('ParcoursProfessionnelComponent', () => {
  let component: ParcoursProfessionnelComponent;
  let fixture: ComponentFixture<ParcoursProfessionnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcoursProfessionnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursProfessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
