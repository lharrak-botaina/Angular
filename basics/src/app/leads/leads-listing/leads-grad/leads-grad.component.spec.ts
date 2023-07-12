import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsGradComponent } from './leads-grad.component';

describe('LeadsGradComponent', () => {
  let component: LeadsGradComponent;
  let fixture: ComponentFixture<LeadsGradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsGradComponent]
    });
    fixture = TestBed.createComponent(LeadsGradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
