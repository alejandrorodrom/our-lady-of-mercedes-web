import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophicalStrategiesComponent } from './philosophical-strategies.component';

describe('PhilosophicalStrategiesComponent', () => {
  let component: PhilosophicalStrategiesComponent;
  let fixture: ComponentFixture<PhilosophicalStrategiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhilosophicalStrategiesComponent]
    });
    fixture = TestBed.createComponent(PhilosophicalStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
