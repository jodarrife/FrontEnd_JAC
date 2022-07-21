import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuntasAdminComponent } from './juntas-admin.component';

describe('JuntasAdminComponent', () => {
  let component: JuntasAdminComponent;
  let fixture: ComponentFixture<JuntasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuntasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuntasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
