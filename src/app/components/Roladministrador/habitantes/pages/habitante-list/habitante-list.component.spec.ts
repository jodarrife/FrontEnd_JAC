import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitanteListComponent } from './habitante-list.component';

describe('HabitanteListComponent', () => {
  let component: HabitanteListComponent;
  let fixture: ComponentFixture<HabitanteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitanteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
