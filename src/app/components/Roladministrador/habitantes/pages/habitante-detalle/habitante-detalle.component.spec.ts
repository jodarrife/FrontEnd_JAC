import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitanteDetalleComponent } from './habitante-detalle.component';

describe('HabitanteDetalleComponent', () => {
  let component: HabitanteDetalleComponent;
  let fixture: ComponentFixture<HabitanteDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitanteDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitanteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
