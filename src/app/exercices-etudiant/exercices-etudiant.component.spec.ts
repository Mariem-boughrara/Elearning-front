import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicesEtudiantComponent } from './exercices-etudiant.component';

describe('ExercicesEtudiantComponent', () => {
  let component: ExercicesEtudiantComponent;
  let fixture: ComponentFixture<ExercicesEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicesEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicesEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
