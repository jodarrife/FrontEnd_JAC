import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoDetalleComponent } from './departamento-detalle.component';

describe('DepartamentoDetalleComponent', () => {
  let component: DepartamentoDetalleComponent;
  let fixture: ComponentFixture<DepartamentoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
