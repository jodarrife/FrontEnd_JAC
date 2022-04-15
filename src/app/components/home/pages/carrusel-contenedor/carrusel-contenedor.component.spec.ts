import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselContenedorComponent } from './carrusel-contenedor.component';

describe('CarruselContenedorComponent', () => {
  let component: CarruselContenedorComponent;
  let fixture: ComponentFixture<CarruselContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
