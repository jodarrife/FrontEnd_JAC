import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioListComponent } from './barrio-list.component';

describe('BarrioListComponent', () => {
  let component: BarrioListComponent;
  let fixture: ComponentFixture<BarrioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
