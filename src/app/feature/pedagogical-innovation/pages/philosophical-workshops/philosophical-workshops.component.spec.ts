import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosophicalWorkshopsComponent } from './philosophical-workshops.component';

describe('PhilosophicalWorkshopsComponent', () => {
  let component: PhilosophicalWorkshopsComponent;
  let fixture: ComponentFixture<PhilosophicalWorkshopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhilosophicalWorkshopsComponent]
    });
    fixture = TestBed.createComponent(PhilosophicalWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
