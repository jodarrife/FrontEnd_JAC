import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntasHabitanteComponent } from './juntas-habitante.component';

describe('JuntasHabitanteComponent', () => {
  let component: JuntasHabitanteComponent;
  let fixture: ComponentFixture<JuntasHabitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuntasHabitanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntasHabitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
