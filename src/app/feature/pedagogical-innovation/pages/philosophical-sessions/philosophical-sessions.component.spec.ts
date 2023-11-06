import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophicalSessionsComponent } from './philosophical-sessions.component';

describe('PhilosophicalSessionsComponent', () => {
  let component: PhilosophicalSessionsComponent;
  let fixture: ComponentFixture<PhilosophicalSessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhilosophicalSessionsComponent]
    });
    fixture = TestBed.createComponent(PhilosophicalSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
