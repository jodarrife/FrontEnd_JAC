import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioDetalleComponent } from './barrio-detalle.component';

describe('BarrioDetalleComponent', () => {
  let component: BarrioDetalleComponent;
  let fixture: ComponentFixture<BarrioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrioDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
