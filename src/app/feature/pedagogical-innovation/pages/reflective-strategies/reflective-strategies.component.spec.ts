import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectiveStrategiesComponent } from './reflective-strategies.component';

describe('ReflectiveStrategiesComponent', () => {
  let component: ReflectiveStrategiesComponent;
  let fixture: ComponentFixture<ReflectiveStrategiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReflectiveStrategiesComponent]
    });
    fixture = TestBed.createComponent(ReflectiveStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
