import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatamentosComponent } from './depatamentos.component';

describe('DepatamentosComponent', () => {
  let component: DepatamentosComponent;
  let fixture: ComponentFixture<DepatamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepatamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
