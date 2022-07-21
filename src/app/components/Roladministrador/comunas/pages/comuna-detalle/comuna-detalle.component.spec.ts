import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunaDetalleComponent } from './comuna-detalle.component';

describe('ComunaDetalleComponent', () => {
  let component: ComunaDetalleComponent;
  let fixture: ComponentFixture<ComunaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
