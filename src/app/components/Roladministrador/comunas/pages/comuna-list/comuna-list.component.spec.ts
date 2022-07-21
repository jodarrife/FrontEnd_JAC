import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunaListComponent } from './comuna-list.component';

describe('ComunaListComponent', () => {
  let component: ComunaListComponent;
  let fixture: ComponentFixture<ComunaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
