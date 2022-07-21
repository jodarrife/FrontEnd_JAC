import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadListComponent } from './ciudad-list.component';

describe('CiudadListComponent', () => {
  let component: CiudadListComponent;
  let fixture: ComponentFixture<CiudadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
