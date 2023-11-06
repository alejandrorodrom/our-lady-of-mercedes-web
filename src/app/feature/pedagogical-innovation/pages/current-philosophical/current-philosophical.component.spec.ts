import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPhilosophicalComponent } from './current-philosophical.component';

describe('CurrentPhilosophicalComponent', () => {
  let component: CurrentPhilosophicalComponent;
  let fixture: ComponentFixture<CurrentPhilosophicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentPhilosophicalComponent]
    });
    fixture = TestBed.createComponent(CurrentPhilosophicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
