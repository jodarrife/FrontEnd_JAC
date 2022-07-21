import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadDetalleComponent } from './ciudad-detalle.component';

describe('CiudadDetalleComponent', () => {
  let component: CiudadDetalleComponent;
  let fixture: ComponentFixture<CiudadDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
