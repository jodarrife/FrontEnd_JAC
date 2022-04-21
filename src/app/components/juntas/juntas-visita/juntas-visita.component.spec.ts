import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntasVisitaComponent } from './juntas-visita.component';

describe('JuntasVisitaComponent', () => {
  let component: JuntasVisitaComponent;
  let fixture: ComponentFixture<JuntasVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuntasVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntasVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
